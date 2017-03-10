var menuState = {
	create: function() {
		this.background = this.game.add.sprite(0,0, 'menuBackground');
		var nameLabel = game.add.text(175, 200, 'dotCHOMP', {font: '50px Tahoma', fill: '#f1c40f'});
		var startLabel = game.add.text(260, 335, 'press "SPACEBAR" to start', {font: '20px Verdana', fill: '#ffffff'});
		var instructionLabel = game.add.text(210, 390, 'A = move left   W = jump   D = move right', {font: '16px Verdana', fill: '#ffffff'});
		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		wkey.onDown.addOnce(this.start, this);
	},

	start: function() {
		game.state.start('play');
	}
};