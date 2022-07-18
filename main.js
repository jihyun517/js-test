const fruits = ['apple', 'banana', 'cherry', 'orange']

const toObject = (a, b, ...c) => ({a, b, c})
console.log(toObject(...fruits))