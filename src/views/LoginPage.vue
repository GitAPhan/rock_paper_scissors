<template>
  <div>
    <h1>Would you like to play a game?</h1>
    <!-- form to gather login information -->
    <form action="javascript:void(0)">
      <input type="text" ref="email_input" placeholder="Email" />
      <input type="password" ref="password_input" placeholder="Password" />
      <!-- login_request function to run on click -->
      <input @click="login_request" type="submit"/>
      <!-- system message  will be displayed here -->
      <p id="login_status">{{display_login_message}}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "login-page",
  methods: {
    // function to run only if cookie is present
    login_redirect() {
      // conditional to determine that
      if(this.$cookies.get('login_token') != undefined) {
        // to be redirected to GamePage
        this.$router.push({
          name: 'GamePage',
        })
      }
    },
    // function: grab the values inputted by the user and stores them in an object 
    login_request() {
      var email_input = this.$refs.email_input.value;
      var password_input = this.$refs.password_input.value;
      var payload = {
        email: email_input,
        password: password_input,
      };
      // calls on axios request action
      this.$store.dispatch("login_verification", payload);
      // setTimeout to account for delay when communicating with api 
      setTimeout(this.login_redirect, 3000);
    },
  },
  computed: {
    // grabbing status message from vuex
    display_login_message() {
      return this.$store.state['login_status_message']; 
    }
  },
};
</script>

<style scoped>
div {
  display: grid;
  place-items: center;
  row-gap: 20px;
}
</style>