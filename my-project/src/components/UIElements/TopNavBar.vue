<template>

      <!-- START NAV -->
      <nav class="navbar is-white">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item brand-text" href="../">
              <i class="fab fa-3x fa-angrycreative"></i> 
              <i class="fab fa-3x fa-angrycreative"></i> 
              <i class="fab fa-3x fa-angrycreative"></i>  
            </a>
            <div class="navbar-burger burger" data-target="navMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navMenu" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item" href="">
                Home
              </a>
              <!-- <a class="navbar-item" href="admin.html">
                Orders
              </a>
              <a class="navbar-item" href="admin.html">
                Payments
              </a> -->
              
            </div>

          </div>
        </div>
      </nav>
      <!-- END NAV -->

</template>

<script>

export default {
  name: 'Navbar',
  components: {

  },
    data() {
        return {
            isPublic: true,
            
        }
    },
    computed: {
       
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
  nav.navbar {
    border-top: 4px solid #276cda;
    margin-bottom: 1rem;
  }
  .navbar-item.brand-text {
    font-weight: 300;
  }
  .navbar-item, .navbar-link {
    font-size: 14px;
    font-weight: 700;
  }
 
</style>
