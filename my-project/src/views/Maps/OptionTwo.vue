<template>
  <div>
      <top-nav-bar></top-nav-bar>

        <div class="container is-fluid">
          <div class="columns">
            <div class="column is-two-thirds">
               <bread-crumbs></bread-crumbs>
            </div>
          </div>
        </div>

        <div class="container is-fluid">
          <div class="columns">
            <div class="column is-two-thirds">
              <div id="map-wrapper" class="is-sticky-top" style="height: 100vh">
                <v-map  :zoom=15 :center="[39.0848098, -94.5853784]">
                  <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
                  <!-- <v-marker :lat-lng="[47.413220, -1.219482]"></v-marker> -->
                </v-map>
              </div>
            </div>
            <div class="column">
              <!-- <tile-table2></tile-table2> -->
              <tile-table3></tile-table3>
              <div v-for='(item) in ListingCards' :key='id'>
                <card-info ></card-info>
              </div>
              
            </div>
          </div>
        </div>
 
      
  </div>
</template>

<script>
// const data = require('@/assets/data_test.json')


import TopNavBar from '../../components/UIElements/TopNavBar.vue'
import TileOne from '../../components/UIElements/Tiles/TileOne.vue'
import TileTwo from '../../components/UIElements/Tiles/TileTwo.vue'
import TileThree from '../../components/UIElements/Tiles/TileThree.vue'
import TileTable from '../../components/UIElements/Tiles/TileTable.vue'
import TileTable2 from '../../components/UIElements/Tiles/TileTable2.vue'
import TileTable3 from '../../components/UIElements/Tiles/TileTable3.vue'
import BreadCrumbs from '../../components/UIElements/BreadCrumbs.vue'
import CardInfo from '../../components/UIElements/Cards/CardInfo.vue'
export default {
  name: 'MapsIndex',
  components: {
    TopNavBar,
    TileOne,
    TileTwo,
    TileThree,
    TileTable,
    TileTable2,
    TileTable3,
    BreadCrumbs,
    CardInfo
  },
    data() {

      return {
        isOpen: false,
        isOpen2: false,

        ListingCards: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
        ], 

        zoom: 13,
        center: [47.413220, -1.219482],
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        // style: 'mapbox://styles/mapbox/satellite-streets-v10',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        // marker: latLng(47.413220, -1.219482),
        // style: 'mapbox://styles/mapbox/streets-v10'

      }
    },
    computed: {
            
        }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
  #map-wrapper { 
    height: 100vh; 
    }

</style>
