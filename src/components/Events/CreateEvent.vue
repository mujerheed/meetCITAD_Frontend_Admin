<template>
    <v-container>
        <v-layout row wrap>
            <v-card align-center v-if="message">
              <v-snackbar
                :top="true"
                color="sucess"
                timeout="3000"
                outlined
                v-model="snackbar"
                >
                  {{ message }}
                <v-btn text color="primary" @click.native="snackbar = false">Close</v-btn>
              </v-snackbar>
            </v-card>
            <v-card align-center v-if="error">
              <v-snackbar
                :top="true"
                color="error"
                timeout="3000"
                outlined
                v-model="snackbar"
                >
                  {{ error }}
                <v-btn text color="primary" @click.native="snackbar = false">Close</v-btn>
              </v-snackbar>
            </v-card>
            <v-flex xs12 sm6 offset-sm3 mb-3>
                <h1>Create a new Event</h1>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <form method="POST" 
                  @submit.prevent="onCreateEvent" 
                  enctype="multipart/form-data" 
                  ref="myForm">
                    <v-layout row wrap>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="title"
                                label="Title"
                                v-model.trim="title"
                                required
                                prepend-icon="mdi-folder"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-textarea
                                v-model.trim="description"
                                auto-grow
                                label="Description"
                                name="description"
                                required
                                prepend-icon="edit"
                            ></v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="venue"
                                label="Venue"
                                v-model.trim="venue"
                                required
                                prepend-icon="location_on"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="availableSeat"
                                label="Available Seat"
                                v-model.trim="seat"
                                type="number"
                                required
                                prepend-icon="mdi-seat"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 offset-sm3>
                            <input 
                            type="file" 
                            accept="image/*"
                            name="eventImage"
                            style="display:none" 
                            ref="imageControl"
                            @change="onPicked">
                            <v-icon left>mdi-camera</v-icon>
                            <v-btn raised @click="onPickImage">
                                Upload Picture
                            </v-btn>
                        </v-flex>
                        <v-flex xs12 sm6 offset-sm4 mt-2>
                            <v-img :src="imageSrc" height="170" width="300"></v-img>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="hostBy"
                                label="Host By"
                                v-model.trim="hostBy"
                                required
                                prepend-icon="person"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-menu>
                                <template #activator="{ on }">
                                <v-text-field
                                    name="date"
                                    label="Date"
                                    v-on="on"
                                    readonly
                                    :value="date"
                                    required
                                    prepend-icon="date_range"
                                ></v-text-field>
                                </template>
                                <v-date-picker v-model.trim="date"></v-date-picker>
                            </v-menu>
                        </v-flex>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-menu>
                                <template #activator="{ on }">
                                <v-text-field
                                    name="time"
                                    label="Time"
                                    :value="time"
                                    v-on="on"
                                    readonly
                                    scrollable
                                    required
                                    prepend-icon="schedule"
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                    v-model.trim="time"
                                ></v-time-picker>
                            </v-menu>
                        </v-flex>
                        <v-flex xs12 sm6 offset-sm3 class="text-center">
                            <v-card-actions> 
                                <v-btn color="" type="submit">Create Event</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'CreateEvent',

    data: () => ({
        title: null,
        description: null,
        venue: null,
        hostBy: null,
        date: null,
        time: null,
        seat: null,
        eventImage: null,
        imageSrc: null,
        isDisplay: false,
        snackbar: false
    }),

    methods: {
        onPickImage () {
            this.$refs.imageControl.click()
        },

        onPicked(event) {
            const file = event.target.files[0]
            this.eventImage = file
            const image = this.eventImage.name

             if (image.lastIndexOf('.') <= 0) {
                alert ('Please pick a valid image')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imageSrc = fileReader.result
            })
            fileReader.readAsDataURL(this.eventImage)
        },
        
        onCreateEvent () {
            const myFormData = new FormData(this.$refs.myForm)
            this.$store.dispatch('createEvent', myFormData)
             
            this.$router.push('/events')
             
        }
    },

    computed: {
        error() {
            return this.$store.getters.errorMessage
        },
        message() {
            return this.$store.getters.successMessage
        }
    }

}
</script>

<style scoped>
    
</style>