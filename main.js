class Animal {
  constructor(type, name){
    this.type = type
    this.name = name
  }
  introduce(){
    console.log(`I'm ${this.type}. My name is ${this.name}.`)
  }
}

class Cat extends Animal{
  constructor(type, name, say){
    super(type, name)
    this.say = say
  }
  saying(){
    super.introduce()
    console.log(`I say ${this.say}.`)
  }
}

const myCat = new Cat('cat', 'Mong', 'Myo~')

myCat.saying()