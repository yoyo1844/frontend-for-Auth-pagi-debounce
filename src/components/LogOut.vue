<template>
  <div>Logging out...</div>
</template>

<script>
export default {
  props: ['onLogout'],
  mounted() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userObj');
    this.onLogout();
    this.$router.push('/login');
  },
};
</script>
