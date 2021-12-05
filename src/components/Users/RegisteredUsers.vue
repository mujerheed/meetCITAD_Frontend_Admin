<template>
    <div class=" xs12 sm12 md12">
            <v-card-title primary-title>
                <v-toolbar color="primary" dark>
                    <v-toolbar-title>
                        <h3> {{ eventInfo.title }}</h3>
                    </v-toolbar-title>
                </v-toolbar>                
            </v-card-title>

            <v-card-text>
            <v-card align-center v-if="error">
              <v-snackbar
                :top="true"
                color="warning"
                timeout="3000"
                outlined
                v-model="snackbar"
                >
                  {{ error }}
                <v-btn text color="primary" @click.native="snackbar = false">Close</v-btn>
              </v-snackbar>
            </v-card>
                <v-row class="mt-1 mb-4">
                    <v-col cols="12" sm="5">
                        <v-avatar
                            size="150"
                        >
                            <img :src="`https://meetcitad.herokuapp.com/${eventInfo.eventImage}`" :alt="eventInfo.title" v-if="regUsers">
                            <img src="../../assets/images/citad.jpeg" v-if="!regUsers"/>
                        </v-avatar>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                        {{ eventInfo.description }}
                        <br><br><br>
                        <p v-if="number">No. of attendees on list {{ number.length }}</p>
                        <p v-else>No one on the attendees list yet</p>
                        <hr>
                        <template class="mt-5">
                            <AddNewAttendee :eventID="eventID" />
                        </template>
                    </v-col>
                </v-row>
                <!-- <v-divider></v-divider>  -->
                <v-row class="container ml-5" cols="">
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                    <v-data-table
                        :headers="headers"
                        :items="regUsers"
                        class="elevation-1"
                        :search="search"
                        :loading="loading"
                        loading-text="Loading... Please wait"
                    >
                    <template v-slot:item.attendance="{ item }">
                        <v-checkbox
                        v-model="item.attendance"
                        :ripple="false"
                        @click.prevent="{{ item.attendance ? attend(item._id) : notAttend(item._id) }}"
                        >
                        </v-checkbox>
                    </template>
                    </v-data-table>
                </v-row>

                <div class="mt-5 text-center">
                    <v-btn color="primary" class="mr-3 text-capitalize" dark @click.native="back">Back</v-btn>
                    <v-btn color="primary" class="ml-3 text-capitalize" dark to="attendees">View Attendees</v-btn>
                </div>                
            </v-card-text>

    </div>

</template>

<script>
import AddNewAttendee from './AddNewAttendee.vue'
import axios from 'axios'

export default {
    name: 'Register',
    data: () => ({
        headers: [
            { text: 'Attended', width: 80, value: 'attendance', sortable: false},
            { text: 'Full Name', align: 'start', width: 270, value: 'fullname' },
            { text: 'E-mail', width: 250, value: 'email' },
            { text: 'Organisation', width: 260, value: 'organisation', sortable: false},
            { text: 'Phone Number', width: 150, value: 'phone', sortable: false},
            { text: 'Gender', width: 100, value: 'gender', sortable: false}
        ],
        hide: false,
        snackbar: false,
        search: ''
    }),
    components: {
        AddNewAttendee
    },

    mounted() {
        this.$store.dispatch('getRegisteredUsers', this.eventID)
        this.$store.dispatch('getAttendedUsers', this.eventID) 
    },

    methods: {
        attend(userId){
          const UserID = {
            userId: userId
          }
            axios.post(`admin/attended-users/${this.eventID}`, UserID)
            .then(res => {
                let data = res.data.message
                this.$store.commit('attendedUser', UserID)
                this.$store.commit('successfulMessage', data)
                console.log(data);
            })
            .catch(err => {
                let bug = err.response.data.error
                console.log(bug);
                this.$store.commit('failedMessage', bug)
            })
        },

        notAttend(userId){
          const UserID = {
            userId: userId
          }
          axios.post(`admin/notattended-users/${this.eventID}`, UserID)
          .then(res => {
              let data = res.data.message
              this.$store.commit('successfulMessage', data)
              this.$store.commit('unAttendedUser', UserID)
              console.log(data);
          })
          .catch(err => {
              let bug = err.response.data.error
              console.log(bug);
            this.$store.commit('failedMessage', bug)
          })
        },

        back() {
            this.$router.back(-1)
        },
        
        onDismissed() {
            console.log("Dismissed Works")
            this.$store.dispatch('clear')
        }
    },
    computed: {
        eventID (){
            return this.$route.params._eventID
        },

        regUsers() {
            return this.$store.getters.loadRegisteredUsers.registeredUsers
        },

        eventInfo() {
            return this.$store.getters.loadRegisteredUsers
        },

        error() {
            return this.$store.getters.errorMessage
        },

        loading() {
            return this.$store.getters.loading
        },

        number() {
            return this.$store.getters.loadAttendedUsers.attendedUsers
        }
    },

}
</script>

<style scoped>
    
</style>