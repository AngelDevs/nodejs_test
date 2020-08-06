let Car = require("./models/car.model.js");
let CarStock = require("./models/carStock.model.js");
let CarDataLogger = require("./helpers/carDataLogger.helper.js");
let carsData = require("./data/cars.json");

// create car list using the cars data and the car model
let cars = carsData.cars.map((car) => new Car(car));

// initialize the car stock with the car list
let carStock = new CarStock(cars);

// initalize the logger with the carStock to analize and log
let carDataLogger = new CarDataLogger(carStock);

// log the desired data
carDataLogger.logCars();
carDataLogger.logDivider();
carDataLogger.logMostExpensiveCar();
carDataLogger.logCheaperCar();
carDataLogger.logCarByLetterCoincidence("Y");
carDataLogger.logDivider();
carDataLogger.logCarsByPriceDesc();
