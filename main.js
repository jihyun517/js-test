import me from './myData.json'

console.log('me', me)

const user = {
  name: 'Jihyun',
  age: 23,
  friends: ['Jiwon', 'Huisoo']
}

console.log('user', user)

const makeJSON = JSON.stringify(user)
console.log('makeJSON', makeJSON)
console.log('makeJSON', typeof(makeJSON))

const makeJS = JSON.parse(makeJSON)
console.log('makeJS', makeJS)
console.log('makeJS', typeof(makeJS))