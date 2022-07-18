const fruits = ['apple', 'banana', 'cherry']
const [a, b, c, d] = fruits
console.log(a, b, c, d) // apple banana cherry undefined\

const [x, , y] = fruits
console.log(x, y) // apple cherry