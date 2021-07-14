<template>
  <v-container>
    <h2>Suggestion Inbox Component</h2>
    <v-card class="mt-3">
      <v-simple-table>
        <tbody>
          <tr>
            <td>1</td>
            <td width="300">email@gmail.com</td>
            <td width="700" align-center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia pariatur at iure atque quam ipsa esse cupiditate magni voluptate rerum dolorem quidem reiciendis sit ea sequi dignissimos molestiae, laudantium et!</td>    
            <td width="200">
              <v-card-actions>
                <replyMessage />
              </v-card-actions>
            </td>
         </tr>
          <tr>
            <td>2</td>
            <td width="300">email@gmail.com</td>
            <td width="700" align-center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia pariatur at iure atque quam ipsa esse cupiditate magni voluptate rerum dolorem quidem reiciendis sit ea sequi dignissimos molestiae, laudantium et!</td>    
            <td width="200">
              <v-card-actions>
                <replyMessage />
              </v-card-actions>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
import replyMessage from './ReplySuggestion.vue'
export default {
    name: 'SuggestionInbox',

    data: () => ({
       
    }),

    components: {
      replyMessage
    },

    computed: {
      messages() {
        return this.$store.getters.loadSuggestion
      }
    }
}
</script>

<style scoped>
    
</style>