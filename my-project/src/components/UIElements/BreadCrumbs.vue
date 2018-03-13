<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li><a href="../">Home</a></li>
      <li class="is-active"><a href="#" aria-current="page">{{ $route.name}} </a></li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'BreadCrumbs',
  components: {
    
  },
    data() {
        return {
        }
    },
    computed: {
        }
  }


</script>

<style lang="scss">
  
</style>
