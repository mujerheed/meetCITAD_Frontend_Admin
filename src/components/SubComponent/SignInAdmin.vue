<template>
    <v-container>
        <v-layout row wrap class="mt-4">
            <v-flex xs12 sm6 offset-sm3 mt-6>
                <v-card>
                    <v-card-title primary-title>
                        <v-layout column align-center>
                            <v-flex mt-3 mb-2>
                                <v-avatar size="80">
                                    <v-img src="../../assets/logo.svg" contain></v-img>
                                </v-avatar>
                                <h3>Sign In</h3>
                            </v-flex>
                        </v-layout>
                    </v-card-title>
                    
                    <v-card-text>
                        <v-container>
                            <v-form @submit.prevent="userSign" method="POST">
                                <v-text-field
                                    name="email"
                                    label="Email"
                                    v-model="email"
                                    required
                                    outlined
                                ></v-text-field>
                                <v-text-field
                                    name="password"
                                    label="Password"
                                    id="password"
                                    :type=" show ? 'text': 'password'"
                                    v-model="password"
                                    :append-icon="show ? 'visibility' : 'visibility_off' "
                                    @click:append="show = !show"
                                    required
                                    outlined
                                ></v-text-field>
                                 <v-card-actions>
                                <v-layout row justify-center>
                                    <v-btn color="blue--text" type="submit">Sign In</v-btn>
                                </v-layout>
                            </v-card-actions>
                            </v-form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'SignIn',

    data: () => ({
        email: '',
        password: '',
        show: false
    }),

    methods: {
        userSign(){
            this.$store.dispatch('onSignIn', {email: this.email, password: this.password})
            alert('User In')
        }

    }
}
</script>

<style scoped>
    
</style>