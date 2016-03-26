/*
A 2D vector class
Created by Dale Appleby
*/

var TwoDVector = {
    _x: 0
    , _y: 0,

    create: function (x, y) {
        var vec = Object.create(this);
        vec._x = x;
        vec._y = y;
        return vec;
    },

    addThis: function (vector) {
        this._x += vector._x;
        this._y += vector._y;
    },

    subtractThis: function (vector) {
        this._x -= vector._x;
        this._y -= vector._y;
    },

    muliplyThis: function (vector) {
        this._x *= vector._x;
        this._y *= vector._y;
    },

    divideThis: function (vector) {
        this._x /= vector._x;
        this._y /= vector._y;
    },

    add: function (vector) {
        var aVector = Object.create(this);
        aVector._x = this._x + vector._x;
        aVector._y = this._y + vector._y;
        return aVector;
    },

    subtract: function (vector) {
        var sVector = Object.create(this);
        sVector._x = this._x - vector._x;
        sVector._y = this._y - vector._y;
        return sVector;
    },

    divide: function (vector) {
        var dVector = Object.create(this);
        dVector._x = this._x / vector._x;
        dVector._y = this._y / vector._y;
        return dVector;
    },

    multiply: function (vector) {
        var mVector = Object.create(this);
        mVector._x = this._x * vector._x;
        mVector._y = this._y * vector._y;
        return mVector;
    },

    scaleBy: function (amount) {
        this._x *= amount;
        this._y *= amount;
    },

    scaleBy: function (xAmount, yAmount) {
        this._x *= xAmount;
        this._y *= yAmount;
    },

    length: function () {
        return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2));
    },

    lengthOf: function (vector) {
        return Math.sqrt(Math.pow(vector._x, 2) + Math.pow(vector._y, 2));
    },

    toUnitVector: function () {
        this._x /= this.length();
        this._y /= this.length();
    },

    getUnitVector: function () {
        var v1 = Object.create(this);
        v1._x = this._x / this.length();
        v1._y = this._y / this.length();
        return v1;
    },

    setAngleDegrees: function (deg) {
        this.setAngle((Math.PI / 180) * deg);
    },

    setAngle: function (angle) {
        var length = this.length();
        this._x = length * Math.cos(angle);
        this._y = length * Math.sin(angle);
    },

    getAngle: function () {
        return Math.atan2(this._y, this._x);
    },

    setLength: function (length) {
        var angle = this.getAngle();
        this._y = Math.sin(angle) * length;
        this._x = Math.cos(angle) * length;
    },

    dotProduct: function (vector) {
        return this._x * vector._x + this._y * vector._y;
    }
    , getX: function () {
        return this._x;
    }
    , getY: function () {
        return this._y;
    }

}