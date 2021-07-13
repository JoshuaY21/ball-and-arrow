class Ball {

    constructor(x,y,r) {

        var options = {

            restitution: 0.6,
            frictionAir: 0.01

        }
        this.x = x;
        this.y = y;
        this.r = r;



        this.body = Bodies.circle(x,y,r,options);
        World.add(world, this.body);
    }


    show() {
        var pos = this.body.position
        ellipseMode(RADIUS);

        push();
        fill("blue");
        stroke("yellow")
        ellipse(pos.x,pos.y,this.r)
        pop();
        
    }

}