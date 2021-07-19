<template>
    <v-container>
        <v-card xs-12 sm-6 md-6>
            <div v-if="message">
            <v-snackbar
                :top="true"
                color="warning"
                timeout="3000"
                outlined
                v-model="hide"
            >
                {{ message }}
                <v-btn text @click.native="hide = false">Close</v-btn>
            </v-snackbar>
            </div>
            <v-card-title primary-title>
                <v-toolbar color="primary" dark>
                    <v-toolbar-title>
                        <h3> {{ eventInfo.title }}</h3>
                    </v-toolbar-title>
                </v-toolbar>                
            </v-card-title>
            <v-card-text>
                <v-row class="mt-3 mb-4">
                    <v-col cols="12" sm="5">
                        <v-avatar
                            size="150"
                        >
                            <img :src="`http://localhost:3030/${eventInfo.eventImage}`" :alt="eventInfo.title" v-if="regUsers">
                            <img src="../../assets/logo.png" v-if="!regUsers"/>
                        </v-avatar>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                        {{ eventInfo.description }}<br>
                        <br>
                        <!-- {{ attended.length}} -->
                        <hr>
                        <template class="mt-5">
                            <AddNewAttendee :eventID="eventID" />
                        </template>
                    </v-col>
                </v-row>
                <v-divider></v-divider> 
                <v-row class="ml-2" cols="12">
                    <v-data-table
                        :headers="headers"
                        :items="regUsers"
                        class="elevation-1"
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

                <v-card-actions class="mt-5 text-center">
                    <v-btn color="primary" dark @click.native="back">Back</v-btn>
                    <v-btn color="primary" dark to="attendees">View Attendees</v-btn>
                </v-card-actions>                
            </v-card-text>

        </v-card>
    </v-container>

</template>

<script>
import AddNewAttendee from './AddNewAttendee.vue'
import axios from 'axios'

export default {
    name: 'Register',
    data: () => ({
        headers: [
            {
            text: 'Full Name',
            align: 'start',
            width: 270,
            value: 'fullname',
          },
          { text: 'E-mail', width: 250, value: 'email' },
          { text: 'Organisation', width: 260, value: 'organisation', sortable: false},
          { text: 'Phone Number', width: 180, value: 'phone', sortable: false},
          { text: 'Gender', width: 100, value: 'gender', sortable: false},
          { text: 'Attended', width: 100, value: 'attendance', sortable: false}
        ],
        hide: false
    }),
    components: {
        AddNewAttendee
    },

    created() {
        this.$store.dispatch('getRegisteredUsers', this.eventID)
        console.log(this.checkAttend("60f5735abba22c258e1b0a97"));  
    },

    methods: {
        
        attend(userId){
          const UserID = {
            userId: userId
          }
            axios.post(`admin/attended-users/${this.eventID}`, UserID)
            .then(res => {
                this.$store.commit('attendedUser', UserID)
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                this.$store.commit('failedMessage', (err.response.data.error))
            })
        },

        notAttend(userId){
          const UserID = {
            userId: userId
          }
          axios.post(`admin/notattended-users/${this.eventID}`, UserID)
          .then(res => {
              console.log(res);
              this.$store.commit('unAttendedUser', UserID)
          })
          .catch(err => {
              console.log(err);
              this.$store.commit('failedMessage', (err.response.data.error))
          })
        },

        back() {
            this.$router.back(-1)
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

        message() {
            return this.$store.getters.error
        },

        checkAttend() {
            return (user) => (this.$store.getters.loadAttendedUsers.attendedUsers).findIndex(ev => ev._id == user) >= 0
        },

        loading() {
            return this.$store.getters.loading
        }
    }
}
</script>

<style scoped>
    
</style>