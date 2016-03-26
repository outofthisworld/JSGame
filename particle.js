var particle = {
    position: null
    , velocity: null,

    create: function (x, y, speed, direction, isRad) {
        var particle = Object.create(this);
        particle.position = TwoDVector.create(x, y);
        particle.velocity = TwoDVector.create(0, 0);
        particle.velocity.setLength(speed);
        if (isRad) {
            particle.velocity.setAngle(direction);
        } else {
            particle.velocity.setAngleDegrees(direction);
        }
        return particle;
    },

    accel: function (accelVector) {
        this.velocity.addThis(accelVector);
    },

    move: function () {
        this.position.addThis(this.velocity);
    }
}