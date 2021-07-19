<template>
  <nav>
    <v-navigation-drawer app temporary v-model="sideNav" color="blue darken-2" dark>
      <v-list v-if="signIn">
        <v-list-item v-for="nav in navigations" :key="nav.name">
          <v-list-item-icon>
          <v-icon> {{ nav.icon }} </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
              <router-link :to="nav.linkTo" style="text-decoration: none; color: white">
                  {{ nav.name }}
              </router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
              <v-icon>exit_to_app</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
              <span @click="logout">Log Out</span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="transparent"  color="blue darken-2 white--text" dark>
        <v-app-bar-title>
            <v-app-bar-nav-icon
                @click.native="sideNav = !sideNav"
                class="hidden-sm-and-up"
                v-if="signIn"
            ></v-app-bar-nav-icon>
            <router-link to="/" class="styleLink">meetCITAD</router-link>
        </v-app-bar-title>
        
        <v-spacer></v-spacer>
        
        <v-toolbar-items class="hidden-xs-only" v-for="nav in navigations" :key="nav.name">
            <v-tooltip bottom v-if="signIn">
                <template v-slot:activator="{ on }">
                    <v-btn text class="pl-9 pr-9 ml-3 mr-3" :to="nav.linkTo" exact v-on="on">
                        <v-icon medium color="white">{{ nav.icon }}</v-icon>
                    </v-btn>
                </template>
                <span> {{ nav.name }} </span>
            </v-tooltip>
        </v-toolbar-items>
        <v-btn text to="/signin" v-if="!signIn">
            <span>
                <v-icon left>lock</v-icon>
                Log In
            </span>
        </v-btn>
        <v-btn text v-if="signIn" class="hidden-xs-only text-capitalize" @click="logout">
            <span @click="logout">
                <v-icon left>exit_to_app</v-icon>
                Log Out
            </span>
        </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
    name: 'NavigationBar',
    
    data() {
        return {
            sideNav: false,
            navigations: [
                {icon: 'mdi-home', name: 'Home', linkTo: '/'},
                {icon: 'event', name: 'View Event', linkTo: '/events'},
                {icon: 'room', name: 'Create Event', linkTo: '/add-event'},
                {icon: 'inbox', name: 'Inbox', linkTo: '/suggestion-message'}
            ]
        }
    },

    computed: {
        signIn(){
            let auth = this.$store.getters.adminAuth 
            return auth === true
        }

    },

    methods: {
        logout() {
            this.$store.dispatch('signAdminOut')
        }
    }
}
</script>

<style scoped>
  .styleLink {
    text-decoration: none;
  }
  .active {
    border-left: 1px solid black;
  }
</style>