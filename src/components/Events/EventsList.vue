<template>
    <v-container mt-4>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card class="ma-5">
                    <p align-center> {{ msg }} </p>
                    <v-text-field 
                    append-icon="search" 
                    hide-details 
                    single-line 
                    placeholder="Search an event by title..."
                    ></v-text-field>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm8 offset-sm2>
                <v-expansion-panels focusable>
                    <v-expansion-panel
                        v-for="event in eventLists"
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
                                        <v-img :src="event.imageUrl"
                                        height="100%" width="100%" alt="photo">
                                        </v-img>
                                    </v-card>
                                </v-col>
                                <v-col cols="8">
                                    <div> {{ event.description }}
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dicta quaerat recusandae libero maiores saepe nemo eaque voluptate odit esse ducimus aliquid laborum, tenetur magni ipsa exercitationem facere tempore minima!
                                    </div>
                                    <v-card-actions class="align-end">
                                        <v-btn color="info" class="text-center mr-1 text-capitalize" @click="deleteme(event._id)">
                                            <v-icon left>delete</v-icon>
                                            <span>Delete</span>
                                        </v-btn>
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
import axios from 'axios'
export default {
    name: 'EventsList',

    data: () => ({
        msg: ''
    }),

    computed: {
        eventLists() {
            return this.$store.getters.loadEvents
        }
    }, 
    methods: {
        deleteme(eventId) {
            axios.delete(`http://localhost:3030/event/events/${eventId}`).then(
                res => {
                    this.msg = res.data.msg
                }
            ).catch(() => {
                console.log("Something is not right out there")
            })
        }
    }
}
</script>

<style scoped>
    
</style>