<template>
    <v-flex md4 lg3 xs12 sm6 d-inline-block pa-3 >
        <v-card>
         <v-card-media img="">
            <img style="width:100%" :src="song.img" :alt="song.title">
     </v-card-media>
     <v-card-title> {{song.title}}</v-card-title>
     <v-card-actions>
         <v-btn color="cyan" @click="navigateTo({name:'songaa',params:{songID:song._id}})" class="white--text">View</v-btn>
         <v-spacer></v-spacer>
         10$
     </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props:['song'],
    methods: {
            navigateTo(too){
                    this.$router.push(too)
            }
    }
}
</script>

<style scoped>
    img{
                        transition:  0.5s  all ease-in-out

    }
        img:hover{
            transform: scale(1.4) rotate(10deg);
            transition:  0.5s  all ease-in-out
            

        }
</style>
