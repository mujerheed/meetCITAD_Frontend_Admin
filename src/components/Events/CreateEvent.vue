<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3 mb-3>
                <h1>Create a new Event</h1>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <form method="POST" @submit.prevent="onCreateEvent" enctype="multipart/form-data" ref="form">
                    <!-- <v-layout row wrap>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="title"
                                label="Title"
                                id="title"
                                v-model="title"
                                prepend-icon="mdi-folder"
                                required
                            ></v-text-field>
                            <input type="file" name="eventImage" id="eventImage">
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-textarea
                                v-model="description"
                                auto-grow
                                label="Description"
                                id="description"
                                prepend-icon="edit"
                                required
                            ></v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="venue"
                                label="Venue"
                                id="venue"
                                v-model="venue"
                                prepend-icon="location_on"
                                required
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 offset-sm3>
                            <input 
                            type="file" 
                            accept="image/*"
                            name="eventImg"
                            style="display:none" 
                            ref="imageUrl"
                            @change="onPickedImage">
                            <v-icon left>mdi-camera</v-icon>
                            <v-btn raised @click="onPickImage">
                                Upload Picture
                            </v-btn>
                        </v-flex>
                        <v-flex xs12 sm6 offset-sm4 mt-2>
                            <v-img :src="imageSrc" height="150" width="300"></v-img>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="hostBy"
                                label="Host By"
                                id="hostBy"
                                v-model="hostBy"
                                prepend-icon="person"
                                required
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
                                    :value="formatDate"
                                    prepend-icon="date_range"
                                ></v-text-field>
                                </template>
                                <v-date-picker v-model="date"></v-date-picker>
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
                                    prepend-icon="schedule"
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                    v-model="time"
                                ></v-time-picker>
                            </v-menu>
                        </v-flex>
                        <v-flex xs12 sm6 offset-sm3 class="text-center">
                            <v-card-actions> 
                                <v-btn color="" type="submit">Create Event</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout> -->
                    <v-text-field
                                name="hostBy"
                                label="Host By"
                                id="hostBy"
                                v-model="hostBy"
                                prepend-icon="person"
                                required
                            ></v-text-field>
                    <input type="file" name="eventImage" id="eventImage">
                    <v-btn color="" type="submit">Create Event</v-btn>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { format, parseISO } from 'date-fns'

export default {
    name: 'CreateEvent',

    data: () => ({
        title: null,
        description: null,
        venue: null,
        hostBy: null,
        date: null,
        time: null,
        imageUrl: null,
        imageSrc: null,
        isDisplay: false
    }),

    methods: {
        // onPickImage () {
        //     this.$refs.imageUrl.click()
        // },

        // onPickedImage (event) {
        //     const file = event.target.files
        //     let imageName = file[0].name

        //     if (imageName.lastIndexOf('.') <= 0) {
        //         alert ('Please pick a valid image')
        //     }
        //     const fileReader = new FileReader()
        //     console.log(this.$refs.name);
        //     fileReader.addEventListener('load', () => {
        //         this.imageSrc = fileReader.result
        //     })
        //     fileReader.readAsDataURL(file[0])
        //     this.imageUrl = file[0].name
        // },

        onCreateEvent () {
            this.$store.dispatch('createEvent',{
                title: this.title,
                description: this.description,
                venue: this.venue,
                date: this.date,
                time: this.time,
                hostBy: this.hostBy
            })
            this.$router.push('/events')
            console.log(this.$refs.form[1].value)
        }
    },

    computed: {
        formatDate(){
            return this.date ? format(parseISO(this.date), 'EEEE, MMMM do yyyy') : ''
        }
    }
}
</script>

<style scoped>
    
</style>