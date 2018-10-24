class Vehicle {
  constructor({ weight = 0, price = 0, color, type }) {
    this.weight = weight // kg
    this.price = price // USD
    this.color = color || global.color || "unknown"
    this.type = type || "uknown"
  }
}

const somethingToRide = new Vehicle({
  color: "black",
  weight: 200,
  price: 1000,
  type: "land"
})

const somethingToShow = new Vehicle({
  color: "white",
  type: "cool",
  weight: 200,
  price: 1000
})

console.log(somethingToRide)
console.log(somethingToShow)
