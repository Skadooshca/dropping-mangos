class Sling{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:10
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling)
    }
    display(){
        if(this.sling.bodyA){
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y, this.sling.pointB.x,this.sling.pointB.y)
        }
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(bodyA){
        this.sling.bodyA=bodyA
    }
}