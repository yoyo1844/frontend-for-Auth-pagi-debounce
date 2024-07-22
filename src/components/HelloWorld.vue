<template>
<!-- <router-link to="/login">Login </router-link>
<router-view /> -->
  <div class="mx-60">
    <div class="p-5" v-if="clickValue == 'previous'">
      <div class="mx-4 p-4">
        <div class="flex items-center">
          <div class="flex items-center text-white relative">
            <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Account</div>
          </div>
          <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
          <div class="flex items-center text-gray-500 relative">
            <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Message</div>
          </div>
        </div>
      </div>

      <div class="mt-8 p-4 mx-64">
        <div class="">
          <div class="flex flex-col md:flex-row">
            <div class="w-full items-start flex-1 mx-2">
              <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">First Name:</div>
              <div class="bg-white my-2 p-1 flex flex-col border border-gray-200 rounded svelte-1l8159u">
                <input placeholder="First Name" v-model="formData.firstName" class="p-1 px-2 appearance-none outline-none w-full text-gray-800">
              </div>
              <span v-if="errors.firstName">{{ errors.firstName }}</span>
            </div>
            <div class="w-full flex-1 mx-2 svelte-1l8159u">
              <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Last Name:</div>
              <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input placeholder="Last Name" v-model="formData.lastName" class="p-1 px-2 appearance-none outline-none w-full text-gray-800">
              </div>
              <span v-if="errors.lastName">{{ errors.lastName }}</span>
            </div>
          </div>
          <div class="flex flex-col md:flex-row">
            <div class="w-full mx-2 flex-1 svelte-1l8159u">
              <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Email</div>
              <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input placeholder="jhon@doe.com" v-model="formData.email" class="p-1 px-2 appearance-none outline-none w-full text-gray-800">
              </div>
              <span v-if="errors.email">{{ errors.email }}</span>
            </div>
            <div class="w-full mx-2 flex-1 svelte-1l8159u">
              <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Password</div>
              <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input placeholder="password" type="password" v-model="formData.passWord" class="p-1 px-2 appearance-none outline-none w-full text-gray-800">
              </div>
              <span v-if="errors.passWord">{{ errors.passWord }}</span>
            </div>
                   <div class="w-full mx-2 flex-1 svelte-1l8159u">
              <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Role : </div>
              <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
             <select v-model="formData.selectedRole">
      <option disabled value="">Please select one</option>
      <option v-for="role in roles" :key="role" :value="role">{{ role }}</option>
    </select>
              </div>
              <span v-if="errors.passWord">{{ errors.passWord }}</span>
            </div>
          </div>
        </div>
        <div class="flex p-2 mt-4">
          <div class="flex-auto flex flex-row-reverse">
            <button class="text-base ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-600 bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition" @click="nextClicked(1)">Next</button>
          </div>
        </div>
      </div>
    </div>

    <div class="p-5" v-if="clickValue == 'next'">
      <div class="mx-4 p-4">
        <div class="flex items-center">
          <div class="flex items-center text-white relative">
            <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Account</div>
          </div>
          <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-500"></div>
          <div class="flex items-center text-gray-500 relative">
            <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Message</div>
          </div>
        </div>
      </div>
      <div>
          <div class="text-red-500">{{ formatTime(timer) }}</div> <!-- Display Timer -->
        <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Enter OTP you got on email:</div>
        <div class="bg-white my-2 p-1 flex flex-col border border-gray-200 rounded svelte-1l8159u mx-64">
          <input placeholder="6 digit otp" v-model="formData.otp" class="p-1 px-2 appearance-none outline-none w-full text-gray-800">
        </div>
        <div class="w-full flex justify-center">
            <button v-if="timerOver" class="text-base mt-5 ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-600 bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition" @click="nextClicked(3)">Re-send</button>
          <button class="text-base mt-5 ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-600 bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition" @click="nextClicked(2)">Verify</button>
        </div>
      </div>
      <div class="mt-8 p-4">
        <div class="flex p-2 mt-4">
          <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200 bg-gray-100 text-gray-700 border duration-200 ease-in-out border-gray-600 transition" @click="previousClicked">Previous</button>
          <div class="flex-auto flex flex-row-reverse"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- <LogiN /> -->
</template>

<script>
import axios from 'axios'
import * as yup from 'yup';
// import LogiN from './LogiN.vue'
export default {
  name: 'HelloWorld',
  components : {
      // LogiN
  },
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        passWord: '',
        email: '',
        otp: '',
     
        selectedRole : ''
      
      },
         resendFlag : false,
        roles : ['student','teacher','peon'],
      clickValue: 'previous',
        timerOver  : false,
      errors: {},
       timer: 30, // Timer in seconds
      intervalId: null // To store the interval ID
    };
  },
    methods: {
    clear() {
      this.formData.firstName = '';
      this.formData.lastName = '';
      this.formData.passWord = '';
      this.formData.email = '';
      this.formData.otp = '';
       this.stopTimer();
      this.timer = 120;
    },
       startTimer() {
      this.intervalId = setInterval(() => {
        if (this.timer > 0) {
          this.timer--;
        } else {
          this.stopTimer();
        }
      }, 1000);
    },
    stopTimer() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    },
    

     async nextClicked(count) {
    if (count == '1') {
      const schema = yup.object().shape({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        passWord: yup.string().required('Password is required'),
        email: yup.string().email('Invalid email format').required('Email is required')
      });

      try {
        // Reset errors
        this.errors = {};
        // Validate form data
        await schema.validate(this.formData, { abortEarly: false });
        const res = await axios.post('http://localhost:5000/register-otp', this.formData);
        console.log(res.data)
        // If validation passes, proceed with the next step
         if (res.data == "duplicateMail") {
          alert("Duplicate email");
        }
        if (count == '1' && res.data !="duplicateMail") {
          this.clickValue = 'next';
          this.startTimer(); 
        }
      } catch (validationErrors) {
        // If validation fails, show error messages
        if (validationErrors.inner) {
          validationErrors.inner.forEach((error) => {
            this.errors[error.path] = error.message;
          });
        } else {
          console.error("Unexpected validation error structure:", validationErrors);
        }
      }
    } if(count == '2') {
      try {
        const res = await axios.post('http://localhost:5000/register-otp', this.formData);
        console.log("in api");
        if (res.data == "success") {
          alert("Verification successful");
          this.$router.push('/login');
          this.clear();0
            
          // alert("regitration success , please login to continue ")

        }
       
        if (res.data == "reject") {
          alert("Please enter the correct OTP");
          this.formData.otp = '';
        }
        if(res.data =="OTP expired"){
          alert("otp expired")
          this.formData.otp = '';
          this.resendFlag = true
        }
      } catch (err) {
        console.log(err);
      }
    }
    if(count == '3'){
        try{
 const res = await axios.post(`http://localhost:5000/register-otp?isResend=${this.formData.resendFlag}`, this.formData);
 console.log(res)
 alert("otp ReSent to your Mail")
   this.timer=30,
    this.startTimer();
        }catch(err){
            console.log(err)
        }

    }
    
  },
  previousClicked() {
    this.clickValue = 'previous';
    this.stopTimer(); // Stop the timer when going back
    this.timer = 120; // Reset the timer
  }
  },
  watch: {
    timer(newVal) {
      if (newVal === 0) {
        this.resendFlag=true
        this.timerOver =true
        alert('OTP expired');
        this.formData.otp = '';
        this.stopTimer();
      }
    }
  }
};
</script>

<style scoped>
span {
  color: red;
}
</style>
