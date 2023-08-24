class Coin {
    constructor(x, y, width,height, color) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        // this.radius = radius;
        // this.startAngle = startAngle;
        // this.endAngle = endAngle;
        this.color = color;
    }

    makeCoin() {
        let ctx = document.getElementById("responsive-canvas").getContext('2d');
        let img= new Image()
        img.onload= () => {
            ctx.drawImage(img,this.x,this.y,this.width,this.height)
        }
    }

    moveCoin() {
        this.x = Math.floor(Math.random() * 470) + 10;
        this.y = Math.floor(Math.random() * 180) + 10;
    }

    updateCoin() {
        let ctx = document.getElementById('responsive-canvas').getContext('2d');
        let img= new Image()
        img.src="/img/money.png"
        ctx.drawImage(img,this.x,this.y,this.width,this.height)
    }
}