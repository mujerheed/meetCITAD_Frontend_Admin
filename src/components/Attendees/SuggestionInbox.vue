<template>
    <v-container>
        <h2>Suggestion Inbox Component</h2>
        <v-card class="mt-3">
            <v-simple-table>
                <tbody>
                    <tr>
                        <td width="300">email@gmail.com</td>
                        <td width="700" align-center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia pariatur at iure atque quam ipsa esse cupiditate magni voluptate rerum dolorem quidem reiciendis sit ea sequi dignissimos molestiae, laudantium et!</td>    
                        <td width="200">
                            <v-card-actions>
                                <v-btn outline color="primary" class="text-capitalize" width="150" dark>Reply</v-btn>
                            </v-card-actions>
                        </td>
                    </tr>
                    <tr>
                        <td width="300">email@gmail.com</td>
                        <td width="700" align-center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia pariatur at iure atque quam ipsa esse cupiditate magni voluptate rerum dolorem quidem reiciendis sit ea sequi dignissimos molestiae, laudantium et!</td>    
                        <td width="200">
                            <v-card-actions>
                                <v-btn outline color="primary" class="text-capitalize" width="150" dark>Reply</v-btn>
                            </v-card-actions>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'SuggestionInbox',

    data: () => ({
       
    })
}
</script>

<style scoped>
    
</style>