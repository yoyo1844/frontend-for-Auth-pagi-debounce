<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="bg-gray-800 p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex space-x-4">
          <router-link
            v-if="!loggedin"
            to="/register"
            class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            REGISTRATION
          </router-link>
          <router-link
            v-if="!loggedin"
            to="/login"
            class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Login
          </router-link>

          <router-link
            v-if="loggedin"
            to="/logout"
            class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            Logout
          </router-link>

  <router-link
            v-if="loggedin"
            to="/dashBoard"
            class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            DashBoard
          </router-link>

           <router-link
            v-if="loggedin"
            to="/permission-page"
            class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
          >
            permission-page
          </router-link>
          
        </div>
      </div>
    </nav>
    <!-- Main content -->
    <main class="flex-grow container mx-auto p-4">
      <router-view :onLogout="handleLogout"></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedin = true;
    }
  },
  data() {
    return {
      loggedin: false,
    };
  },
  methods: {
    handleLogout() {
      this.loggedin = false;
    },
  },
};
</script>

<style>
/* Additional custom styles can be added here */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
