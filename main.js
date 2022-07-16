function User (first, last){
  this.firstName = first
  this.lastName = last
}


User.prototype.getFullName = function(){
  return `I'm ${this.firstName} ${this.lastName}.`
}

const jihyun = new User('jihyun', 'Kim')
const jiwon = new User('jiwon', 'Min')

console.log(jihyun.getFullName())
console.log(jiwon.getFullName())