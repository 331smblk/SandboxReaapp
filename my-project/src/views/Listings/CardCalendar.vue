<template>
     <div class="tile is-parent">
      <article class="tile is-child notification is-white">
        <div class="content">
          
        
          <div class="columns is-gapless">
            <div class="column">
              <p class="title">Auction Date</p>
              <p class="subtitle">XYZ Law Firm</p>
              <ul>
                <li>Auction Loation</li>
              </ul>

              <!-- <a class="button is-small">Small</a>
              <a class="button">Normal</a> -->
              <a class="button is-medium">Save to my calendar</a>
              <!-- <a class="button is-large">Large</a>   -->
            </div>
            <div class="column">
              <!-- <b-field label="Select a date">
                  <b-datepicker
                      placeholder="Click to select..."
                      icon="calendar-today">
                  </b-datepicker>
              </b-field> -->
            </div>
            
          </div>
        </div>
        
      </article>
     </div>
</template>

<script>

export default {
  name: 'CardInfoTile',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
