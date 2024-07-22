<template>
    <div class="user-detail-card">
        <img class="user-image" src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg" alt="User Image" />
        <h1 class="user-name">{{user.firstName}} {{user.lastName}}</h1>
        <p class="user-email">{{user.email}}</p>
        <div class="permissions">
            <label>
                <input type="checkbox" value="add" v-model="permissions">
                Add
            </label>
            <label>
                <input type="checkbox" value="delete" v-model="permissions">
                Delete
            </label>
            <label>
                <input type="checkbox" value="edit" v-model="permissions">
                Edit
            </label>
        </div>
        
    </div>
     <button @click="addPermisions" class="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Save changes
        </button>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
    data() {
        return {
            userId: '',
            user: {},
            permissions: []
        }
    },
    mounted() {
        const route = useRoute();
        this.userId = route.params.userId;
        this.getdetail();
    },
    methods: {
        async addPermisions(){
            try{
                 await axios.post(`http://localhost:5000/addPermission`,{
                    Id : this.userId,
                    permissions : this.permissions
                })
                
                alert("permissions Updated")
            }catch(err){
                console.log(err)
            }
               
        },
        async getdetail() {
            try {
                const user = await axios.get(`http://localhost:5000/IdWiseUserdetail?Id=${this.userId}`);
                this.user = user.data;
                this.permissions = this.user.Permissions
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>

<style scoped>
.user-detail-card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 300px;
    text-align: center;
    margin: 20px auto;
}

.user-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

.user-name {
    font-size: 1.5em;
    margin: 10px 0;
}

.user-email {
    font-size: 1em;
    color: #555;
}

.permissions {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.permissions label {
    margin: 5px 0;
}
</style>
