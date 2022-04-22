<template>
  <nav>
      <a id="home" href="">Home</a>  
      <a v-if="isLoggedIn" id="profile">Profile</a>  
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      isLoggedIn: false
    }
  }
}
</script>
