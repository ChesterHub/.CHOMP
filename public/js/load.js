var loadState = {
	preload: function(){
		var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});
		game.load.image('background', '/assets/2d_background.jpg');
		game.load.image('mushroom', '/assets/Mushroom.png');
		game.load.image('hunter', '/assets/hunterhead.png');
		game.load.image('seba', '/assets/sebaHead.jpg');
		game.load.image('background2', '/assets/trees.png');
		game.load.image('menuBackground', '/assets/green_background.jpg');
	},


	create: function() {
		game.state.start('menu');
	}
}