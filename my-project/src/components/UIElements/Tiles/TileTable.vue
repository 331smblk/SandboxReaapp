<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child box">
        <section>

          <b-table
              :data="tableDataSimple"
              :opened-detailed="defaultOpenedDetails"
              detailed
              detail-key="id"
              @details-open="(row, index) => $toast.open(`Expanded ${row.id}`)"
              >

              <template slot-scope="props">
                  <b-table-column label="ID" width="40"  numeric>
                      {{ props.row.id }}
                  </b-table-column>

                  <b-table-column label="Address">
                      {{ props.row.address }}
                  </b-table-column>

                  <!-- <b-table-column label="Price">
                      {{ props.row.price }}
                  </b-table-column>

                  <b-table-column label="Auction Date">
                      {{ props.row.auctionDate }}
                  </b-table-column> -->
              </template>

              <template slot="detail" slot-scope="props">
                  <article class="media">
                      <figure class="media-left">
                          <p class="image is-64x64">
                              <img src="https://photos.zillowstatic.com/p_h/ISm6bjmmx9vjo90000000000.jpg" />
                          </p>
                      </figure>
                      <div class="media-content">
                          <div class="content">
                              <p>
                                  <strong>{{ props.row.address}} </strong>
                                  <small>@{{ props.row.auctionDate }}</small>
                              </p>
                          </div>
                      </div>
                  </article>
              </template>
          </b-table>
            
        </section>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  components: {
   
  },
    data() {
       const tableDataSimple = [
          { 'id': 1, name: 'afd', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 2, name: 'faf', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 3, name: 'afe', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 4, name: 'eaf', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 5, name: 'afe', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'}
      ]

      return {
          tableDataSimple,
          defaultOpenedDetails: [1]
      }
    },
    computed: {
        
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
