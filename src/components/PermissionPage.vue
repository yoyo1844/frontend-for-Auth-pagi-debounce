<template>
<input type="search" v-model="searchQuery"   @input="debounceSearch" placeholder="search student here" class="border border-black p-2">
    <div class="user-cards-container">
        
        <div class="user-card" v-for="item in userList" :key="item._id">
     <!-- <router-link :to="`userDetail/${item._id}`"> -->
     <div @click="viewDetail(item._id)">
            <img class="user-image" src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg" alt="User Image" />
            <h1 class="user-name">{{item.firstName}} {{item.lastName}}</h1>
            <p class="user-email">{{item.email}}</p>
            </div>
     <!-- </router-link> -->
        </div>

    </div>
         
        <div class="buttons w-full flex justify-around" >
             <button class="border border-black p-2 bg-amber-100" @click="decreasePageCount">previous</button>
             <h1>{{pageCount}}</h1>
             <button class="border border-black p-2 bg-amber-100" @click="increasePageCount">next...</button>
        </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
// import {useRoute} from vue-router

export default {
    data(){
        return{
            userList : [],
            searchQuery : '',
            pageCount : 1
        }
    },

    mounted(){
        console.log("mounted")
        this.getuserlist()
        this.debounceSearchFn = _.debounce(this.getuserlist, 1000)
    },
    methods : {
        viewDetail(id){
              this.$router.push(`/userDetail/${id}`)
                
        },
        decreasePageCount(){
        if(this.pageCount <= 1){
        }
        else{
            this.pageCount = this.pageCount-1
            this.getuserlist()
        }

        },
        increasePageCount(){
            this.pageCount = this.pageCount+1
            this.getuserlist()
        },
        debounceSearch(){
           
            this.debounceSearchFn()
                
        },
        async getuserlist(){
            try{
                
                const response = await axios.get(`http://localhost:5000/users/?searchquery=${this.searchQuery}&page=${this.pageCount}`)
                this.userList = response.data
                console.log( this.userList)
            }
            catch(err){     
                console.log("userListError", err)
            }
        },
      
    }
}
</script>

<style scoped>
.user-cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
}

.user-card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 200px;
    text-align: center;
}

.user-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

.user-name {
    font-size: 1.2em;
    margin: 10px 0;
}

.user-email {
    font-size: 0.9em;
    color: #555;
}
</style>
