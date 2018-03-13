<template>
   <aside class="menu is-sticky-top">
    <!-- <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><a class="is-active">Dashboard</a></li>
      <li><a>Customers</a></li>
    </ul>
    <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <li><a>Team Settings</a></li>
      <li>
        <a>Manage Your Team</a>
        <ul>
          <li><a>Members</a></li>
          <li><a>Plugins</a></li>
          <li><a>Add a member</a></li>
        </ul>
      </li>
      <li><a>Invitations</a></li>
      <li><a>Cloud Storage Environment Settings</a></li>
      <li><a>Authentication</a></li>
    </ul> -->
    <p class="menu-label">
      MVP 1
    </p>
    <ul id="v-for-object" class="menu-list">
      <li v-for="(link, index) in links">
         <router-link :to="{ path: link.link }">{{link.name}}</router-link>
      </li>
    </ul>
    
    <p class="menu-label">
      Templates
    </p>
    <ul class="menu-list">
      <!-- <li v-for="item in items">
        <router-link to="message"></router-link>
      </li> -->
      
      <router-link to="home">Home</router-link>
      <router-link to="listings">Listings</router-link>
      <router-link to="listings-grid">Listings Grid</router-link>
      <router-link to="single-listing">Single Listing</router-link>
      <router-link to="calendar">Calendar</router-link>
      <router-link to="maps">Maps</router-link>
      <router-link to="maps-1">Maps Layout 1</router-link>
      <router-link to="maps-2">Maps Layout 2</router-link>
      

    </ul>
  </aside>
</template>

<script>

export default {
  name: 'MainSideNav',
  components: {
    
  },
    data() {
        return {
         index: 0,
         links:[ 
            { name: 'Home', link: '/' },
            { name: 'Calendar', link: '/calendar' },
            { name: 'Listings', link: '/listings' },
            { name: 'Maps', link: '/maps-2' },
            { name: 'Single Listing', link: '/single-listing' },

          ],

           
        }
    },
    computed: {
        
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 

</style>
