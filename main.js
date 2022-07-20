import _ from 'lodash'

const users=[
  {userId: '1', name: 'Jihyun'},
  {userId: '2', name: 'Mong'},
  {userId: '3', name: 'Jiwon'},
  {userId: '4', name: 'Loopy'},
]

const foundUser = _.find(users, {name: 'Mong'})
const foundUserIndex = _.findIndex(users, {name: 'Jiwon'})

console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, {name: 'Jihyun'})
console.log(users)