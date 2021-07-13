class Ground{


    constructor(x,y,w,h){
     //properties

     var options = {
         isStatic : true
     }
     
     this.w = w;
     this.h = h;
     this.x = x;
     this.y = y;
     this.body = Bodies.rectangle (x,y,w,h, options);
     World.add(world, this.body)
    }


        //functions

        show(){
            var pos = this.body.position;
         //insert a setting
           push();
            rectMode(CENTER);
            stroke("red");
            fill("green");
            rect(pos.x,pos.y,this.w,this.h);
            //revert to previous setting
           pop();
            
        }
}