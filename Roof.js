class Roof {
    constructor(x,y,width,heigth){
        this.body = Bodies.rectangle(x,y,width,heigth,{isStatic:true});
        this.width =  width ;
        this.heigth = heigth ;
        World.add(wrold,this.body)
    }

    display() {
       push();
       rectMode(CENTER);
       fill(128,128,128);
       rect(this.body.position.y,this.body.position.y,this.width,this.heigth);
       pop();
    }
}