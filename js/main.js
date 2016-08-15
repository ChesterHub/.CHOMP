var game = new Phaser.Game(800, 600, Phaser.AUTO);

var GameState = {
	preload: function(){
		this.load.image('background', 'assets/2d_background.jpg');
		this.load.image('mushroom', 'assets/Mushroom.png');
	},
	create: function(){
		this.physics.startSystem(Phaser.Physics.ARCADE);

		this.background = this.game.add.sprite(0,0, 'background');
		this.mushroom = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'mushroom');
		this.mushroom.anchor.setTo(0.5,0.5);
		this.mushroom.scale.setTo(1.5,1.5);

		this.physics.enable(mushroom);
		// this.mushroom.body.gravity.y = 100;
		// this.mushroom.body.collideWorldBounds = true;
	},
	update: function(){
		// MOVEMENT with keys
		if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT))
		{
			this.mushroom.x -= 3;
		}
		else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
		{
			this.mushroom.x += 3;
		}

		if (this.input.keyboard.isDown(Phaser.Keyboard.UP))
		{
			this.mushroom.y -= 3;
		}
		else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN))
		{
			this.mushroom.y += 3;
		}

		// if (this.physics.arcade.distanceToPointer(mushroom, this.input.activePointer) > 5)
		// {
  //       //  Make the object seek to the active pointer (mouse or touch).
        // this.physics.arcade.moveToPointer(mushroom, 300);
  //   	};
}

// 	render: function(){
// 		this.debug.inputInfo(32, 32);
// 	}
};

game.state.add('GameState', GameState);
game.state.start('GameState');


// OLD HTML CODE
	// <script type="text/javascript">
	// 	var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

	// 	function preload() {
	// 		game.load.image('background', 'assets/2d_background.jpg');
	// 	}

	// 	function create() {
	// 		game.background = game.game.add.sprite(0,0, 'background');
	// 	}

	// 	function update() {
	// 	}

	// </script>