

const app = Vue.createApp({
  data() {
  return {
    url: 'http://www.thenetninja.co.ok',
    showBooks:true,
    books:[
      {title:'name of the wind', author:'patrick rothfus' img: 'assets/1.jpg'},
      {title:'the way of kings', author:'brandon sanderson'},
      {title:'the final empire', author:'brandon sanderson'},
    ]

    // title:"Magic Tree House",
    // author:"Dr.Suess",
    // age:45
    // x:0,
    // y:0
  }
},
  methods:{
    toggleShowBooks(){
      this.showBooks=!this.showBooks
    },
    // handleEvent(e, data){
    //   console.log(e, e.type)
    //   if(data){
    //     console.log(data)
    //   }
    // },
    // handleMousemove(e){
    //   this.x = e.offsetX
    //   this.y = e.offsetY
    // }
  }
})
// methods:{
//   changeTitle(title){
//     // this.title = 'Diary Of A Wimpy kid'
//     this.title = title
//   }
// }
app.mount('#app')
