function timeout(cb) {
  setTimeout(()=>{
    console.log('jihyun')
    cb()
  }, 5000)
}

timeout(() => {
  console.log('Done!')
})