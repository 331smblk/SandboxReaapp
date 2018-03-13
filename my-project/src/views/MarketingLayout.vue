<template>
  <div>
      <!-- START NAV -->
      <nav class="navbar is-white">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item brand-text" href="../">
              Bulma Admin          
            </a>
            <div class="navbar-burger burger" data-target="navMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navMenu" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="admin.html">
                Home
              </a>
              <a class="navbar-item" href="admin.html">
                Orders
              </a>
              <a class="navbar-item" href="admin.html">
                Payments
              </a>
              <b-dropdown v-model="isPublic" class="navbar-item">
                <button class="button is-primary" type="button" slot="trigger">
                    <template v-if="isPublic">
                        <!-- <b-icon icon="earth"></b-icon> -->
                        <i class="fas fa-camera-retro m-2"></i>
                        <span>Public</span>
                    </template>
                    <template v-else>
                        <!-- <b-icon icon="account-multiple"></b-icon> -->
                        <i class="fas fa-camera-retro m-2"></i>
                        <span>Friends</span>
                    </template>
                    <!-- <b-icon icon="menu-down"></b-icon> -->
                    <i class="fas fa-chevron-down"></i>
                </button>

                <b-dropdown-item :value="true">
                    <div class="media">
                        <!-- <b-icon class="media-left" icon="earth"></b-icon> -->
                        <!-- <i class="fas fa-camera-retro m-2"></i> -->
                        <div class="media-content">
                            <h3>Public</h3>
                            <small>Everyone can see</small>
                        </div>
                    </div>
                </b-dropdown-item>

                <b-dropdown-item :value="false">
                    <div class="media">
                        <!-- <b-icon class="media-left" icon="account-multiple"></b-icon> -->
                        <!-- <i class="fas fa-camera-retro m-2"></i> -->
                        <div class="media-content">
                            <h3>Friends</h3>
                            <small>Only friends can see</small>
                        </div>
                    </div>
                </b-dropdown-item>
              </b-dropdown>
            </div>

          </div>
        </div>
      </nav>
      <!-- END NAV -->
      <div class="container">
        <div class="columns">
          <div class="column is-3">
            <aside class="menu">
              <p class="menu-label">
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
              </ul>
              <p class="menu-label">
                Transactions
              </p>
              <ul class="menu-list">
                <li><a>Payments</a></li>
                <li><a>Transfers</a></li>
                <li><a>Balance</a></li>
              </ul>
            </aside>
          </div>
          <div class="column is-9">
            <nav class="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li><a href="../">Bulma</a></li>
                <li><a href="../">Templates</a></li>
                <li><a href="../">Examples</a></li>
                <li class="is-active"><a href="#" aria-current="page">Admin</a></li>
              </ul>
            </nav>
            <section class="hero is-info welcome is-small">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">
                    Hello, Admin.
                  </h1>
                  <h2 class="subtitle">
                    I hope you are having a great day!
                  </h2>
                </div>
              </div>
            </section>
            <section class="info-tiles">
              <div class="tile is-ancestor has-text-centered">
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">439k</p>
                    <p class="subtitle">Users</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">59k</p>
                    <p class="subtitle">Products</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">3.4k</p>
                    <p class="subtitle">Open Orders</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">19</p>
                    <p class="subtitle">Exceptions</p>
                  </article>
                </div>
              </div>
              <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                  <div class="tile">
                    <div class="tile is-parent is-vertical">
                      <article class="tile is-child notification is-primary">
                        <p class="title">Vertical...</p>
                        <p class="subtitle">Top tile</p>
                      </article>
                      <article class="tile is-child notification is-warning">
                        <p class="title">...tiles</p>
                        <p class="subtitle">Bottom tile</p>
                      </article>
                    </div>
                    <div class="tile is-parent">
                      <article class="tile is-child notification is-info">
                        <p class="title">Middle tile</p>
                        <p class="subtitle">With an image</p>
                        <figure class="image is-4by3">
                          <img src="https://bulma.io/images/placeholders/640x480.png">
                        </figure>
                      </article>
                    </div>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child notification is-danger">
                      <p class="title">Wide tile</p>
                      <p class="subtitle">Aligned with the right tile</p>
                      <div class="content">
                        <!-- Content -->
                      </div>
                    </article>
                  </div>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child notification is-success">
                    <div class="content">
                      <p class="title">Tall tile</p>
                      <p class="subtitle">With even more content</p>
                      <div class="content">
                        <!-- Content -->
                      </div>
                    </div>
                  </article>
                </div>
              </div>

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
            <div class="columns">
              <div class="column is-6">


                <div class="card events-card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Icons
                    </p>
                    <a href="#" class="card-header-icon" aria-label="more options">
                      <span class="icon">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div class="card-table">
                    <div class="content">
                      <div class="fa-3x">
                        <i class="fas fa-spinner fa-spin"></i>
                        <i class="fas fa-circle-notch fa-spin"></i>
                        <i class="fas fa-sync fa-spin"></i>
                        <i class="fas fa-cog fa-spin"></i>
                        <i class="fas fa-spinner fa-pulse"></i>
                      </div>
                      <!-- <menu-icon :width="30" :height="30"/>
                      <search-web :width="30" :height="30"/> 
                      
                      <b-icon
                          icon="home"
                          size="is-medium">
                      </b-icon>
                      <b-icon
                          icon="view-dashboard"
                          size="is-medium">
                      </b-icon> -->
                      <!-- <vue-material-icon name="favorite" :size="32"></vue-material-icon> -->


                     <!-- <section>
                      <div class="block">
                          <b-icon
                              icon="account"
                              size="is-small">
                          </b-icon>
                          <b-icon
                              icon="home"
                              size="is-small">
                          </b-icon>
                          <b-icon
                              icon="view-dashboard"
                              size="is-small">
                          </b-icon>
                      </div>

                      <div class="block">
                          <b-icon icon="account"></b-icon>
                          <b-icon icon="home"></b-icon>
                          <b-icon icon="view-dashboard"></b-icon>
                      </div>

                      <div class="block">
                          <b-icon
                              icon="account"
                              size="is-medium">
                          </b-icon>
                          <b-icon
                              icon="home"
                              size="is-medium">
                          </b-icon>
                          <b-icon
                              icon="view-dashboard"
                              size="is-medium">
                          </b-icon>
                      </div>

                      <div class="block">
                          <b-icon
                              icon="account"
                              size="is-large"
                              type="is-success">
                          </b-icon>
                          <b-icon
                              icon="home"
                              size="is-large"
                              type="is-info">
                          </b-icon>
                          <b-icon
                              icon="view-dashboard"
                              size="is-large"
                              type="is-primary">
                          </b-icon>
                      </div>

                      <button class="button is-dark">
                          <b-icon icon="check"></b-icon>
                          <span>Finish</span>
                      </button>

                      <button class="button is-warning">
                          <b-icon icon="check"></b-icon>
                          <span>Finish</span>
                      </button>
                    </section> -->
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">View All</a>
                  </footer>
                </div> 





                <div class="card events-card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Events
                    </p>
                    <a href="#" class="card-header-icon" aria-label="more options">
                      <span class="icon">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div class="card-table">
                    <div class="content">
                      <table class="table is-fullwidth is-striped">
                        <tbody>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                          </tr>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                          </tr>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                          </tr>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                          </tr>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                          </tr>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                          </tr>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                          </tr>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                          </tr>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td><a class="button is-small is-primary" href="#">Action</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">View All</a>
                  </footer>
                </div>        
              </div>
              <div class="column is-6">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Inventory Search
                    </p>
                    <a href="#" class="card-header-icon" aria-label="more options">
                      <span class="icon">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <p class="content"><b>Selected:</b> {{ selected }}</p>
                      <b-field label="Find a JS framework">
                          <b-autocomplete
                              rounded
                              v-model="name"
                              :data="filteredDataArray"
                              placeholder="e.g. jQuery"
                              icon="magnify"
                              @select="option => selected = option">
                              <template slot="empty">No results found</template>
                          </b-autocomplete>
                      </b-field>
                      <!-- <div class="control has-icons-left has-icons-right">
                        <input class="input is-large" type="text" placeholder="">
                        <span class="icon is-medium is-left">
                          <i class="fa fa-search"></i>
                        </span>
                        <span class="icon is-medium is-right">
                          <i class="fa fa-check"></i>
                        </span>
                      </div> -->
                    </div>
                  </div>
                </div>
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      User Search
                    </p>
                    <a href="#" class="card-header-icon" aria-label="more options">
                      <span class="icon">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <div class="control has-icons-left has-icons-right">
                        <input class="input is-large" type="text" placeholder="">
                        <span class="icon is-medium is-left">
                          <i class="fa fa-search"></i>
                        </span>
                        <span class="icon is-medium is-right">
                          <i class="fa fa-check"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            

          </div>
        </div>
        <footer class="footer">
          <div class="container">
            <div class="content has-text-centered">
              <p>
                <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
  </div>
</template>

<script>

import MenuIcon from "vue-material-design-icons/menu.vue"
import SearchWeb from 'vue-material-design-icons/search-web.vue'

export default {
  name: 'MarketingLayout',
  components: {
    MenuIcon,
    SearchWeb
  },
    data() {
        return {
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
