class Card {
  constructor(name, order) {
    this.name = name
    this.order = order
  }

  getFullName() {
    return `${this.name} (${this.order})`
  }
}

const DATA_COLLECTION = [
  {
    name: "Avalon"
  },
  {
    name: "Bahamut"
  },
  {
    name: "Charizard"
  },
  {
    name: "Drogon"
  },
  {
    name: "Ender"
  },
  {
    name: "Fang"
  }
]

const cards = DATA_COLLECTION.map((item, index) => {
  return new Card(item.name, index + 1)
})

console.log(cards)

cards.forEach(item => {
  console.log(item.getFullName())
})
