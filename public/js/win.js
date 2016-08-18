var winState = {
	create: function() {
		var winlabel = game.add.text(80,80, 'GAME OVER', {font: '50px Arial', fill: '#00FF00'});
		var sstartLabel = game.add.test(80, 50, 'press the "w" key to restart', {font: '20px Arial', fill: '#ffffff'});

		var wkey = game.input.keyboard.addKey(Phaser.keyboard.W);

		wkey.onDown.addOnce(this.restart, this);
	},

	restart: funciton() {
		game.state.start('menu');
	}
}