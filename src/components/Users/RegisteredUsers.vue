<template>
    <v-container>
        <v-card xs-12 sm-6 md-6>
            <v-snackbar
                :top="true"
                color="warning"
                timeout="3000"
                outlined
                v-model="hide"
                v-if="message === `You are already an Attendee of this event`"
            >
                The User already in the attendance list
                <v-btn text @click.native="hide = false">Close</v-btn>
            </v-snackbar>
            <v-card-title primary-title>
                <v-toolbar color="primary" dark>
                    <v-toolbar-title>
                        <h3> {{ eventInfo.title }} {{ message }}</h3>
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
                    >
                    <template v-slot:item.attendance="{ item }">
                        <v-simple-checkbox
                        v-model="item.attendance"
                        :ripple="false"
                        @click.prevent="{{ item.attendance ? attend(item._id) : notAttend(item._id) }}"
                        >
                        </v-simple-checkbox>
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
    },

    methods: {
        
        attend(userId){
          const UserID = {
            userId: userId
          }
            axios.post(`admin/attended-users/${this.eventID}`, UserID)
            .then(res => {
                this.$store.commit('failedMessage', res.data.msg)
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        },

        notAttend(userId){
          const UserID = {
            userId: userId
          }
          axios.post(`admin/notattended-users/${this.eventID}`, UserID)
          .then(res => {
              console.log(res);
          })
          .catch(err => {
              console.log(err);
          })
        },

        back() {
            this.$router.back(-1)
        },

        // checkAttendance() {
        //     let attendance = ''
        //     for (const iterator of this.attended.attendedUsers) {
        //     let attend = this.regUsers.attendance.findIndex(uID => uID === iterator._id) >= 0
        //     if(attend === true) {
        //         attendance = true
        //     }
        //         attendance = false
        // }
        // return attendance   
            
        // },
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

        attended() {
            return this.$store.getters.loadAttendedUsers
        },

        message() {
            return this.$store.getters.errorMessage
        }
    }
}
</script>

<style scoped>
    
</style>