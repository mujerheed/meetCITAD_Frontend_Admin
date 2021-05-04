<template>
    <nav>
        <v-navigation-drawer app temporary v-model="sideNav" color="blue darken-2" dark>
            <v-list>
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
                        <span>LogOut</span>
                    </v-list-item-content>
                    
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app class="transparent"  color="blue darken-2 white--text" dark>
            <v-app-bar-title>
                <v-app-bar-nav-icon
                    @click.native="sideNav = !sideNav"
                    class="hidden-sm-and-up"
                ></v-app-bar-nav-icon>
                <span>meetCITAD</span>
            </v-app-bar-title>
            
            <v-spacer></v-spacer>
            
            <v-toolbar-items class="hidden-xs-only" v-for="nav in navigations" :key="nav.name">
                <v-tooltip bottom v-if="userAuthentication">
                    <template v-slot:activator="{ on }">
                        <v-btn text class="pl-9 pr-9 ml-3 mr-3" :to="nav.linkTo" exact v-on="on">
                            <v-icon medium color="white">{{ nav.icon }}</v-icon>
                        </v-btn>
                    </template>
                    <span> {{ nav.name }} </span>
                </v-tooltip>
            </v-toolbar-items>
            <v-btn text to="/signin">
                <span>
                    <v-icon left>lock</v-icon>
                    Sign In
                </span>
            </v-btn>
            <v-btn text v-if="userAuthentication">
                <span>
                    <v-icon left>exit_to_app</v-icon>
                    Sign Out
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
                {icon: 'room', name: 'Create Event', linkTo: '/addEvent'},
                {icon: 'inbox', name: 'Inbox', linkTo: '/suggestionMessage'}
            ]
        }
    },

    computed: {
        userAuthentication(){
            return this.$store.state.signInAuthentication !== null && 
                    this.$store.state.signInAuthentication !== undefined
        }
    }
}
</script>

<style scoped>

</style>