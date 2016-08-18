var winState = {
	create: function() {
		var winlabel = game.add.text(180,80, 'GAME OVER', {font: '50px Arial', fill: '#00FF00'});
		var startLabel = game.add.text(180, 50, 'press the "SPACEBAR" key to restart', {font: '20px Arial', fill: '#ffffff'});

		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		wkey.onDown.addOnce(this.restart, this);
	},

	restart: function() {
		game.state.start('menu');
	}
}