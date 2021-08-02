<template>
    <v-container mt-4>
        <v-layout row wrap>
            <v-card align-center v-if="message">
              <v-snackbar
                :top="true"
                color="sucess"
                timeout="3000"
                outlined
                v-model="snackbar"
                >
                  {{ message }}
                <v-btn text color="primary" @click.native="snackbar = false">Close</v-btn>
              </v-snackbar>
            </v-card>
            <v-card align-center v-if="error">
              <v-snackbar
                :top="true"
                color="error"
                timeout="3000"
                outlined
                v-model="snackbar"
                >
                  {{ error }}
                <v-btn text color="primary" @click.native="snackbar = false">Close</v-btn>
              </v-snackbar>
            </v-card>
            <v-flex xs12>
                <v-card class="ma-5">
                    <p align-center> {{ msg }} </p>
                    <v-text-field 
                    append-icon="search" 
                    hide-details 
                    single-line
                    v-model.trim="searchByTitle" 
                    placeholder="Search an event by title..."
                    ></v-text-field>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm8 offset-sm2>
                <v-expansion-panels focusable>
                    <v-expansion-panel
                        v-for="event in filteredEvent"
                        :key="event._id"
                        class="mb-2"
                    >
                        <v-expansion-panel-header>
                           <h3> {{ event.title }} </h3>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="mt-4">
                            <v-row>
                                <v-col cols="4">
                                    <v-card height="150" width="150">
                                        <v-img :src="`http://localhost:3030/${event.eventImage}`" :alt="event.title"
                                        height="100%" width="100%" >
                                        </v-img>
                                    </v-card>
                                </v-col>
                                <v-col cols="8">
                                    <div> {{ event.description }} </div>
                                    <v-card-actions class="align-center">
                                        <alert :id="`${event._id}`"/>
                                        <v-spacer></v-spacer>
                                        <v-btn color="info" class="text-center text-capitalize" :to="`/events/${event._id}`">
                                            <v-icon left>mdi-arrow-right</v-icon>
                                            <span>Event Info</span>
                                        </v-btn>
                                    </v-card-actions>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import alert from './Verification.vue'
export default {
    name: 'EventsList',

    data: () => ({
        msg: '',
        searchByTitle: '',
        snackbar: false
    }),

    computed: {
        filteredEvent (){
            return this.$store.getters.loadEvents.filter((event) => {
                return event.title.match(this.searchByTitle)
            })
        },
        error() {
            return this.$store.getters.errorMessage
        },
        message() {
            return this.$store.getters.successMessage
        }
    },

    components: {
        alert
    }
}
</script>

<style scoped>
    
</style>