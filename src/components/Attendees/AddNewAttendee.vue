<template>
    <v-dialog
        v-model="dialog"
        max-width="500px"
    >
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
            <v-row>
                <v-col
                cols="12"
                >
                <v-text-field
                    label="Full Name"
                ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                >
                <v-text-field
                    label="E-mail"
                ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                >
                <v-text-field
                    label="Organisation"
                ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                >
                <v-text-field
                    label="Phone Number"
                ></v-text-field>
                </v-col>
            </v-row>
            </v-container>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            color="blue darken-1"
            text
            @click="close"
            >
            Cancel
            </v-btn>
            <v-btn
            color="blue darken-1"
            text
            @click="save"
            >
            Save
            </v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data: () => ({
        dialog: false
    }),

    methods: {
        close() {
          return this.dialog = false
        },
        save(){
            
        }
    },

    watch: {
        dialog (val) {
        val || this.close()
      }
    }
}
</script>