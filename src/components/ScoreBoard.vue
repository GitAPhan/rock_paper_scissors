<template>
  <div id="scoreboard">
    <section>
      <h4>Player Points:</h4>
      <!-- display scoreboard, value from store -->
      <h2>{{ scoreboard.usr_score }}</h2>
    </section>
    <section>
      <h4>Ties:</h4>
      <h2>{{ scoreboard.tie_score }}</h2>
    </section>
    <section>
      <h4>Computer Points:</h4>
      <h2>{{ scoreboard.bot_score }}</h2>
    </section>
  </div>
</template>

<script>
export default {
  name: "score-board",
  computed: {
    scoreboard() {
      return this.$store.state["scoreboard"];
    },
  },
};
</script>

<style scoped>
#scoreboard {
  display: grid;
  grid-auto-flow: column;
  column-gap: 20px;
  place-items: center;
}

section{
  display: grid;
  grid-auto-flow: column;
  column-gap: 10px;
  place-items: center;
  /* padding: 10px 20px; */
}
</style>
