<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary lighten-2"
        dark
        class="mb-2 text-capitalize"
        v-bind="attrs"
        v-on="on"
      >
        Add Attendee
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">New Attendee</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <form method="post" @submit.prevent="save">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Full Name"
                  required
                  v-model.trim="newAttendance.fullname"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="E-mail"
                  required
                  v-model.trim="newAttendance.email"
                  type="email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Organisation"
                  required
                  v-model.trim="newAttendance.organisation"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Phone Number"
                  required
                  v-model.trim="newAttendance.phone"
                ></v-text-field>
                <!-- <vue-tel-input v-model.trim="newAttendance.phone"  aria-label="Phone Number"></vue-tel-input> -->
              </v-col>
              <v-col cols="12">
                <v-select
                  name="gender"
                  :items="gender"
                  v-model.trim="newAttendance.gender"
                  required
                  label="Gender"
                ></v-select>
              </v-col>
            </v-row>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text type="submit"> Save </v-btn>
            </v-card-actions>
          </form>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  props: ['eventID'],

  data: () => ({
    dialog: false,
    gender: ["Male", "Female"],
    newAttendance: {},
  }),
  
  methods: {
    close() {
      return (this.dialog = false);
    },
    save() {
      axios.post("user/created-users", this.newAttendance)
      .then(result => {
        let UserId = {
          userId: (result.data.result._id)
        }

        axios.post(`admin/attended-users/${this.eventID}`, UserId)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
      })
      .catch(error => {
        console.log(error)
      })

      this.dialog = false
    },
  },
};
</script>