const global = {
  color: "transparent"
}

// Traditional function
function VehicleFunction(weight, price) {
  this.weight = weight // kg
  this.price = price // USD
}

// Class function
class Vehicle {
  constructor(weight, price, color) {
    this.weight = weight // kg
    this.price = price // USD
    this.color = color || global.color || "unknown"
  }
}

const somethingToRide = new Vehicle(7, 120)
const somethingToShow = new Vehicle(2000, 2000, "white")

console.log(somethingToRide)
console.log(somethingToShow)
