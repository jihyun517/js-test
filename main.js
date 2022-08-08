import me from './myData.json'

const user = {
  name: 'Jihyun',
  age: 23,
  friends: ['Jiwon', 'Huisoo']
}

console.log(user)

myStorage = window.localStorage()

myStorage.setItem('name', 'Jihyun')