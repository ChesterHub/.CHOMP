var loadState = {
	preload: function(){
		var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});
		game.load.image('background', '/assets/2d_background.jpg');
		game.load.image('mushroom', '/assets/Mushroom.png');
		game.load.image('hunter', '/assets/hunterhead.png');
	},


	create: function() {
		game.state.start('menu');
	}
}