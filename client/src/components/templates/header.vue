<template>
    <v-toolbar  class="white--text cyan mb-4" >
            <v-toolbar-title>MusicApphahha</v-toolbar-title>
            <v-toolbar-items>

             <v-btn   flat color="white" @click="navigateTo('/songs')">Browse</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>
          <v-toolbar-items>
              <v-btn flat color="white" @click="navigateTo('/login')" v-if="!islogin">
                  SignIn
                  </v-btn>
              <v-btn  v-if="!islogin" flat color="white" @click="navigateTo('/register')">SignUp</v-btn>
              <v-btn  v-if="islogin" flat color="white" @click="logout">logout</v-btn>
          </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
methods: {
    navigateTo(to){
        this.$router.push(to)
    },
    logout(){
        this.$store.dispatch('token',null)
        this.$store.dispatch('user',null)
    }
},
computed: {
        islogin(){
            return this.$store.getters.islogin
        }
}
}
</script>

<style>

</style>
