const jihyun = {
  name: 'jihyun',
  normal: function(){
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

jihyun.normal()
jihyun.arrow()