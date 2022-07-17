const number = [1,2,3,4]
const fruits = ['apple', 'banana', 'cherry']

// const a = fruits.map(function(fruit, index){
//   return {
//     id : index,
//     name : fruit
//   }
// })

const a = fruits.map((fruit, index)=>({
  id : index,
  name : fruit
}))

console.log(a)