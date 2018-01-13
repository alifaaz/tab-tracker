<template>
  <div class="hello">
    <div style="color:red" v-if="error.length > 0">{{error}}</div>
        <input type="text" v-model="userData.email">
        <input type="text" v-model="userData.password">
        <button @click="register">sendName</button>
        
  </div>
</template>

<script>
import auth from "../services/Auth";
export default {

      data () {
    return {
      msg: 'Welcome to Your Vue.js App',
        userData:{
          email:'',
          password:''
        },
        error:''
    }

  }
  ,
  methods:{
     register(){
           auth.register(this.userData).then(res=>{
             console.log(res.data)
             this.error=''
           }).catch(err=> this.error = err.response.data.error)
        // console.log(res
    }
      
  }
}
</script>
