var winState = {
	create: function() {
		// handleScoreOnScreen();
		this.background = this.game.add.sprite(0,0, 'background2');
		this.background = this.game.add.sprite(220,150, 'hunter');
		var winlabel = game.add.text(180,80, 'GAME OVER', {font: '50px Tahoma', fill: '#00FF00'});
		var startLabel = game.add.text(170, 50, 'press "SPACEBAR" to restart', {font: '20px Verdana', fill: '#ffffff'});
		var scoreLabel = game.add.text(200, 400, 'Your Score: ' + score, {font: '30px Verdana', fill: 'black'});

		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		wkey.onDown.addOnce(this.restart, this);

	},


	restart: function() {
		game.state.start('menu');
	}

}

// handleScoreOnScreen = function(){
// 	$.get('/get_score')
// 	.done(function(response){
// 		// var scoreLabel = game.add.text(170, 30, 'Your Score: ' + response, {font: '20px Verdana', fill: '#ffffff'});
// 	})
// 	.fail(function(){alert('You fucked up')})
// }