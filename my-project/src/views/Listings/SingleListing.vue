<template>
  <div>
      
        <top-nav-bar ></top-nav-bar>

        <div class="container is-fluid">
        <div class="columns">
          <div class="column">
            <bread-crumbs></bread-crumbs>
          </div>
        </div>
      </div>
      


      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-3 is-hidden-touch">
            <main-side-nav></main-side-nav>
          </div>
          <div class="column is-9 is-12-touch">
            

            <card-image-plus></card-image-plus>
            <div class="card is-sticky-top">
              <div class="card-content">
                <p class="sub-title">
                  {{property.address}}
                </p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    <a target="blank" href="https://www.google.com/maps/@39.084421,-94.5847185,3a,60y,307.84h,104.5t/data=!3m6!1e1!3m4!1scOsockKGDarY1gBvYvtVDA!2e0!7i13312!8i6656"><i class="fab fa-google"></i> Google Search</a>
                  </span>
                </p>
                <p class="card-footer-item">
                  <span>
                   <a target="blank" href="https://www.zillow.com/homedetails/6524-Ridge-Rd-Kansas-City-MO-64152/69438087_zpid/"><i class="far fa-money-bill-alt"></i> Zillow</a>
                  </span>
                </p>
                <p class="card-footer-item">
                  <span>
                    Asess on <a target="blank" href="http://www.jacksongov.org/"><i class="far fa-money-bill-alt"></i> Jackson County</a>
                  </span>
                </p>
              </footer>
            </div>
            <card-info></card-info>
            <card-calendar></card-calendar>
            <listing-notes></listing-notes>


           
           
            <!-- <div class="card is-sticky-top">
              <div class="card-content">
                <p class="sub-title">
                  “Hey, Here are some links to help you do research.”
                </p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    View on <a target="blank" href="https://www.google.com/maps/@39.084421,-94.5847185,3a,60y,307.84h,104.5t/data=!3m6!1e1!3m4!1scOsockKGDarY1gBvYvtVDA!2e0!7i13312!8i6656">Google Maps</a>
                  </span>
                </p>
                <p class="card-footer-item">
                  <span>
                    Find on <a target="blank" href="https://www.zillow.com/homedetails/6524-Ridge-Rd-Kansas-City-MO-64152/69438087_zpid/">Zillow</a>
                  </span>
                </p>
                <p class="card-footer-item">
                  <span>
                    Asess on<a target="blank" href="http://www.jacksongov.org/">Jackson County</a>
                  </span>
                </p>
              </footer>
            </div> -->

            <!-- <div class="tile is-parent">
              <article class="tile is-child notification is-white">
                <div class="content">
                  <p class="title">Property Details</p>
                  <p class="subtitle">With even more content</p>
                  <div class="content">
                    
                  </div>
                </div>
                <article class="media">
                  <figure class="media-left">
                    <p class="image is-64x64">
                      <img src="https://bulma.io/images/placeholders/128x128.png">
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                        <br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                      </p>
                    </div>
                    <nav class="level is-mobile">
                      <div class="level-left">
                        <a class="level-item">
                          <span class="icon is-small"><i class="fas fa-reply"></i></span>
                        </a>
                        <a class="level-item">
                          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                        </a>
                        <a class="level-item">
                          <span class="icon is-small"><i class="fas fa-heart"></i></span>
                        </a>
                      </div>
                    </nav>
                  </div>
                  <div class="media-right">
                    <button class="delete"></button>
                  </div>
                </article>
              </article>
            </div> -->


            <!-- <div class="columns">
              <div class="column is-6 is-hidden-touch">
                <div class="tile is-parent">
                  <article class="tile is-child notification is-white">
                    <div class="content">
                      <p class="title">Auction Date</p>
                      <p class="subtitle">With even more content</p>
                      <div class="content">
                          <b-datepicker v-model="date" 
                              inline 
                              :unselectable-days-of-week="[0, 6]">
                          </b-datepicker>
                      </div>
                    </div>
                    
                  </article>
                </div>
              </div>
              <div class="column is-6 is-hidden-touch">
                <div class="tile is-parent">
                  <article class="tile is-child notification is-white">
                    <div class="content">
                      <p class="title">Auction Date</p>
                      <p class="subtitle">With even more content</p>
                      <div class="content">
                          <b-datepicker v-model="date" 
                              inline 
                              :unselectable-days-of-week="[0, 6]">
                          </b-datepicker>
                      </div>
                    </div>
                    
                  </article>
                </div>
              </div>
            </div> -->

            <!-- <nav class="panel">
              <p class="panel-heading">
                repositories
              </p>
              <div class="panel-block">
                <p class="control has-icons-left">
                  <input class="input is-small" type="text" placeholder="search">
                  <span class="icon is-small is-left">
                    <i class="fas fa-search"></i>
                  </span>
                </p>
              </div>
              <p class="panel-tabs">
                <a class="is-active">all</a>
                <a>public</a>
                <a>private</a>
                <a>sources</a>
                <a>forks</a>
              </p>
              <a class="panel-block is-active">
                <span class="panel-icon">
                  <i class="fas fa-book"></i>
                </span>
                bulma
              </a>
              <a class="panel-block">
                <span class="panel-icon">
                  <i class="fas fa-book"></i>
                </span>
                marksheet
              </a>
              <a class="panel-block">
                <span class="panel-icon">
                  <i class="fas fa-book"></i>
                </span>
                minireset.css
              </a>
              <a class="panel-block">
                <span class="panel-icon">
                  <i class="fas fa-book"></i>
                </span>
                jgthms.github.io
              </a>
              <a class="panel-block">
                <span class="panel-icon">
                  <i class="fas fa-code-branch"></i>
                </span>
                daniellowtw/infboard
              </a>
              <a class="panel-block">
                <span class="panel-icon">
                  <i class="fas fa-code-branch"></i>
                </span>
                mojs
              </a>
              <label class="panel-block">
                <input type="checkbox">
                remember me
              </label>
              <div class="panel-block">
                <button class="button is-link is-outlined is-fullwidth">
                  reset all filters
                </button>
              </div>
            </nav> -->


            

           
          </div>
        </div>
      </div>

  </div>
</template>

<script>

import TopNavBar from '../../components/UIElements/TopNavBar.vue'
import ContentWrapper from '../../components/UIElements/ContentWrapper.vue'

import MainSideNav from '../../components/UIElements/MainSideNav.vue'
import BreadCrumbs from '../../components/UIElements/BreadCrumbs.vue'
import CardInfo from './CardInfo.vue'
import CardCalendar from './CardCalendar.vue'
import ListingNotes from './ListingNotes.vue'
import CardImagePlus from './CardImagePlus.vue'


export default {
  name: 'SingleListing',
  components: {
    TopNavBar,
    ContentWrapper,
    MainSideNav,
    BreadCrumbs,
    CardInfo,
    CardCalendar,
    ListingNotes,
    CardImagePlus
  },
    data() {
        return {
            date: new Date(),
            property: {
              address: '6524 Ridge Rd, Kansas City, MO 64152'
            }
        }
    },
    computed: {
        
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
