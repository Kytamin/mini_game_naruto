class Game {
    constructor(player, gameArea, coin, obstacle) {
        this.player = player;
        this.gameArea = gameArea;
        this.coin = coin;
        this.score = 0;
        this.obstacle = obstacle;
    }

    startGame() {
        (function () {
            let requestAnimationFrame =
                window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame;
            window.requestAnimationFrame = requestAnimationFrame;
        })();

        this.gameArea.start();
        this.player.makePlayer();
        this.coin.makeCoin();
        this.obstacle.makePlayer();
        this.score = 0;
    }

    collisionCheck() {
        if (
            this.player.x < this.coin.x + this.coin.width &&
            this.player.x + this.player.width > this.coin.x &&
            this.player.y < this.coin.y + this.coin.width &&
            this.player.y + this.player.height > this.coin.y
        ) {
            this.coin.moveCoin();
            this.score++;
        }
        if (
            this.player.x < this.obstacle.x + this.obstacle.width &&
            this.player.x + this.player.width > this.obstacle.x &&
            this.player.y < this.obstacle.y + this.obstacle.width &&
            this.player.y + this.player.height > this.obstacle.y
        ) {
            this.endGame();
        }
        if(this.score===5){
            this.player.color = 'white';
            this.score = 0;
            this.gameArea.winGameMessage();
            cancelAnimationFrame();
        }
    }

    updateGame() {
        let ctx = document.getElementById('responsive-canvas').getContext('2d');
        ctx.clearRect(0, 0, 480, 200);
        myCoin.updateCoin();
        myPlayer.update();
        myObstacle.updateObstacle();
        myObstacle.moveObstacle();
        this.collisionCheck();
        this.gameArea.updateScore(this.score);
        requestAnimationFrame(() => this.updateGame());
    }

    endGame(stroketext) {
        this.player.color = 'white';
        this.score = 0;
        this.gameArea.endGameMessage();
        cancelAnimationFrame();
    }
}
class GameArea {
    constructor() {
        this.canvas = document.getElementById('responsive-canvas');
    }
    start() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext('2d');
        this.context.fillStyle = 'black';
        this.context.fillRect(0, 200, 480, 70);
    }

    updateScore(score) {
        let ctx = this.context;
        ctx.fillStyle='orange'
        ctx.font = '30px Consolas';
        ctx.fillText(score, 10, 50);
    }

    endGameMessage() {
        let ctx = this.context;
        ctx.font = '50px Consolas';
        ctx.strokeStyle="red"
        ctx.fill()
        ctx.strokeText('GAME OVER', 120, 130);
    }
    winGameMessage(){
        let ctx = this.context;
        ctx.font ='60px Consolas'
        ctx.strokeStyle="red"
        ctx.strokeText(' You Win',120,130)
    }
}
