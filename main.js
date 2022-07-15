const timer = setTimeout(()=>{
  console.log('jihyun')
}, 5000)

const h1El = document.querySelector('h1')

h1El.addEventListener('click', ()=>{
  clearTimeout(timer)
})