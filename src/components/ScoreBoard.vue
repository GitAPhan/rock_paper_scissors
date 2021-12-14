<template>
    <div id="scoreboard">
        <h3>Player Points:</h3>
        <p>{{scoreboard.usr_score}}</p>
        <h3>Computer Points:</h3>
        <p>{{scoreboard.bot_score}}</p>
    </div>
</template>

<script>
    export default {
        name: 'score-board',
        computed: {
            scoreboard() {
                return this.$store.state['scoreboard']; 
            }
        },
    }
</script>

<style scoped>
#scoreboard {
    display: grid;
    grid-auto-flow: column;
}

</style>
