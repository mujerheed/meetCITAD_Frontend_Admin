<template>
    <v-container>
        <v-layout class="ma-4" >
            <v-flex xs12>
                <v-card>
                <v-toolbar color="blue darken-1" dark class="mb-5">
                    <h3> {{ event.title }} </h3>
                    <v-spacer></v-spacer>
                    <template>
                        <EditEvent :event="event"/>
                    </template>
                </v-toolbar>

                <v-card-text>
                    <v-layout row wrap mb-4>
                        <v-flex xs6 class="display-1">
                            <v-container>
                                <div>
                                    {{ event.description }} Molestiae!
                                </div>
                                <div>
                                    Venue: {{ event.venue }}
                                </div>
                                <div>
                                    Date: {{ event.date }}
                                </div>
                                <div>
                                    Time: {{ event.time }}
                                </div>
                                <div>
                                    Host: {{ event.hostBy }}
                                </div>
                            </v-container>
                        </v-flex>
                        <v-flex xs6>
                            <div>
                                <v-img
                                :src="event.imageUrl"
                                aspect-ratio="1.7"
                                max-width="auto"
                                contain
                                ></v-img>
                            </div>
                        </v-flex>
                    </v-layout>
                    <v-divider></v-divider>
                    <v-layout row wrap mt-3>
                        <v-spacer></v-spacer>
                        <v-flex>
                            <v-card-actions>
                                <v-btn color="info" plain @click="back">Cancel</v-btn>
                                <v-btn color="info" plain :to="`${_eventID}/attendees`">Attendees</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card-text>
                
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import EditEvent from './EditEvent.vue'

export default {
    name: 'SingleEvent',
    props: ['_eventID'],

    data: () => ({
      
    }),

    computed: {
        event() {
            return this.$store.getters.LoadSingleEvent(this._eventID)
        },
        
    },

    methods: {
        back() {
            return this.$router.go(-1)
        }
    },

    components: {
        EditEvent
    }
}
</script>

<style scoped>
    
</style>