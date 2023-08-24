let keys = [];

document.body.addEventListener('keydown', function (event) {
    keys[event.code] = true;
});

document.body.addEventListener('keyup', function (event) {
    keys[event.code] = false;
});

class Player {
    constructor(
        width,
        height,
        color,
        x,
        y,
        speed,
        velX,
        velY,
        friction,
        gravity
    ) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.velX = velX;
        this.velY = velY;
        this.jump = false;
        this.friction = friction;
        this.gravity = gravity;
    }
    makePlayer() {
        let ctx=document.getElementById("responsive-canvas").getContext("2d")
        let img= new Image()
        img.onload= () => {
            ctx.drawImage(img,this.x,this.y,this.width,this.height)
        }

    }
    update() {
        if (keys.ArrowUp) {
            if (!this.jump) {
                this.jump = true;
                this.velY = -this.speed * 2;
            }
        }

        // right arrow
        if (keys.ArrowRight) {
            if (this.velX < this.speed) {
                this.velX++;
            }
        }

        // left arrow
        if (keys.ArrowLeft) {
            if (this.velX > -this.speed) {
                this.velX--;
            }
        }

        this.velX *= this.friction;
        this.velY += this.gravity;


        this.x += this.velX;
        this.y += this.velY;


        if (this.x >= 480 - this.width) {
            this.x = 480 - this.width;
        } else if (this.x <= 0) {
            this.x = 0;
        }
        if (this.y >= 270 - this.height - 70) {

            this.y = 270 - this.height - 70;
            this.jump = false;
        }

        let ctx = document.querySelector('canvas').getContext('2d');

        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        let img= new Image()
        img.src="/img/naruto.png"
        ctx.drawImage(img,this.x,this.y,this.width,this.height)


    }
}
class Obstacle extends Player {
    constructor(
        width,
        height,
        color,
        x,
        y,
        speed,
        velX,
        velY,
        friction,
        gravity
    ) {
        super(width, height, color, x, y, speed, velX, velY, friction, gravity);
    }
    moveObstacle() {
        if (this.x - this.width / 4 <= 0) {
            this.velX = 6;
        }
        if (this.x + this.width >= 480) {
            this.velX = -6;
        }

    }
    updateObstacle() {
        this.x += this.velX;
        let ctx = document.querySelector('canvas').getContext('2d');
        let img= new Image()
        img.src="/img/zabuza.png"
        ctx.drawImage(img,this.x,this.y,this.width,this.height)
    }
}
