<template>
<v-app >
        <v-container>
            <v-snackbar top timeout="6000" v-model="snack" >{{error}}
            <v-btn flat color="cyan" @click="snack = false">Close</v-btn>

            </v-snackbar>
            <v-layout>
                <v-flex row wrap red xs12 md6 offset-md3 class="mt-4 ">
                    <v-card>
                        <v-toolbar color="cyan lighten-2 white--text">
                            <v-toolbar-title>Login *_^</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text grey>
                                <v-text-field
                                label="email"
                                type="email"
                                :rules="rules.email"
                                placeholder="Email"
                                v-model="user.email"
                                ></v-text-field>
                                <v-text-field
                                label="password"
                                :type="visible_icon?'password':'text'"
                                :rules="rules.password"
                                placeholder="password"
                                v-model="user.password"
                                :append-icon="visible_icon ?'visibility':'visibility_off'"
                                 :append-icon-cb="()=> visible_icon =!visible_icon"
                                 ></v-text-field>
                                <v-card-actions>
                                    <v-btn color="info" :disabled="isValid"  @click= 'login'>login</v-btn>
                                </v-card-actions>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
</v-app>
</template>

<script>
import auth from "../../services/Auth";
export default {
    data(){
        return{
            rules:{
                password:[ v => !!v || "you have to supply pass" ,
                v=> v.length >7 || "password must more than 6 s" ]
            ,
            email:[v=> !!v || 'put email please',
                v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid']
            },
            visible_icon:true,
            user:{
                email:'',
                password:''
            },
            isvalid:false,
            snack:false,
            error:""

        }
    },
    methods:{
            login(){
                auth.login(this.user)
                .then(res => {
                    console.log(res)
                    const {token,user} = res.data 
                    this.$store.dispatch('token',token)
                    this.$store.dispatch('user',user)
                    this.$router.push('/')
                })
                .catch(err => {console.log(err) 
                 this.error = err.response.data.error
                 this.snack=true})
        }
    },
    computed:{
        isValid(){
             const first_check = this.user.email && this.user.password && this.user.password.length>7 
             if(!first_check){
                     return true
                 }else{
                     return false
                 }
        }
    },
  created () {
    console.log('created')
  },
    // watch: {
    //     isvalid(){
    //             let first_check = this.user.email && this.user.pass
    //         if(first_check){
    //             this.isvalid=true
        // لازم اعرف شون استخدمه
    //         }
    //     }
    // }
}
</script>

<style scoped>
div#app {
    background: url(/static/register.jpg);
}
</style>
