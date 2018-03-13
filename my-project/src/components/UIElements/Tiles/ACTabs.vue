

<template>

    <!-- <b-tabs size="is-small" class="block">
        <b-tab-item label="Pictures" icon="google-photos"></b-tab-item>
        <b-tab-item label="Music" icon="library-music"></b-tab-item>
        <b-tab-item label="Videos" icon="video"></b-tab-item>
    </b-tabs> -->
    <b-tabs v-model="activeTab" size="is-small" class="block">
        <b-tab-item label="Pictures">
            Lorem ipsum dolor sit amet.
        </b-tab-item>

        <b-tab-item label="Music">
            Lorem <br>
            ipsum <br>
            dolor <br>
            sit <br>
            amet.
        </b-tab-item>

        <b-tab-item label="Videos" disabled>
            Nunc nec velit nec libero vestibulum eleifend.
            Curabitur pulvinar congue luctus.
            Nullam hendrerit iaculis augue vitae ornare.
            Maecenas vehicula pulvinar tellus, id sodales felis lobortis eget.
        </b-tab-item>
    </b-tabs>

</template>
        


<script>

 export default {
        data() {
            return {
                data: [
                    
                ],
                 activeTab: 0
            }
        },
        computed: {
            
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
