<template>
  <div>
    <!-- to only be visible when the selection_animation variable from the store has value -->
    <article
      class="animation_window"
      v-if="selection_animation.usr_name != undefined"
    >
      <img
        :src="selection_animation.usr_img"
        :alt="
          'animated hand in the shape of a ' +
          selection_animation.usr_name.toLowerCase()
        "
      />
    </article>
    <article
      class="animation_window"
      v-if="selection_animation.usr_name != undefined"
    >
      <img
        :src="selection_animation.bot_img"
        :alt="
          'animated hand in the shape of a ' +
          selection_animation.bot_name.toLowerCase()
        "
      />
    </article>

    <!-- to display only if scoreboard variable from the store has a value and selection_animation variable is undefined -->
    <article
      v-if="
        scoreboard.usr_img != undefined &&
        selection_animation.usr_name == undefined
      "
    >
    <!-- all images will have custom alt tags to represent the image displayed -->
      <img
        :src="scoreboard.usr_img"
        :alt="
          'animated hand in the shape of a ' + scoreboard.usr_name.toLowerCase()
        "
      />
      <h2>{{ scoreboard.usr_name }}</h2>
    </article>
    <article
      v-if="
        scoreboard.usr_img != undefined &&
        selection_animation.usr_name == undefined
      "
    >
      <img
        :src="scoreboard.bot_img"
        :alt="
          'animated hand in the shape of a ' + scoreboard.bot_name.toLowerCase()
        "
      />
      <h2>{{ scoreboard.bot_name }}</h2>
    </article>
    <!-- This tag will ONLY be visible when both scoreboard and selection_animation is undefined -->
    <h1
      v-if="
        scoreboard.usr_img == undefined &&
        selection_animation.usr_name == undefined
      "
    >
      ARE YOU READY TO PLAY?
    </h1>
  </div>
</template>

<script>
export default {
  name: "battle-view",
  computed: {
    scoreboard() {
      return this.$store.state["scoreboard"];
    },
    selection_animation() {
      return this.$store.state["selection_animation"];
    },
  },
};
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  height: 165px;
}

article {
  background-image: url(/img/circle_shadow.06427b23.png);
  background-position: bottom 25px right;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
}

.animation_window > img {
  margin-bottom: 36px;
}

h1 {
  text-align: center;
  grid-column: span 2;
}

h2 {
  text-align: center;
  padding-top: 10px;
}

img {
  width: 100%;
  height: 120px;
}
</style>