<template>
  <div class="hello">

        <input type="text" v-model="name">
        <button @click="register">sendName</button>
  </div>
</template>

<script>
import auth from "../services/Auth";
export default {
  date(){
    return {
      name:''
    }
  },
  methods:{
     register(){
           auth.register({name:this.name}).then(res=>{
             console.log(res);
           });
        // console.log(res);
    }
      
  }
}
</script>
