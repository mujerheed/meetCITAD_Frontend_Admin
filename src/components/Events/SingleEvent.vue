<template>
	<v-container>
		<v-layout class="ma-4">
			<v-flex xs12>
					<v-card>
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
					<v-toolbar color="blue darken-1" dark class="mb-5">
							<h3> {{ event.title }} </h3>
							<v-spacer></v-spacer>
							<template>
									<EditEvent :event="event" />
							</template>
					</v-toolbar>

					<v-card-text >
							<v-layout row wrap mb-4>
									<v-flex xs6 class="">
											<v-container>
													<div>
															{{ event.description }}
													</div>
													<div>
															Venue: {{ event.venue }}
													</div>
													<div>
															Date: {{ event.date | formatDate }}
													</div>
													<div>
															Time: {{ event.time | formatTime}}
													</div>
													<div>
															Host: {{ event.hostBy }}
													</div>
													<div>
														Seats: {{ event.availableSeat }}
													</div>
													<v-spacer></v-spacer>
													<div>
														<v-btn color="blue darken-1" dark @click="sendReminder">Send Reminder</v-btn>
													</div>
											</v-container>
									</v-flex>
									<v-flex xs6>
											<div>
													<v-img
														:src="`https://meetcitad.herokuapp.com/${event.eventImage}`"
														aspect-ratio="1.7"
														max-width="auto"
														contain
													></v-img>
											</div>
									</v-flex>
							</v-layout>
							<v-divider></v-divider>
							<v-layout row wrap mt-3>
									<v-spacer></v-spacer>
									<v-flex>
											<v-card-actions>
													<v-btn color="info" plain @click="back">Cancel</v-btn>
													<v-btn color="info" plain :to="`${eventId}/registration`">Registered Users</v-btn>
											</v-card-actions>
									</v-flex>
							</v-layout>
					</v-card-text>
					
					</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import EditEvent from './EditEvent.vue'

export default {
    name: 'SingleEvent',

    data: () => ({
      snackbar: false
    }),
	
    methods: {
			back() {
					return this.$router.go(-1)
			},

			sendReminder() {
				this.snackbar = true
				let comfirm = confirm("Do you want to send a Reminder to the Registered Users?")
				if (comfirm == true) {
					return this.$store.dispatch('remindUsers', this.eventId)
				}else {
					return
				}
			}
    },

		computed: {
			event() {
				return this.$store.getters.singleEvent(this.eventId)
			},

			eventId() {
				return this.$route.params._eventID
			},

			message() {
				return this.$store.getters.successMessage
			},

			error() {
				return this.$store.getters.errorMessage
			}
		},

    components: {
        EditEvent
    }
}
</script>

<style scoped>
    
</style>