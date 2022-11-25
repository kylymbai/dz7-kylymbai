class Cars {
    constructor(options) {
    this.model = options.model
    this.color = options.color
    this.wheels = options.wheels
    }

    start() {
        console.log('Машина заведена!')
    }
}

const car = new Cars ({
    model: 'BMW',
    color: 'black',
    wheels: 4
})
console.log(car)
car.start()

class Mers extends Cars {
 constructor(options){
    super(options)
    this.capasity = options.capasity
 }
 
}

const mers = new Mers({
    model: 'mers',
    color: 'white',
    wheels: 4,
    capasity: 5
})
console.log(mers)

class Kia extends Cars {
    constructor(options) {
        super(options)
        this.wheel = options.wheel
    }
}

const kia = new Kia ({
    mers: 'kia',
    color: 'red',
    capasity: '3',
    wheels: 4,
    wheel: 'left'
})

console.log(kia)

class Toyota extends Cars {
    constructor(options){
        super(options)
        this.body = options.body
    }
}

const toyota = new Toyota ({
    model: 'toyota',
    color: 'green',
    wheels: 4,
    capasity: 2,
    wheel: 'right',
    body: 'sedan'
})

console.log(toyota)