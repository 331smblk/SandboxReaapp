<template>

  <section>
      <!-- <button class="button block" @click="activeTab = 1">Set Music</button> -->
      <b-tabs v-model="activeTab">
          <b-tab-item label="Pictures">
              Tabbed Section

          </b-tab-item>

          <b-tab-item label="Music">
            <section>
            <div class="tile is-ancestor">
              <div class="tile is-4 is-vertical is-parent">
                <div class="tile is-child box">
                  <p class="title">One</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>
                <div class="tile is-child box">
                  <p class="title">Two</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>
              </div>
              <div class="tile is-parent">
                <div class="tile is-child box">
                  <p class="title">Three</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                  <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                  <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                </div>
              </div>
            </div>
          </section>
          </b-tab-item>

          <b-tab-item label="Videos" disabled>
              <section>
                <div class="tile is-ancestor">
                  <div class="tile is-4 is-vertical is-parent">
                    <div class="tile is-child box">
                      <p class="title">One</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                    </div>
                    <div class="tile is-child box">
                      <p class="title">Two</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                    </div>
                  </div>
                  <div class="tile is-parent">
                    <div class="tile is-child box">
                      <p class="title">Three</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                      <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                      <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                    </div>
                  </div>
                </div>
              </section>
          </b-tab-item>
      </b-tabs>
  </section>
            
 
</template>

<script>

export default {
  name: 'TabbedSection',
  components: {
   
  },
    data() {
        return {

            activeTab: 0,
            
            isPublic: true,
            data: [
                'Angular',
                'Angular 2',
                'Aurelia',
                'Backbone',
                'Ember',
                'jQuery',
                'Meteor',
                'Node.js',
                'Polymer',
                'React',
                'RxJS',
                'Vue.js'
            ],
            name: '',
            selected: null
        }
    },
    computed: {
        filteredDataArray() {
            return this.data.filter((option) => {
                return option
                    .toString()
                    .toLowerCase()
                    .indexOf(this.name.toLowerCase()) >= 0
            })
        }
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bell-icon {
  width: 200px;
  height: 164px;
  background-image: url('/static/svg/bell.svg');
}
 
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
  .columns {
    width: 100%;
    height: 100%;
  }
  .menu-label {
    color: #8F99A3;
    letter-spacing: 1.3;
    font-weight: 700;
  }
  .menu-list a {
    color: #0F1D38;
    font-size: 14px;
    font-weight: 700;
  }
  .menu-list a:hover {
    background-color: transparent;
    color: #276cda;
  }
  .menu-list a.is-active {
    background-color: transparent;
    color: #276cda;
    font-weight: 700;
  }
  .card {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    margin-bottom: 2rem;
  }
  .card-header-title {
    color: #8F99A3;
    font-weight: 400;
  }
  .info-tiles {
    margin: 1rem 0;
  }
  .info-tiles .subtitle {
    font-weight: 300;
    color: #8F99A3;
  }
  .hero.welcome.is-info {
    background: #36D1DC;
    background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);
    background: linear-gradient(to right, #5B86E5, #36D1DC);
  }
  .hero.welcome .title, .hero.welcome .subtitle {
    color: hsl(192, 17%, 99%);
  }
  .card .content {
    font-size: 14px;
  }
  .card-footer-item {
    font-size: 14px;
    font-weight: 700;
    color: #8F99A3;
  }
  /* .card-footer-item:hover {
  } */
  .card-table .table {
    margin-bottom: 0;
  }
  .events-card .card-table {
    max-height: 250px;
    overflow-y: scroll;
  }

</style>
