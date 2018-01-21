<template>
    <v-container >
    <v-snackbar top timeout="6000" v-model="snack" >{{error}}   
            <v-btn flat color="cyan" @click="snack = false">Close</v-btn>

            </v-snackbar>        <div >
               <v-breadcrumbs large>
                   <v-breadcrumbs-item > <span @click="navigateToHome">Home</span> </v-breadcrumbs-item>
                   <v-breadcrumbs-item> Songs</v-breadcrumbs-item>
               </v-breadcrumbs>
               <v-container fluid>
                    <v-progress-circular 
                    v-if="!progress" 
                    indeterminate
                     v-bind:size="100" 
                     v-bind:width="7"
                      color="purple" ></v-progress-circular>
                    <songa v-else v-for ="song in songs" :key="song._id" :song="song"></songa>
                   
               </v-container>
        </div>
    </v-container>
</template>

<script>
import songa from "./sub-songs/songa.vue"
import soongServe from "../../services/songService"
export default {
    data(){
        return{
            songs:[],
            error:'',
            snack:false
        }
    },
methods: {
    navigateToHome(){
        this.$router.push('/')
    }
},
computed: {
    progress(){
            return this.songs.length>0
    }  
},
components: {
    songa
},
    mounted(){
        soongServe.getSongs().then(res =>{
            this.songs=res.data
            console.log(this.songs)
        }).catch(err => {
            this.error = err.response.data.error
            this.snack="true"} )
    }
}
</script>

<style scoped>

</style>
