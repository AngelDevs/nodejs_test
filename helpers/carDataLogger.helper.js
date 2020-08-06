class CarDataLogger {
  constructor(carStock) {
    this.carStock = carStock;
    this.cars = [...carStock.cars];
    this.priceFormater = new Intl.NumberFormat("es-ES", {
      localeMatcher: "lookup",
      currency: "USD",
      style: "currency",
    });
    this.sortCarsByPrice();
  }

  sortCarsByPrice() {
    this.cars = this.cars.sort(
      (prevCar, nextCar) => prevCar.price - nextCar.price,
    );
  }

  logCars() {
    this.carStock.cars.map((car) =>
      console.log(
        `Marca: ${car.brand} // Modelo: ${car.model} // ${
          car.doorQuantity ? `Puertas: ${car.doorQuantity} //` : ""
        }${
          car.cylinderCapacity ? `Cilindrada: ${car.cylinderCapacity}c //` : ""
        } Precio: ${this.priceFormater.format(car.price)}`,
      ),
    );
  }

  logCheaperCar() {
    let cheaperCar = this.cars[0];

    console.log(`Vehículo más barato: ${cheaperCar.fullName} `);
  }

  logMostExpensiveCar() {
    let mostExpensiveCar = this.cars[this.cars.length - 1];

    console.log(`Vehículo más caro: ${mostExpensiveCar.fullName} `);
  }

  logCarByLetterCoincidence(letter) {
    let carWithLetterCoincidence = this.cars.find((car) =>
      car.model.includes(letter),
    );

    console.log(
      `Vehículo que contiene en el modelo la letra ‘${letter}’: ${
        carWithLetterCoincidence.fullName
      } ${this.priceFormater.format(carWithLetterCoincidence.price)}`,
    );
  }

  logDivider() {
    console.log("=============================");
  }

  logCarsByPriceDesc() {
    let carsOrderedByPriceDesc = this.cars.reverse();
    console.log("Vehículos ordenados por precio de mayor a menor:");
    carsOrderedByPriceDesc.map((car) => console.log(car.fullName));
  }
}

module.exports = CarDataLogger;
