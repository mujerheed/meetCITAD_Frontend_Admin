<template>
    <v-container>
        <v-card xs12 sm6 >
            <v-toolbar color="primary" dark>
                <v-toolbar-title>
                    <h2>Attendees Component</h2>
                </v-toolbar-title>
            </v-toolbar>
            <v-row class="mt-3 mb-4">
                <v-col cols="12" sm="5">
                    <v-avatar
                        size="150"
                    >
                        <!-- <img :src="event.imageUrl" :alt="event.title"> -->
                       
                    </v-avatar>
                </v-col>
                <v-col cols="12" sm="6">
                    <p v-text="event"></p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Molestias dicta quo fugiat architecto quisquam. Cum iure quae 
                    consequatur mollitia incidunt sapiente recusandae, nesciunt nihil enim 
                    hic voluptate impedit iste sequi. <br>
                    {{ users.length }} <br>
                    <template>
                        <AddNewAttendee />
                    </template>
                    <div v-if="attend">Attendees Users Activated</div>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="ml-2">
                <v-col>
                    <v-data-table
                        :headers="headers"
                        :items="users"
                        :items-per-page="5"
                        class="elevation-1"
                        fixed-header
                        search=""
                    >
                        <template #[`item.attend`]="{ item }">
                            <v-simple-checkbox
                                v-model="item.attend"
                            ></v-simple-checkbox>
                        </template>
                    </v-data-table> 
                </v-col>
            </v-row>
        </v-card>
        <v-card align-center>
        <v-card-actions class="align-center">
                <v-btn color="success">View Attendees</v-btn>
            </v-card-actions></v-card>
    </v-container>
</template>

<script>
import AddNewAttendee from './AddNewAttendee.vue'
export default {
    name: 'Attendees',
    props: ['_eventID'],
    data: () => ({
        headers: [
            {
            text: 'Full Name',
            align: 'start',
            width: 300,
            value: 'name',
          },
          { text: 'E-mail', width: 250, value: 'email' },
          { text: 'Organisation', width: 300, value: 'organisation', sortable: false},
          { text: 'Phone Number', width: 180, value: 'phone', sortable: false},
          { text: 'Attended', width: 100, value: 'attend', sortable: false}
        ],
        users: [
             {
                name: 'Frozen Yogurt',
                email: 'frozen@food.com',
                organisation: 'BUK',
                phone: '02302023',
                attend: false
            },
            {
                name: 'Yogurt',
                email: 'yg@food.com',
                organisation: 'CITAD',
                phone: '02302323',
                attend: false
            },
             {
                name: 'Frozen Yogurt',
                email: 'frozen@food.com',
                organisation: 'BUK',
                phone: '02302023',
                attend: false
            },
            {
                name: 'Yogurt',
                email: 'yg@food.com',
                organisation: 'CITAD',
                phone: '02302323',
                attend: false
            },
        ],
        src: '@/assets/logo.png',
        event: []
    }),
    components: {
        AddNewAttendee
    },
    computed: {
        events() {
            return this.event.push(this.$store.getters.LoadSingleEvent(this._eventID))
        }
    }
}
</script>

<style scoped>
    
</style>