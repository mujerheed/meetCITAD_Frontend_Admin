<template>
  <v-container grid-list-xs fluid>
    <h3>Attendees of {{title}}</h3>
    <v-card class="justify-center mt-2">
    <v-layout row wrap>
      <v-simple-table fixed-header class="pa-3" height="350" style="width:100%" loading id="myTable">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone Number</th>
            <th>Organisation</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="!attendees">
            <td colspan="6">No one attended this event yet.</td>
          </tr>
          <tr v-else v-for="(user, index) in attendeesList" :key="index">
            <td>{{ index+=1 }}</td>
            <td>{{ user.fullname }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.organisation }}</td>
            <td>{{ user.gender }}</td>
          </tr>
        </tbody>
    </v-simple-table>
    </v-layout>
    <v-card-text class="text-center" style="margin-bottom: 4px">
      <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
          outlined
          class="text-capitalize"
        >
          Download as<v-icon right>mdi-arrow-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title @click="generatePdf">PDF</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <json-excel class="btn btn-default" :data="attendeesList" :fields="dataField" :name="`${title}.xls`">
              Excel 
            </json-excel>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      </v-menu>
    </v-card-text>            
    </v-card>
  </v-container>
</template>

<script>
import { jsPDF } from 'jspdf'
import 'jspdf-autotable'
import JsonExcel from 'vue-json-excel/JsonExcel.vue'

export default {
  name: 'Attendees',
  created() {
    this.$store.dispatch('getAttendedUsers', this.eventID)
  },

  data() {
    return {
      name:"Attendees",
      attendeesList: this.$store.getters.loadAttendedUsers.attendedUsers,
      title: this.$store.getters.loadAttendedUsers.title,
      dataField: {
        'Name': 'fullname',
        'E-mail': 'email',
        'Phone Number': 'phone',
        'Organisation': 'organisation',
        'Gender': 'gender'
      }
    }
  }, 
  computed: {
    attendees() {
      return this.$store.getters.loadAttendedUsers
    },
    eventID (){
      return this.$route.params._eventID
    },
  },

  methods: {
    generatePdf() {
      let vm = this
      let title = this.$store.getters.loadAttendedUsers.title
      
      let columns = [
        {title: 'Full Name', dataKey: 'fullname'},
        {title: 'E-mail', dataKey: 'email'},
        {title: 'Phone Number', dataKey: 'phone'},
        {title: 'Organisation', dataKey: 'organisation'},
        {title: 'Gender', dataKey: 'gender'},
      ]

      let document = new jsPDF('p', 'pt', 'letter')
      document.setFont('times').text(`Attendance sheet for ${title}`, 50, 50, {halign: 'center'})
      document.autoTable({
        columns, 
        body: vm.attendeesList,
        margin: {top: 60}
        })
      
      document.save(`${title}.pdf`)
    },
  },
  
  components: {
      JsonExcel
  }
}
</script>