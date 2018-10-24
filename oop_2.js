class Vehicle {
  constructor(weight = 0, price = 0) {
    this.weight = weight // weight in kg
    this.price = price // price in USD
  }

  get thisWeight() {
    return `${this.weight} kg`
  }

  set setWeight(newWeight) {
    if (typeof newWeight === "number") this.weight = newWeight
    else return "Parameter is not a number!"
  }

  get thisPrice() {
    return `USD ${this.price}`
  }

  set setPrice(newPrice) {
    this.price = newPrice
  }
}

class LandVehicle extends Vehicle {
  constructor(weight, price, tires) {
    super(weight, price)
    this.tires = tires // number of tires
  }
}

class WaterVehicle extends Vehicle {
  constructor(weight, price, bouyancy) {
    super(weight, price)
    this.bouyancy = bouyancy // bouyancy level
  }
}

const somethingToRide = new Vehicle(7, 120)
const somethingOnLand = new LandVehicle(7, 120, 2)
const somethingOnWater = new WaterVehicle(20, 200, 10)

console.log((somethingOnWater.weight = 200))
console.log(somethingOnWater.thisWeight)
