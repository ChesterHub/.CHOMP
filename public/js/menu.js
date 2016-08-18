var menuState = {
	create: function() {
		var nameLabel = game.add.text(1, 10, 'DBC - HUNGRY INSTRUCTORS', {font: '47px Arial', fill: '#ffffff'});
		var startLabel = game.add.text(80, 300, 'press "SPACEBAR" key to start', {font: '20px Arial', fill: '#ffffff'});

		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		wkey.onDown.addOnce(this.start, this);
	},

	start: function() {
		game.state.start('play');
	}
};