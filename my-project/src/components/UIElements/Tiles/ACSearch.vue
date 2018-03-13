
<template>
    <section>
        
        <b-field >
            <b-autocomplete
                rounded
                v-model="name"
                :data="filteredDataArray"
                placeholder="ex. 'Kansas City, Mo'"
                icon="magnify"
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
        <!-- <p class="content"><b>Selected:</b> {{ selected }}</p> -->
    </section>
</template>


<script>

 export default {
        data() {
            return {
                data: [
                    'With Alerts',
                    'Kansas City, Mo',
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


</style>
