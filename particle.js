

var particle = {
    position: null,
    velocity: null,
    
    create: function(x,y,speed,direction, isRad){
        this.position = TwoDVector.create(x,y);
        this.velocity = Object.create(TwoDVector);
        this.velocity.setLength(speed);
        if(isRad){
            this.velocity.setAngle(direction);
        }else {
            this.velocity.setAngleDegrees(isRad);
        }
    }
    
    accel: function(accelVector){
        this.velocity.addThis(accelVector);
    }

    move: function(){
        this.position.addThis(this.velocity);
    }
}