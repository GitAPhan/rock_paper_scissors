<template>
  <div>
    <button @click="game_selection">ROCK</button>
    <button @click="game_selection">PAPER</button>
    <button @click="game_selection">SCISSORS</button>
  </div>
</template>

<script>
export default {
  name: "user-selection",
  methods: {
    game_selection(selection) {
      // math to determine computer random choice
      var bot_choice = this.choices[Math.floor(Math.random() * 3)];

      // conditional to determine what the user chosen
      if (selection.target.innerText === "ROCK") {
        var user_choice = this.choices[0];
      } else if (selection.target.innerText === "PAPER") {
        user_choice = this.choices[1];
      } else if (selection.target.innerText === "SCISSORS") {
        user_choice = this.choices[2];
      }

    // game rules to determine who wins
    if(user_choice === bot_choice) {
        var usr_score = this.current_scoreboard.usr_score;
        var bot_score = this.current_scoreboard.bot_score;
    } else if(user_choice.value === bot_choice.win) {
        usr_score = this.current_scoreboard.usr_score+1;
        bot_score = this.current_scoreboard.bot_score;
    } else {
        usr_score = this.current_scoreboard.usr_score;
        bot_score = this.current_scoreboard.bot_score+1;
    }
    // object to update scoreboard
      var scoreboard = {
        usr_name: user_choice.name,
        usr_img: user_choice.image_usr,
        usr_score: usr_score,
        bot_name: bot_choice.name,
        bot_img: bot_choice.image_bot,
        bot_score: bot_score,
      };

      // call update function to update scoreboard
      this.$store.commit('update_scoreboard', scoreboard);
    },
  },
  data() {
    return {
      choices: [
        {
          name: "Rock",
          value: "ROCK",
          win: "SCISSORS",
          image_usr: "@/assets/rock_left.png",
          image_bot: "@/assets/rock_right.png",
        },
        {
          name: "Paper",
          value: "PAPER",
          win: "ROCK",
          image_usr: "@/assets/paper_left.png",
          image_bot: "@/assets/paper_right.png",
        },
        {
          name: "Scissors",
          value: "SCISSORS",
          win: "PAPER",
          image_usr: "@/assets/scissors_left.png",
          image_bot: "@/assets/scissors_right.png",
        },
      ],
    };
  },
  computed: {
    current_scoreboard() {
      return this.$store.state["scoreboard"];
    },
  },
};
</script>

<style scoped>
</style>