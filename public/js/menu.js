var menuState = {
	create: function() {
		var nameLabel = game.add.text(80, 80, 'DBC HUNGRY', {font: '50px Arial', fill: '#ffffff'});
		var startLanel = game.add.text(80, 'press "W" key to start', {font: '20px Arial', fill: '#ffffff'});

		var wkey = game.input.keyboard.addKey(Phaser.keyboard.W);

		wkey.onDown.addOnce(this.start, this);
	},

	start: function() {
		game.state.start('play');
	}
};