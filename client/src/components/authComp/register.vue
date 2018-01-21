<template>
  <v-app>
    
      <v-container >
        <v-layout>
          <v-flex sm12 sm8 md7 lg5 >
              <v-card flat>
                      <v-snackbar
                        v-model="snackbar"
                        absolute
                        top
                        right
                        color="danger"
                      >
                        <span>{{error}}</span>
                        <v-icon dark>danger</v-icon>
                      </v-snackbar>
                      
                      </v-card>
              <v-card ref='userData' color="grey lighten-3" >
                <v-card-text>Register</v-card-text>
                <v-card-text>
                    <v-text-field
                    label="Name"
                    v-model='userData.name'
                    required
                    class="name-input"
                    validate-on-blur="blu"
                    box
                    hint="try some thin"
                    :rules="nameRule"
                    :error-messages="errorMessages"></v-text-field>
                    
                    <v-text-field
                    label="NaEmailme"
                    box
                    :rules="emailRules"
                    type="email"
                    counter
                    v-model='userData.email'
                    required
                    validate-on-blur="blu"
                    hint="email"
                    :error-messages="errorMessages"></v-text-field>
                      <v-text-field
                      name="input-10-1"
                      label="Enter your password"
                      hint="At least 8 characters"
                      v-model="userData.password"
                      min="8"
                      :error-messages="errorMessages"
                      box
                      :rules="passRules"
                      required
                      :append-icon="e1 ? 'visibility' : 'visibility_off'"
                      :append-icon-cb="() => (e1 = !e1)"
                      :type="e1 ? 'password' : 'text'"
                      counter
                  ></v-text-field>
                   
                </v-card-text>
                   <v-card-actions>
                    <v-btn flat @click="resetForm">Cancel</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                      flat
                      color="pink"
                      @click="register"
                      :disabled="!formIsValid"
                    >Register</v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>       
        </v-layout>
      </v-container>
  </v-app>
</template>

<script>
import auth from "../../services/Auth";
// import "../../assets";
export default {

      data () {
        return {
          e1: true,
          msg: 'Welcome to Your Vue.js App',
          userData:{
              email:'',
              name:'',
              password:''
            },
            error:'',
            errorMessages:[],
            snackbar:false,
           
         
          emailRules: [
                v => {
                  return !!v || 'E-mail is required'
                },
                v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
              ],
          nameRule:[(v) => (!!v && v.length >5) || 'This field is required'],
          passRules:[(v) => !!v || 'the pawssword is required ' ]
        }
  }
  ,
  methods:{
     register(){
           auth.register(this.userData).then(res=>{
             console.log(res.data)  
             this.error=''
             this.snackbar=false
            //  this.$router.push('/')
           }).catch(err=> 
           {
            
             this.error = "السيرفر لا يغمل اتصل بالمطور"
           this.snackbar=true
                 if(err.response.data){
      
                   this.error = err.response.data.error 
                 }
           })
    },
    blu(){
      alert("shir")
    }
      ,
      resetForm(){
        this.userData.name=null;
        this.userData.email=null;
        this.userData.password=null;
        }
  },
  computed: {
   formIsValid(){
     return (this.userData.email && this.userData.name && this.userData.password)
   }
  },
  
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mountred')
  }
}
</script>
<style scoped>
.name-input input{
  border-bottom: red;
}
  
div#app {
    background: url(/static/register.jpg);
}
  label{
    color:rgb(190, 26, 26)
  }
 input::-webkit-input-placeholder {color: red !important;} 
</style>





