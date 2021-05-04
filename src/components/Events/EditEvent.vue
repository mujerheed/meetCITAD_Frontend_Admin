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
                                v-model.trim="editedTitle"
                            ></v-text-field>
                            <v-text-field
                                name="description"
                                label="Description"
                                v-model.trim="editedDescription"
                                textarea
                            ></v-text-field>
                            <v-text-field
                                name="hostBy"
                                label="Host By"
                                v-model.trim="editedHostBy"
                            ></v-text-field>
                            <v-menu>
                                <template #activator="{ on }">
                                <v-text-field
                                    name="date"
                                    label="Date"
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
import { format, parseISO } from 'date-fns'
export default {
    props: ['event'],

    data (){
        return {
            dialog: false,
            editedTitle: this.event.title,
            editedDescription: this.event.description,
            editedHostBy: this.event.hostBy,
            editedDate: this.event.date,
            editedTime: this.event.time
        }
    },

    computed: {
        formatDate(){
            return this.editedDate ? format(parseISO(this.editedDate), 'EEEE, MMMM do yyyy') : ''
        }
    },

    methods: {
        onSave() {
            this.dialog = false
            console.log({
                title: this.editedTitle,
                description: this.editedDescription,
                hostBy: this.editedHostBy,
                date: this.editedDate,
                time: this.editedTime
            });
        }
    }
}
</script>

<style scoped>
    
</style>