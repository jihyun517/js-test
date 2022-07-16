class Animal {
  constructor(type, name){
    this.type = type
    this.name = name
  }
  getIntroduce(){
    console.log(`I'm ${this.type}. My name is ${this.name}.`)
  }
}

class Cat extends Animal{
  constructor(type, name, say){
    super(type, name)
    this.say = say
  }
  getSay(){
    super.getIntroduce()
    console.log(`I say ${this.say}.`)
  }
}

const myCat = new Cat('cat', 'Mong', 'Myo~')

console.log(myCat)
myCat.getSay()