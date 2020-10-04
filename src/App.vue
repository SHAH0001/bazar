<template>
  <div id="main-site-wrapper">
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


  export default {
    components: {
      Header,
      Footer
    }
  }
</script>
