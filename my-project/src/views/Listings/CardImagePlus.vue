<template>
    <div class="tile is-parent">
    <article class="tile is-child notification is-white">
      
      <div class="content">
        <p class="title">{{$route.name}} Tile</p>
        <p class="subtitle">6524 Ridge Rd, Kansas City, MO 64152</p>
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Value</p>
              <p class="title">$1,223,456</p>
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
              <p class="heading">Auction Date</p>
              <p class="title">Sunday Jan 5th</p>
            </div>
          </div>
        </nav>
        <div class="content">
          <!-- Content -->
          <img src="https://photos.zillowstatic.com/p_f/ISm6bjmmx9vjo90000000000.jpg" />
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
    </div>

</template>

<script>

export default {
  name: 'CardImagePlus',
  components: {

  },
    data() {
        return {
            date: new Date()
        }
    },
    computed: {
        
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
