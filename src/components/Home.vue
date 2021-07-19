<template>
  <div>
    <template v-if="notAuth">
      <Welcome />
    </template>

    <template v-if="!notAuth">
      <v-container grid-list-lg >
        <v-layout row wrap mt-3>
            <v-flex class="text-center">
                <p>Welcome back Admin to CITAD Event App</p>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
          <div class="text-xs-center" v-if="!latestEvents">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </div>
            <v-flex xs-12 sm6 class="text-center text-sm-right">
                <v-btn color="info" large to="/events">Explore Events</v-btn>
            </v-flex>
            <v-flex xs-12 sm6 class="text-center text-sm-left">
                <v-btn color="info" large to="/add-event">Organise Event</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs-12>
              <v-card>
                 <v-carousel
                  show-arrows-on-hover
                >
                  <v-carousel-item
                    v-for="image of latestEvents"
                    :key="image._id"
                    :src="`http://localhost:3030/${image.eventImage}`"
                    :to='`events/${image._id}`'
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                  >
                  </v-carousel-item>
                </v-carousel>
              </v-card>
            </v-flex>
        </v-layout>
    </v-container>    
    </template>
</div>
</template>

<script>
import Welcome from '../views/Welcome.vue'

  export default {
  components: { Welcome },
    name: 'Home',
    
    // created() {
    //   this.$store.dispatch('getEvents')
    // },

    data: () => ({
      
    }),
    computed: {
      notAuth(){
        let auth = this.$store.getters.adminAuth 
        return !auth
      },

      latestEvents() {
        return this.$store.getters.loadEvents.slice(0, 5)
      }
    }
  }
</script>
