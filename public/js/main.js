var game = new Phaser.Game(800, 600, Phaser.AUTO);

var GameState = {
	preload: function(){
		this.load.image('background', '/assets/2d_background.jpg');
		this.load.image('mushroom', '/assets/Mushroom.png');
		this.load.image('hunter', '/assets/hunterhead.png');
	},
	create: function(){
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.background = this.game.add.sprite(0,0, 'background');

		// Mushroom
		this.mushroom = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'mushroom');
		this.mushroom.anchor.setTo(0.5,0.5);
		this.physics.enable(this.mushroom);
		this.mushroom.body.gravity.y = 900;
		this.mushroom.body.collideWorldBounds = true;
		// this.mushroom.body.gravity.x = 50;
		this.mushroom.body.bounce.setTo(1,0);

		// Hunter's Head
		this.hunter = this.game.add.sprite(350,0, 'hunter');
		this.hunter.scale.setTo(0.4,0.4);
		this.physics.enable(this.hunter);
		// Make Hunter Head Move
		this.hunter.body.collideWorldBounds=true;
		this.hunter.body.gravity.y = 300 + Math.random() * 100;
		this.hunter.body.bounce.setTo(.95, 1);

		// Score with global variables
		score = 0
		scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '24px', fill: '#000' });
		gameover = false


	},
	update: function(){
		// Update Score
		if (gameover === false) {
			score += 1;
			scoreText.text = 'Score: ' + score;}
		// Hunter Randomize Gravity
		this.hunter.body.gravity.x = this.rnd.integerInRange(-5000, 5000);
		// Destroy muaheoom
		if (this.physics.arcade.collide(this.mushroom, this.hunter)) {
			hunterEat(this.mushroom, this.hunter);
		}
		// MOVEMENT with keys
		if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT))
		{
			this.mushroom.body.velocity.x = -400;
		}
		else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
		{
			this.mushroom.body.velocity.x = 400;
		}
		if (this.input.keyboard.isDown(Phaser.Keyboard.UP) && (this.mushroom.body.onFloor() || this.mushroom.body.touching.down))
		{
			this.mushroom.body.velocity.y = -900;
		}
		// function when mushroom dies, stop the game
		hunterEat = function(mushroom, hunter) {
			mushroom.kill();
			hunter.scale.setTo(1,1);
			gameover = true;
		}
	},
};



game.state.add('GameState', GameState);
game.state.start('GameState');