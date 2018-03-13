<template>
  <div>
      <top-nav-bar></top-nav-bar>

        <div class="">
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
              <tile-table2></tile-table2>
              
              <tile-table></tile-table>
              <tile-one></tile-one>
              <tile-two></tile-two>
              <tile-three></tile-three>



              <!-- <div class="tile is-ancestor">
                <div class="tile is-parent">
                  <div class="tile is-child box">
                      <section>
                        <p class="panel-tabs">
                            <a class="is-active">All</a>
                            <a>Public</a>
                            <a>Private</a>
                        </p>
                        <div class="panel-block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                            Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                            Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </div>
                      </section>
                    
                      <section>
                        <b-collapse class="panel" :open.sync="isOpen">
                            <div slot="trigger" class="panel-heading">
                                <a>Search Criteria</a>
                            </div>
                            <p class="panel-tabs">
                                <a class="is-active">All</a>
                                <a>Public</a>
                                <a>Private</a>
                            </p>
                            <div class="panel-block">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                                Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                                Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                            </div>
                        </b-collapse>
                      </section>

                      <section>
                        <b-collapse class="panel" :open.sync="isOpen2">
                            <div slot="trigger" class="panel-heading">
                                <a>Saved Search</a>
                            </div>
                  
                            <div class="panel-block">
                              <ul>
                                <li><small>10 Results</small></li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                
                              </ul>
                            </div>
                        </b-collapse>
                      </section>
                      
                  </div>
                </div>
              </div>


              <div class="tile is-ancestor">
                <div class="tile is-parent">
                  <div class="tile is-child box">
                    <section>

                        <ul>
                          <li>Home Value</li>
                          <li>Price / Tax History</li>
                          <li>Mortgages</li>
                          <li>Price This Home</li>
                          <li>Competition for this Home</li>
                          <li>Home Expenses</li>
                          <li>Neighborhood: 64152</li>
                          <li>Nearby Schools in Parkville</li>
                          <li>Owner Dashboard</li>
                          <li>Contact Listing Agent</li>

                        </ul>
                       
                      </section>
                    <section>
                      <nav class="level">
                        <div class="level-item has-text-centered">
                          <div>
                            <p class="heading">Tweets</p>
                            <p class="title">3,456</p>
                          </div>
                        </div>
                        <div class="level-item has-text-centered">
                          <div>
                            <p class="heading">Following</p>
                            <p class="title">123</p>
                          </div>
                        </div>
                        <div class="level-item has-text-centered">
                          <div>
                            <p class="heading">Followers</p>
                            <p class="title">456K</p>
                          </div>
                        </div>
                        <div class="level-item has-text-centered">
                          <div>
                            <p class="heading">Likes</p>
                            <p class="title">789</p>
                          </div>
                        </div>
                      </nav>
                      <nav class="level">
                        <div class="level-item has-text-centered">
                          <div>
                            <p class="heading">Tweets</p>
                            <p class="title">3,456</p>
                          </div>
                        </div>
                        <div class="level-item has-text-centered">
                          <div>
                            <p class="heading">Following</p>
                            <p class="title">123</p>
                          </div>
                        </div>
                        <div class="level-item has-text-centered">
                          <div>
                            <p class="heading">Followers</p>
                            <p class="title">456K</p>
                          </div>
                        </div>
                        <div class="level-item has-text-centered">
                          <div>
                            <p class="heading">Likes</p>
                            <p class="title">789</p>
                          </div>
                        </div>
                      </nav>
                    </section>
 
                    <section>
                      <b-collapse class="panel" :open.sync="isOpen">
                          <div slot="trigger" class="panel-heading">
                              <a>Search Criteria</a>
                          </div>
                          <p class="panel-tabs">
                              <a class="is-active">All</a>
                              <a>Public</a>
                              <a>Private</a>
                          </p>
                          <div class="panel-block">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                              Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                              Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                          </div>
                      </b-collapse>
                    </section>

                    <section>
                      <b-collapse class="panel" :open.sync="isOpen2">
                          <div slot="trigger" class="panel-heading">
                              <a>Saved Search</a>
                          </div>
                
                          <div class="panel-block">
                            <ul>
                              <li><small>10 Results</small></li>
                              <li>SavedSearch-Britton</li>
                              
                              
                            </ul>
                          </div>
                      </b-collapse>
                    </section>

                      
                      
                  </div>
                </div>
              </div>


              <div class="tile is-ancestor">
                <div class="tile is-parent">
                  <div class="tile is-child box">
                      <section>
                        <p class="panel-tabs">
                            <a class="is-active">All</a>
                            <a>Public</a>
                            <a>Private</a>
                        </p>
                        <div class="panel-block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                            Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                            Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </div>
                      </section>
                    
                      <section>
                        <b-collapse class="panel" :open.sync="isOpen">
                            <div slot="trigger" class="panel-heading">
                                <a>Search Criteria</a>
                            </div>
                            <p class="panel-tabs">
                                <a class="is-active">All</a>
                                <a>Public</a>
                                <a>Private</a>
                            </p>
                            <div class="panel-block">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                                Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                                Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                            </div>
                        </b-collapse>
                      </section>

                      <section>
                        <b-collapse class="panel" :open.sync="isOpen2">
                            <div slot="trigger" class="panel-heading">
                                <a>Saved Search</a>
                            </div>
                  
                            <div class="panel-block">
                              <ul>
                                <li><small>10 Results</small></li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                <li>SavedSearch-Britton</li>
                                
                              </ul>
                            </div>
                        </b-collapse>
                      </section>
                      
                  </div>
                </div>
              </div> -->
              
             
             
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

export default {
  name: 'MapsIndex',
  components: {
    TopNavBar,
    TileOne,
    TileTwo,
    TileThree,
    TileTable,
    TileTable2
  },
    data() {

      return {
        isOpen: false,
        isOpen2: false,

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
