var playState = {
	create: function() {
		this.background = this.game.add.sprite(0,0, 'background2');

		// Mushroom
		this.mushroom = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'mushroom');
		this.mushroom.anchor.setTo(0.5,0.5);
		this.physics.enable(this.mushroom);
		this.mushroom.body.gravity.y = 1000;
		this.mushroom.body.collideWorldBounds = true;
		this.mushroom.body.bounce.setTo(1,0);

		// Hunter's Head
		this.hunter = this.game.add.sprite(350,0, 'hunter');
		this.hunter.scale.setTo(0.4,0.4);
		this.physics.enable(this.hunter);
		// Make Hunter Head Move
		this.hunter.body.collideWorldBounds=true;
		this.hunter.body.gravity.y = 300 + Math.random() * 100;
		this.hunter.body.bounce.setTo(.95, 1);

		// Seba's Head
		this.seba = this.game.add.sprite(350,-100, 'seba');
		this.seba.scale.setTo(0.9,0.9);
		this.physics.enable(this.seba);
		// Make Seba Head Move
		this.seba.body.collideWorldBounds=true;
		this.seba.body.gravity.y = 400;	
		this.seba.body.bounce.setTo(.8, .65);
		this.seba.body.enable = false;
		this.seba.visible = false;

		// Score with global variables
		score = 0
		scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '24px', fill: '#000' });
		gameover = false

	},

	update: function() {
		// Update Score
		if (gameover === false) {
			score += 1;
			scoreText.text = 'Score: ' + score;}
		//Activate Seba at score 1000
		if (score >= 1000) {
			this.seba.body.enable = true;
			this.seba.visible = true;
		} 
		// Hunter Randomize Gravity
		this.hunter.body.gravity.x = this.rnd.integerInRange(-4500, 4500);
		// Seba Randomize Gravity
		this.seba.body.gravity.x = this.rnd.integerInRange(-2000, 2000);
		// Hunter and Seba Head Collision
		if (this.physics.arcade.collide(this.hunter, this.seba)) {
			this.hunter.body.velocity.y = 700;
			this.seba.body.velocity.x = this.rnd.integerInRange(-900,900);
		}
		// Destroy mushroom
		if ((this.physics.arcade.collide(this.mushroom, this.hunter)) || (this.physics.arcade.collide(this.mushroom, this.seba))) {
			eatMushroom(this.mushroom, this.hunter);
		}
		// MOVEMENT with keys
		this.mushroom.body.velocity.x = 0;
		if (this.input.keyboard.isDown(Phaser.Keyboard.A))
		{
			this.mushroom.body.velocity.x = -450;
		}
		else if (this.input.keyboard.isDown(Phaser.Keyboard.D))
		{
			this.mushroom.body.velocity.x = 450;
		}
		if (this.input.keyboard.isDown(Phaser.Keyboard.W) && (this.mushroom.body.onFloor() || this.mushroom.body.touching.down))
		{
			this.mushroom.body.velocity.y = -1000;
		}

		// function when mushroom dies, stop the game
		eatMushroom = function(mushroom, head) {
			mushroom.kill();
			// hunter.scale.setTo(1,1);
			gameover = true;
			// Win function doesn't work. So i start gameover here
			game.state.start('win');
			handleEndOfGame();
		}
	}
}

function handleEndOfGame(){
	$.post('/add_score_to_user', {score: score})
	.done(function(res){
		$("#scores").html();
	})
	.fail(function(){alert('You fucked up')})
}