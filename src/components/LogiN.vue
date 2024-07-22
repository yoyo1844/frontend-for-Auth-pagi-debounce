<template>
   <h1 class="font-bol mx-auto"> please login  continue </h1>
  <div class="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-lg">
 
    <h2 class="text-2xl font-semibold mb-4">Login</h2>
    <div class="space-y-4">
      <vs-input label="Email" v-model="email" type="email" />
      <vs-input label="Password" v-model="password" type="password" />
      
      <vs-button color="primary" @click="login">Login</vs-button>

     <router-link to="/register"> <p class="text-purple-600 pl-40">new user? click here for register </p> </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import io from 'socket.io-client'
export default {
    name : 'LogiN',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  mounted(){
      const token = localStorage.getItem('token');
        if (!token){
         this.$vs.notify({
          title: 'login  here...',
          text:'',
          color: 'dark',
          position: 'top-center'
        });
       }
    },
  methods: {
    async login() {
      const credentials = {
        email: this.email,
        password: this.password
      };
      try {
        // Send login request to the server
        const response = await axios.post('http://localhost:5000/login', credentials);
  
  console.log('Login successful:', response);
 
        // Store JWT token in local storage

        localStorage.setItem('token',response.data.token);
        
        localStorage.setItem('userObj', JSON.stringify(response.data.user));

        
alert('login successfull')
this.$router.push('/dashBoard')


   
         
  
        
      } catch (error) {
        alert('Error logging in: recheck your credentials');
        // Display error message to the user

      }
    }
  }
};
</script>
