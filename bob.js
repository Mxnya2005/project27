class Bob {
    constructor(x,y,r){
        var options= {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.r= r
        this.body=Bodies.circle(x,y,(this.r)/2,options)
        World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    }
}