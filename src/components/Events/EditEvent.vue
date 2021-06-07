<template>
    <v-dialog persistent v-model="dialog" max-width="600">
        <template #activator="{ on }">
            <v-btn plain fab v-on="on">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-card-title>Edit Event</v-card-title>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                    <v-col cols="12">
                        <v-card-text>
                            <v-text-field
                                name="title"
                                label="Title"
                                required
                                v-model.trim="editedTitle"
                            ></v-text-field>
                            <v-text-field
                                name="description"
                                label="Description"
                                required
                                v-model.trim="editedDescription"
                                textarea
                            ></v-text-field>
                            <v-text-field
                                name="venue"
                                label="Venue"
                                required
                                v-model.trim="editedLocation"
                            ></v-text-field>
                            <v-text-field
                                name="hostBy"
                                label="Host By"
                                required
                                v-model.trim="editedHostBy"
                            ></v-text-field>
                            <v-menu>
                                <template #activator="{ on }">
                                <v-text-field
                                    name="date"
                                    label="Date"
                                    required
                                    v-on="on"
                                    readonly
                                    :value="editedDate"
                                    prepend-icon="date_range"
                                ></v-text-field>
                                </template>
                                <v-date-picker v-model.trim="editedDate"></v-date-picker>
                            </v-menu>

                            <v-menu>
                                <template #activator="{ on }">
                                <v-text-field
                                    name="time"
                                    label="Time"
                                    :value="editedTime"
                                    v-on="on"
                                    readonly
                                    prepend-icon="schedule"
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                    v-model.trim="editedTime"
                                ></v-time-picker>
                            </v-menu>
                        </v-card-text>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                    <v-col cols="12">
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="dialog = false">Close</v-btn>
                            <v-btn @click="onSave">Save</v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['event'],

    data (){
        return {
          dialog: false,
          editedTitle: this.event.title,
          editedDescription: this.event.description,
          editedLocation: this.event.venue,
          editedHostBy: this.event.hostBy,
          editedDate: null,
          editedTime: null
        }
    },

    methods: {
        onSave() {
          this.dialog = false
          const editedEvent = {
            id: this.event._id,
            title: this.editedTitle,
            description: this.editedDescription,
            venue: this.editedLocation,
            hostBy: this.editedHostBy,
            date: this.editedDate,
            time: this.editedTime
          }
          
          this.$store.dispatch('updateEvent', editedEvent)
        },
        
    }
}
</script>

<style scoped>
    
</style>