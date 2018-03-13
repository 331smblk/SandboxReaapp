<template>
  
            <div class="tile box">
                <!-- <a-c-tabs></a-c-tabs> -->
                <b-tabs v-model="activeTab" size="is-small" class="block">
                    <b-tab-item label="Filters" >
                        
                    
                        <a-c-search ></a-c-search>
                    
                        <b-table
                            :data="tableFiltersList"
                            :opened-detailed="defaultOpenedDetails"
                            detailed
                            detail-key="id"
                            @details-open="(row, index) => $toast.open(`Expanded ${row.id}`)"
                            >

                            <template slot-scope="props">
                                
                                <b-table-column label="">
                                    {{ props.row.name }}
                                </b-table-column>

                                <b-table-column label="">
                                    <b class="has-text-success">{{ props.row.alertCount }}</b>
                                </b-table-column>

                                
                            </template>
                            <template slot="detail" slot-scope="props">
                                <article class="media">
                                    
                                    <div class="media-content">
                                        <div class="content">
                                            <p class="heading">{{ props.row.name }}</p>
                                            <p class="subtitle">{{ props.row.value }}</p>
                                            <div class="columns">
                                                <div class="column">
                                                    <small>Min</small>
                                                    <b-field>
                                                        <b-input type="number" placeholder="$100,000"></b-input>
                                                    </b-field>
                                                </div>
                                                <div class="column">
                                                    <small>Max</small>
                                                    <b-field>
                                                        <b-input type="number" placeholder="$500,000"></b-input>
                                                    </b-field>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </article>
                            </template>
                        </b-table>
        
                    </b-tab-item>

                    <b-tab-item label="Extra Filters">
                       
                        <b-table
                            :data="tableFiltersList"
                            :opened-detailed="defaultOpenedDetails"
                            detailed
                            detail-key="id"
                            @details-open="(row, index) => $toast.open(`Expanded ${row.id}`)"
                            >

                            <template slot-scope="props">
                                
                                <b-table-column label="">
                                    {{ props.row.name }}
                                </b-table-column>

                                <b-table-column label="">
                                    <b class="has-text-success">{{ props.row.alertCount }}</b>
                                </b-table-column>

                                
                            </template>
                            <template slot="detail" slot-scope="props">
                                <article class="media">
                                    
                                    <div class="media-content">
                                        <div class="content">
                                            <p class="heading">{{ props.row.name }}</p>
                                            <p class="subtitle">{{ props.row.value }}</p>
                                            <b-field>
                                                <b-input type="number" placeholder="$100,000"></b-input>
                                            </b-field>

                                            <b-field>
                                                <b-input type="number" placeholder="$500,000"></b-input>
                                            </b-field>
                                        </div>
                                        
                                        <div class="content">
                                            <p class="heading">{{ props.row.name }}</p>
                                            <p class="subtitle">{{ props.row.value }}</p>
                                        </div>
                                            
                                    </div>
                                    
                                </article>
                            </template>
                        </b-table>
                            
                    </b-tab-item>

                    
                </b-tabs>
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


    const tableFiltersList = [
        { 
            'id': 1, 
            name: 'Price Range', 
            checkBoxStatus: true,
            value: "$112,000 ~ $3,250,000"
        },
         { 
            'id': 2, 
            name: 'My Filter', 
            checkBoxStatus: true,
            value: "value"
        },
        
      ]

      return {
          activeTab: 0,
          tableDataSimpleTwo,
          tableDataSimple,
          tableDataSimpleAlerts,
          tableFiltersList,
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
