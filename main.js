let myPlayer = new Player(30, 30, 'black', 200, 120, 3, 0, 0, 0.93, 0.1); //////////added friction and gravity values
let myGameArea = new GameArea();
let myCoin = new Coin(100, 75, 20, 20);
let myObstacle = new Obstacle(30, 30, 'red', 0, 90, 3, 0, 0, 1, 0);
let myGame = new Game(myPlayer, myGameArea, myCoin, myObstacle);
setTimeout(() => {
let themeAudio = new Audio('audio/narutosong.mp3');
themeAudio.play();
}, 1000)
myGame.startGame();
myGame.updateGame();
