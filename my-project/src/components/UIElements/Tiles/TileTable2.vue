<template>
  
      <div class="tile box">
        
        <section>
            <!-- <a-c-tabs></a-c-tabs> -->
            <b-tabs v-model="activeTab" size="is-small" class="block">
                <b-tab-item label="Search">
                    <a-c-search ></a-c-search>
            
                    <b-table
                        :data="tableDataSimple"
                        :opened-detailed="defaultOpenedDetails"
                        detailed
                        detail-key="id"
                        @details-open="(row, index) => $toast.open(`Expanded ${row.id}`)"
                        >

                        <template slot-scope="props">
                            <!-- <b-table-column label="ID" width="40"  numeric>
                                {{ props.row.id }}
                            </b-table-column> -->

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

                </b-tab-item>

                <b-tab-item label="My Searches">
                    <a-c-search></a-c-search>
                
                    
                    <b-table
                        :data="tableDataSimpleTwo"
                        :opened-detailed="defaultOpenedDetails"
                        detailed
                        detail-key="id"
                        @details-open="(row, index) => $toast.open(`Expanded ${row.id}`)"
                        >

                        <template slot-scope="props">
                            
                            <b-table-column label="Saved Searches">
                                {{ props.row.name }}
                            </b-table-column>

                            <b-table-column label="Alerts">
                                <b class="has-text-success">{{ props.row.alertCount }}</b>
                            </b-table-column>

                            
                        </template>
                        <template slot="detail" slot-scope="props">
                            <article class="media">
                                
                                <div class="media-content">
                                    
                                    <div class="content">
                                        <p class="heading">Price Range</p>
                                        <p class="subtitle">$1,500,000 ~ $3,250,000</p>
                                    </div>
                                    <div class="content">
                                        <p class="heading">Days to auction</p>
                                        <p class="subtitle">3</p>
                                    </div>
                                    <div class="content">
                                        <p class="heading">Auction House</p>
                                        <p class="subtitle">XYZ Bank</p>
                                    </div>
                                    <div class="content">
                                        <p class="heading">Days to auction</p>
                                        <p class="subtitle">3</p>
                                    </div>
                                    <div class="content">
                                         <p class="heading">Location</p>
                                        <p class="subtitle">South Kansas City, Target Neighborhood,</p>
                                    </div>
                                    <div class="content">
                                         <p class="heading">School Rating</p>
                                        <p class="subtitle"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> <small>4 Stars + Only </small></p>
                                    </div>

                                    <div class="content">
                                        <p class="heading">Price Range</p>
                                        <p class="subtitle">$1,500,000 ~ $3,250,000</p>
                                    </div>
                                    <div class="content">
                                        <!-- <p class="heading">Price Range</p> -->
                                        <p class="subtitle"><a>Edit This Search</a></p>
                                    </div>
                                            
                                </div>
                                
                            </article>
                        </template>
                    </b-table>
 

                </b-tab-item>

                <b-tab-item label="Alerts" >
                   <a-c-search></a-c-search>
                
                    <b-table
                        :data="tableDataSimpleAlerts"
                        :opened-detailed="defaultOpenedDetails"
                        detailed
                        detail-key="id"
                        @details-open="(row, index) => $toast.open(`Expanded ${row.id}`)"
                        >

                        <template slot-scope="props">
                            
                            <b-table-column label="Saved Searches">
                                {{ props.row.name }}
                            </b-table-column>

                            <b-table-column label="Alerts">
                                <b class="has-text-success">{{ props.row.alertCount }}</b>
                            </b-table-column>

                            
                        </template>
                        <template slot="detail" slot-scope="props">
                            <article class="media">
                                
                                <div class="media-content">
                                    
                                    <div class="content">
                                        <p class="heading">Price Range</p>
                                        <p class="title">$3,250,000 - ~ </p>
                                        <p class="title">$3,250,000 - ~ </p>
                                        <p class="title">$3,250,000 - ~ </p>
                                        <p class="title">$3,250,000 - ~ </p>
                                    </div>
                                    
                                       
                                </div>
                            </article>
                        </template>
                    </b-table>

                </b-tab-item>
            </b-tabs>
            
        </section>
      </div>
   
</template>

<script>
import ACSearch from './ACSearch.vue'
import ACTabs from './ACTabs.vue'

export default {
  name: '',
  components: {
   ACSearch,
   ACTabs
  },
    data() {
       const tableDataSimple = [
          { 'id': 1, name: 'afd', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 2, name: 'faf', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 3, name: 'afe', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 4, name: 'eaf', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 5, name: 'afe', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 6, name: 'afd', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 7, name: 'faf', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 8, name: 'afe', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 9, name: 'eaf', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 10, name: 'afe', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 11, name: 'afd', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 12, name: 'faf', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 13, name: 'afe', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 14, name: 'eaf', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'},
          { 'id': 15, name: 'afe', address: '220 w 73rd Terrace, Kansas City, Mo 64114', auctionDate: 'Thursday Jan 10th', price: '$140,000', foreclosureInfo: 'Pending'}
      ]
      const tableDataSimpleTwo = [
        { 'id': 1, name: 'South Kansas City, Mo', alertCount: '10'},
        { 'id': 2, name: 'My Favorite Custom Search Name', alertCount: '10'},
        { 'id': 3, name: 'North Kansas City, Mo', alertCount: '1'},
        { 'id': 4, name: 'Kansas City, KS', alertCount: '1'}
      ]
      const tableDataSimpleAlerts = [
        { 'id': 1, name: 'Properties in my Searches', alertCount: '10'},
        { 'id': 2, name: 'Auctions in next 3 days', alertCount: '10', alertTypeOne: 'New'},
        { 'id': 3, name: 'North Kansas City, Mo', alertCount: '1'},
        { 'id': 4, name: 'Kansas City, KS', alertCount: '1'}
      ]

      return {
          activeTab: 0,
          tableDataSimpleTwo,
          tableDataSimple,
          tableDataSimpleAlerts,
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
