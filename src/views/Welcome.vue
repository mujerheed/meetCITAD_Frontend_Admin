<template>
  <v-container>
    <h3>Welcome to OUR Page</h3>
    <v-row class="ma-4">
      <v-col cols="">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        >
        <v-col class="mb-2 pl-5 mt-8 text-center" cols="">
        <h1 class="display-3 font-weight-bold mb-3">
          Welcome to CITAD
        </h1>
      </v-col>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Welcome',
  
}
</script>
