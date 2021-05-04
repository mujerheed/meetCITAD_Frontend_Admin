<template>
  <div>
    <template v-if="false">
      <Welcome />
    </template>

    <template v-else>
      <v-container grid-list-lg >
        <v-layout row wrap mt-3>
            <v-flex class="text-center">
                <p>Some cappp</p>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs-12 sm6 class="text-xs-center text-sm-right">
                <v-btn color="info" large to="/events">Explore Events</v-btn>
            </v-flex>
            <v-flex xs-12 sm6 class="text-xs-center text-sm-left">
                <v-btn color="info" large to="/addEvent">Organise Event</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs-12>
              <v-card>
                 <v-carousel
                  show-arrows-on-hover
                >
                    <v-carousel-item
                      v-for="image in eventImage"
                      :key="image.id"
                      :src="image.imageUrl"
                      :to='`events/${image.id}`'
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

    data: () => ({
      
    }),
    computed: {
      eventImage() {
        return this.$store.getters.loadEvents
      }
    }
  }
</script>
