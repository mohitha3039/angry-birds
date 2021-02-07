class Box 
{
    constructor()
    {
        var features = {
            isStatic : false,
            restitution : 1
          
          }
          
         this.box = Bodies.rectangle (400,400,60,60,features)
          World.add(myWorld,this.box)
        
    }
    display()
    {
        rectMode (CENTER)
rect(this.box.position.x,this.box.position.y,60,60)
    }
}