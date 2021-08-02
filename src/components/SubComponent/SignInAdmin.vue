<template>
  <v-container>
    <v-img
      src="@/assets/images/bg-image4.jpeg"
      contain
      centered
    >
    <v-layout row wrap style="margin-top:50px">
      <v-flex xs12 sm6 offset-sm3 mt-6>
        <v-card>
          <v-card-title primary-title>
            <v-card align-center v-if="error">
              <v-snackbar
                :top="true"
                color="warning"
                timeout="3000"
                outlined
                v-model="snackbar"
                >
                  {{ error }}
                <v-btn text color="primary" @click.native="snackbar = false">Close</v-btn>
              </v-snackbar>
            </v-card>
            <v-layout column align-center>
              <v-flex mt-3 mb-2>
                <v-avatar size="80">
                    <v-img src="../../assets/images/avatar.png" contain></v-img>
                </v-avatar>
                <h3>Sign In</h3>
              </v-flex>
            </v-layout>
          </v-card-title>
            
          <v-card-text>
            <v-container>
              <form @submit.prevent="userSign" method="POST">
                <v-text-field
                  name="email"
                  label="Email"
                  type="email"
                  v-model.trim="email"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  name="password"
                  label="Password"
                  id="password"
                  :type=" show ? 'text': 'password'"
                  v-model.trim="password"
                  :append-icon="show ? 'visibility' : 'visibility_off' "
                  @click:append="show = !show"
                  required
                  outlined
                ></v-text-field>
                <v-card-actions>
                  <v-layout row justify-center>
                      <v-btn color="blue--text" type="submit" @click="snackbar= true">Log In</v-btn>
                  </v-layout>
                </v-card-actions>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    </v-img>
  </v-container>
</template>

<script>
export default {
    name: 'SignIn',

    data: () => ({
        email: '',
        password: '',
        show: false,
        snackbar: false
    }),

    methods: {
      userSign(){

        if (this.email == '' && this.password == '') {
          return 
        }
        this.$store.dispatch('signAdminIn', {
          email: this.email,
          password: this.password
          })
      }
    },

    computed: {
      error(){
        return this.$store.getters.errorMessage
      }
    }
}
</script>

<style scoped>
    
</style>