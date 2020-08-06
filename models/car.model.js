class Car {
  constructor({ brand, model, doorQuantity, cylinderCapacity, price }) {
    this.brand = brand;
    this.model = model;
    this.doorQuantity = doorQuantity;
    this.cylinderCapacity = cylinderCapacity;
    this.price = price;
  }

  get fullName() {
    return `${this.brand} ${this.model}`;
  }
}

module.exports = Car;
