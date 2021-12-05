<template>
  <v-container>
    <v-img 
      :src="require('../assets/images/bg-image2.jpeg')"
      class="my-3"
      contain
      centered>
    <v-row class="ma-4">
      <v-col cols="12">
        <v-col class="mb-2 pl-5 text-center" cols="12" style="margin-top: 100px">
        <h1 class="display-4 font-weight-bold mb-3" style="background-color: white; opacity:0.4">
          Welcome Admin to meetCITAD
        </h1>
      </v-col>
        <div class="text-center">
          <v-btn color="" large plain outlined to="/signIn">Sign In</v-btn>
        </div>
      </v-col>
    </v-row>
    </v-img>
  </v-container>
</template>

<script>
export default {
  name: 'Welcome',

}
</script>
