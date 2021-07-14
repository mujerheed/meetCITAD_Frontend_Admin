<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="300"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="info" class="text-center text-capitalize"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left>delete</v-icon>
          <span>Delete</span>
        </v-btn>
      </template>
      <v-card outlined class="justify-center pa-5">
        <v-card-text class="text-center text-h5">Are you sure you want to delete this event?</v-card-text>
        <v-card-text class="text-center">
          <v-btn
            color="green darken-1"
            text
            class="text-right"
            @click="deleteEvent"
          >
            Yes
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            class="text-left"
            @click="dialog = false"
          >
            No
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: ['id'],

    data () {
      return {
        dialog: false
      }
    },
    methods: {
      deleteEvent() {
        let eventId = {id: this.id}
        
        this.$store.dispatch('deleteEvent', eventId)
        return this.dialog = false
      }
    }

  }
</script>
