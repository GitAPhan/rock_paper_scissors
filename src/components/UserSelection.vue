<template>
  <div>
    <!-- clicking any button will call on the animate selection -->
    <button @click="animate_selection">ROCK</button>
    <button @click="animate_selection">PAPER</button>
    <button @click="animate_selection">SCISSORS</button>
  </div>
</template>

<script>
export default {
  name: "user-selection",
  methods: {
    bot_selection() {
      // math to determine computer random choice
      var bot_choice = this.choices[Math.floor(Math.random() * 3)];
      return bot_choice;
    },
    user_selection(selection) {
      // conditional to determine what the user chosen and selecting from the stored data
      if (selection.target.innerText === "ROCK") {
        var user_choice = this.choices[0];
      } else if (selection.target.innerText === "PAPER") {
        user_choice = this.choices[1];
      } else if (selection.target.innerText === "SCISSORS") {
        user_choice = this.choices[2];
      }
      return user_choice;
    },
    game_selection(selection) {
      // this will assign a random selection to the bot_choice variable
      var bot_choice = this.bot_selection();

      // this will assign the user_choice variable the users selection
      var user_choice = this.user_selection(selection);

      // game rules to determine who wins
      //   uses the win variable to compare to the users choice to see if user wins round
      if (user_choice.value === bot_choice.win) {
        var usr_score = this.current_scoreboard.usr_score + 1;
        var tie_score = this.current_scoreboard.tie_score;
        var bot_score = this.current_scoreboard.bot_score;
        // both options the same = tie
      } else if (user_choice === bot_choice) {
        usr_score = this.current_scoreboard.usr_score;
        tie_score = this.current_scoreboard.tie_score + 1;
        bot_score = this.current_scoreboard.bot_score;
        // catch for user loss
      } else {
        usr_score = this.current_scoreboard.usr_score;
        tie_score = this.current_scoreboard.tie_score;
        bot_score = this.current_scoreboard.bot_score + 1;
      }
      // object to update scoreboard
      var scoreboard = {
        usr_name: user_choice.name,
        usr_img: user_choice.image_usr,
        usr_score: usr_score,
        bot_name: bot_choice.name,
        bot_img: bot_choice.image_bot,
        bot_score: bot_score,
        tie_score: tie_score,
      };

      // call update function to update scoreboard
      this.$store.commit("update_scoreboard", scoreboard);
    },
    // function to select new random option for bot only
    bot_quick_choice() {
      // call on bot_selection function to assign new choice to bot_choice
      var bot_choice = this.bot_selection();
      //   grabbed selection_animation from store
      var new_choice = this.selection_animation;
      // update only the bot name and img src variables
      new_choice.bot_name = bot_choice.name;
      new_choice.bot_img = bot_choice.image_bot;

      // commit to selection_animation
      this.$store.commit("update_selection_animation", new_choice);
    },
    // this is to animate the first 3 seconds before showing results
    animate_selection(selection) {
        // assign the user_choice variable the users selection
      var user_choice = this.user_selection(selection);
    //   call on bot_selection function to assign new choice to bot_choice
      var bot_choice = this.bot_selection();

      // object to update selection animation
      var new_selection_animation = {
        usr_name: user_choice.name,
        usr_img: user_choice.image_usr,
        bot_name: bot_choice.name,
        bot_img: bot_choice.image_bot,
      };

      // commit to selection_animation
      this.$store.commit("update_selection_animation", new_selection_animation);

    // call on bot_quick_choice multiple times at different timeout values to create a 'choosing' animation
      setTimeout(this.bot_quick_choice, 500);
      setTimeout(this.bot_quick_choice, 750);
      setTimeout(this.bot_quick_choice, 1000);
      setTimeout(this.bot_quick_choice, 1250);
      setTimeout(this.bot_quick_choice, 1500);
      setTimeout(this.bot_quick_choice, 1750);
      setTimeout(this.bot_quick_choice, 2000);
      setTimeout(this.bot_quick_choice, 2250);
      setTimeout(this.bot_quick_choice, 2500);
      setTimeout(this.bot_quick_choice, 2750);

// change everything back to undefined since the battleview window uses this variable to determine what renders
      setTimeout(() => {
        this.$store.commit("update_selection_animation", this.reset_animation);
      }, 3000);

// run the game_selection function, this is the main function that will run after 3 seconds
      setTimeout(this.game_selection.bind(null, selection), 2900);
    },
  },
  data() {
    return {
        // used to update selection_animation after the 3 second animation 
      reset_animation: {
        usr_name: undefined,
        usr_img: undefined,
        bot_name: undefined,
        bot_img: undefined,
      },
      choices: [
        {
          name: "Rock",
          value: "ROCK",
          //   this win variable is compared to user's choice and if they are the same then the user wins the round
          win: "PAPER",
          image_usr: "/img/rock_left.58790c36.png",
          image_bot: "/img/rock_right.94dd9761.png",
        },
        {
          name: "Paper",
          value: "PAPER",
          win: "SCISSORS",
          image_usr: "/img/paper_left.04be5132.png",
          image_bot: "/img/paper_right.e11ff69d.png",
        },
        {
          name: "Scissors",
          value: "SCISSORS",
          win: "ROCK",
          image_usr: "/img/scissors_left.b5589437.png",
          image_bot: "/img/scissors_right.1bf2f8a3.png",
        },
      ],
    };
  },
  computed: {
    current_scoreboard() {
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
  place-items: center;
  grid-auto-flow: column;
  width: 100%;
}

button {
  padding: 10px;
  border-radius: 10px;
}
</style>