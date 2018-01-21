<template>
    
     <v-container>
       <v-layout>
         <v-flex green class="pa-5 white--text text-md-left text-lg-right">mi</v-flex>
         
       </v-layout>
       <v-layout>
         <v-flex red elevation class="pa-3 white--text">mi</v-flex>
         <v-flex blue class="pa-3 white--text" >
           <router-link
           to='/login'>login</router-link>
         </v-flex>
         <v-flex pink class="pa-3 white--text" >hi</v-flex>
         
       </v-layout>
     </v-container>
           <!-- <v-btn  @click="do0" ><span>...click...</span></v-btn> -->
    </template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      sis:true,
      shir:true,
      msg: 'Welcome to Your Vue.js App'
    }

  },methods: {
    do0(){
      alert("hi")
    }
  },
  watch: {
    "sis"(){
      setTimeout(() => {
        this.sis=false
      }, 5000);
    }
  },
  computed: {
    // sis(){
    //       setTimeout(() => {
    //     this.sis=false
    //   }, 2000);
    // }
  },
  created () {
    console.log('created')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
