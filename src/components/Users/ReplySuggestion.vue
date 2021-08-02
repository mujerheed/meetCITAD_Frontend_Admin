<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          outlined
          v-bind="attrs"
          v-on="on"
        >
          Reply
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Reply Comments
        </v-card-title>
        <v-card-text>
          <p><strong>From:</strong> {{ userComment.email }} </p>
          <p><b>Message:</b> {{ userComment.comment }}</p>
           <v-textarea
             name="reply"
             label="Reply"
             prepend-icon="mdi-comment"
             multi-line
             v-model="replyText"
           ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="replyComment"
          >
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: ['mail'],
    data () {
      return {
        dialog: false,
        comments: this.mail,
        replyText: ''
      }
    },

    computed: {
      userComment() {
        return this.$store.getters.suggestion(this.mail)
      }
    },

    methods: {
      replyComment() {
        if (this.replyText == ""){
          return alert("Please fill in all the fields!!!")
        }
        let data = {
          email: this.userComment.email,
          reply: this.replyText
        }

        this.$store.dispatch('replySuggestions', data)
        this.dialog = false
      }
    }
  }
</script>
