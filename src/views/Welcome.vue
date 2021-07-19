<template>
  <v-container>
    <v-row class="ma-4">
      <v-col cols="">
        <v-img
          :src="require('../assets/citad.jpeg')"
          class="my-3"
          contain
          height="200"
        >
        <v-col class="mb-2 pl-5 mt-8 text-center" cols="">
        <h1 class="display-3 font-weight-bold mb-3">
          Welcome Admin to meetCITAD
        </h1>
      </v-col>
        </v-img>
        <div class="text-center">
          <v-btn color="primary" large plain outlined to="/signin">Sign In</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Welcome',
  
}
</script>
