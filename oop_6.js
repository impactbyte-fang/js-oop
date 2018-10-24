class Vehicle {
  constructor({ weight = 0, price = 0 }) {
    this.weight = weight // weight in kg
    this.price = price // price in USD
  }
}

class LandVehicle extends Vehicle {
  constructor({ weight, price, tires }) {
    super({ weight, price })
    this.tires = tires // number of tires
  }
}

class WaterVehicle extends Vehicle {
  constructor({ weight, price, bouyancy }) {
    super({ weight, price })
    this.bouyancy = bouyancy // bouyancy level
  }
}

class Car extends LandVehicle {
  constructor({ weight, price, tires, engine, capacity, brand }) {
    super({ weight, price, tires })
    this.engine = engine // engine cc
    this.capacity = capacity // people capacity
    this.brand = brand
  }
}

class Bus extends Car {
  constructor({ weight, price, tires, engine, capacity, brand, agent }) {
    super({ weight, price, tires, engine, capacity, brand })
    this.agent = agent
  }
}
