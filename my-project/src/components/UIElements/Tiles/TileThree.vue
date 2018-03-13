<template>  
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child box">
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
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TileThree',
  components: {
   
  },
    data() {
        return {
          isOpen: true
        }
    },
    computed: {
        
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
