<template>
  <div>
    <!-- shown only if login_status is true -->
    <article id="battle_window" v-if="login_status == true">
      <score-board></score-board>
      <battle-view></battle-view>
      <user-selection></user-selection>
    </article>
    <!-- redirect message for when user is not logged in -->
    <!-- shown only if login_status is not true -->
    <h1 v-else>You are not logged in. You will now be redirected</h1>
  </div>
</template>

<script>
import ScoreBoard from "@/components/ScoreBoard.vue";
import UserSelection from "@/components/UserSelection.vue";
import BattleView from "@/components/BattleView.vue";
export default {
  name: "game-page",
  data() {
    return {
      // status of login is stored here
      login_status: false,
    };
  },
  methods: {
    // go to login page function
    go_to_login() {
      this.$router.push({
        name: "LoginPage",
      });
    },
    // check to see if there is a cookie
    login_check() {
      if (this.$cookies.get("login_token") != undefined) {
        // if there is a cookie, login_status will be updated to true
        this.login_status = true;
      } else {
        // if cookie is not present. go_to_login function will call after 3000ms
        setTimeout(this.go_to_login, 3000);
      }
    },
  },
  mounted() {
    this.login_check();
  },
  components: {
    ScoreBoard,
    UserSelection,
    BattleView,
  },
};
</script>

<style scoped>
#battle_window {
  display: grid;
  place-items: center;
  width: 400px;
  height: 500px;
  border: black 2px solid;
  border-radius: 25px;
}

</style>