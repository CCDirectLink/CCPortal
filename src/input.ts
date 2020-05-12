export class Input {
	private mirrored = false;

	public init(): void {
		const self = this;
		ig.Input.inject({
			keydown(event: KeyboardEvent): void {
				if(ig.system.crashed 
					|| this.isInIframeAndUnfocused()
					|| (event as any).target.type == 'text'
					|| event.type !== 'keyup') {
					this.parent(event);
					return;
				}

				if (self.mirrored) {
					self.swap('up', 'down');
				}

				this.parent(event);

				if (self.mirrored) {
					self.swap('up', 'down');
				}
			},
			keyup(event: KeyboardEvent): void {
				if(ig.system.crashed 
					|| this.isInIframeAndUnfocused()
					|| (event as any).target.type == 'text'
					|| event.type !== 'keyup') {
					this.parent(event);
					return;
				}

				if (self.mirrored) {
					const code = event.keyCode;
					const action = this.bindings[code];
					if (action === 'up' || action === 'down') {
						self.swap('up', 'down');
						self.mirrored = false;
					}
				}
				this.parent(event);
			}
		});
	}

	public mirror(): void {
		this.mirrored = true;

		this.swap('up', 'down');
	}

	private swap(actionA: string, actionB: string): void {
		const down = ig.input.state(actionA);
		const pressed = ig.input.pressed(actionA);

		ig.input.actions[actionA] = ig.input.state(actionB);
		ig.input.presses[actionA] = ig.input.pressed(actionB);
		
		ig.input.actions[actionB] = down;
		ig.input.presses[actionB] = pressed;
	}
}