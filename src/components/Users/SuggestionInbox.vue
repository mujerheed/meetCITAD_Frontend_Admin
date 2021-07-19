<template>
  <v-container>
    <h2>Suggestion Inbox Component</h2>
    <v-card class="mt-3">
      <v-simple-table>
        <tbody>
          <tr v-for="data,index in suggestions" :key="index">
            <td>{{ index+=1 }}</td>
            <td width="300">{{ data.email }}</td>
            <td width="700" align-center>{{ data.comment }}</td>    
            <td width="200">
              <v-card-actions>
                <replyMessage :mail="data._id"/>
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

    created() {
      this.$store.dispatch('getSuggestions')
    },

    components: {
      replyMessage
    },

    computed: {
      suggestions() {
        return this.$store.getters.loadSuggestion
      }
    }
}
</script>

<style scoped>
    
</style>