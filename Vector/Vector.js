export default class Vector {
  constructor(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;  
  }

  // representation

  get toString() {
    return `(x: ${this.x}, y: ${this.y}, z: ${this.z})`;
  }

  get toAngle() {
    return {
      theta: Math.atan2(this.z, this.x),
      phi: Math.asin(this.y / this.magnitude),
    }
  }

  get toArray() {
    return [this.x, this.y, this.z];
  }

  get toObject() {
    return {
      x: this.x,
      y: this.y,
      z: this.z,
    }
  }

  // initiate

  /* set init(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;

    return this;
  } */

  get copy() {
    return new Vector(this.x, this.y, this.z);
  }

  // arithmetics

  add(other) {
    return new Vector(
      this.x + other.x,
      this.y + other.y,
      this.z + other.z
    );
  }

  addTo(other) {
    this.x += other.x;
    this.y += other.y;
    this.z += other.z

    return this;
  }

  sub(other) {
    return new Vector(
      this.x - other.x,
      this.y - other.y,
      this.z - other.z
    ); 
  }

  subFrom(other) {
    this.x -= other.x;
    this.y -= other.y;
    this.z -= other.z;

    return this;
  }

  mul(scalar) {
    return new Vector(
      scalar * this.x,
      scalar * this.y,
      scalar * this.z
    );
  }

  mulBy(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;

    return this;
  }

  div(scalar) {
    return new Vector(
      this.x / scalar,
      this.y / scalar,
      this.z / scalar
    );
  }

  divBy(scalar) {
    this.x /= scalar;
    this.y /= scalar;
    this.z /= scalar;

    return this;
  }

  negative() {
    return new Vector(-this.x, -this.y, -this.z);
  }

  negate() {
    this.x *= -1;
    this.y *= -1;
    this.z *= -1;

    return this;
  }

  equals(other) {
    return (
      this.x === other.x &&
      this.y === other.y &&
      this.z === other.z
    );
  }

  dot(other) {
    return this.x * other.x + this.y + other.y + this.z * other.z;
  }


  cross(other) {
    return new Vector(
      this.y * other.z - this.z * other.y,
      this.z * other.x - this.x * other.z,
      this.x * other.y - this.y * other.x
    );
  }

  //

  static fromAngles(theta, phi) {
    return new Vector(
      Math.cos(theta) * Math.cos(phi),
      Math.sin(phi),
      Math.sin(theta) * Math.cos(phi)
    );
  }

  static withRandomDirection() {
    return Vector.fromAngles(
      Math.random() * Math.PI * 2,
      Math.asin(Math.random() * 2 - 1)
    );
  }

  static min(v1, v2) {
    return new Vector(
      Math.min(v1.x, v2.x),
      Math.min(v1.y, v2.y),
      Math.min(v1.z, v2.z)
    )
  }

  static max(v1, v2) {
    return new Vector(
      Math.max(v1.x, v2.x),
      Math.max(v1.y, v2.y),
      Math.max(v1.z, v2.z)
    )
  }

  //

  get min() {
    return Math.min(this.x, this.y, this.z);
  }

  get max() {
    return Math.max(this.x, this.y, this.z);
  }

  //

  limit(max) {
    const magnitude = this.magnitude;
    if (magnitude > max) {
      this.div(magnitude).mult(max);
    }

    return this;
  }

  normalize() {
    const magnitude = this.magnitude;
    return new Vector(
      this.x / magnitude,
      this.y / magnitude,
      this.z / magnitude
    );
  }

  get direction() {
    return Math.atan2(this.y, this.x);
  }

  get magnitude() {
    return (this.x ** 2 + this.y ** 2 + this.z ** 2) ** 0.5;
  }

  set direction(angle) {
    const magnitude = this.magnitude;
    [ this.x, this.y ] = [
      Math.cos(angle) * magnitude,
      Math.sin(angle) * magnitude  
    ];
  }

  set magnitude(magnitude) {
    const direction = this.direction;
    [ this.x, this.y ] = [
      Math.cos(direction) * magnitude,
      Math.sin(direction) * magnitude
    ];
  }

  //

  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);

    return this;
  }

  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);

    return this;
  }

  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);

    return this;
  }

}

// https://evanw.github.io/lightgl.js/docs/vector.html