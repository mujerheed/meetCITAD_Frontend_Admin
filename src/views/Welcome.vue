<template>
  <v-container>
    <v-jumbotron color="secondary">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">Heading</h3>
            <span class="subheading">Subheading</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3">Description</div>
            <v-btn large color="primary" class="mx-0">buttonText</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>  
    
    <v-row class="ma-4">
      <v-col cols="2">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        >
        <v-col class="mb-4 pl-5 mt-5 text-xs-center" cols="10">
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
