<template>
  <div>
      <top-nav-bar></top-nav-bar>
      <content-wrapper></content-wrapper>
  </div>
</template>

<script>

import TopNavBar from '../components/UIElements/TopNavBar.vue'
import ContentWrapper from '../components/UIElements/ContentWrapper.vue'

export default {
  name: 'DashboardLayout',
  components: {
    TopNavBar,
    ContentWrapper
  },
    data() {
        return {
            
        }
    },
    computed: {
        
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
