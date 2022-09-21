class Paddle {
    X;
    Y;
    width;
    height;
    color;

    constructor(X, Y, width, height, color) {
        this.X = X;
        this.Y = Y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    setX(X){
        this.X=X;
    }
    getX(){
        return this.X;
    }
    setY(Y){
        this.Y=Y;
    }
    getY(){
        return this.Y;
    }
    setWidth(width){
        this.width=width;
    }
    getWidth(){
        return this.width;
    }
    setHeight(height){
        this.height=height;
    }
    getHeight(){
        return this.height;
    }
    setColor(color){
        this.color=color;
    }
    getColor(){
        return this.color
    }
    drawPaddle(ctx){
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.X,this.Y,this.width,this.height)
        ctx.fill()
        ctx.closePath()
    }
    moveLeft(){
        this.X -= 20
    }
    moveRight(){
        this.X += 20
    }
}