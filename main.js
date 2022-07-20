import _ from 'lodash'

const userA = [
  {userId: '1', name: 'Jihyun'},
  {userId: '2', name: 'Mong'}
]
const userB = [
  {userId: '1', name: 'Jihyun'},
  {userId: '3', name: 'Loopy'}
]

const userC = userA.concat(userB)
console.log('concat', userC)
console.log('uniqBy', _.uniqBy(userC, 'userId'))

console.log('unionBy', _.unionBy(userA, userB, 'userId'))