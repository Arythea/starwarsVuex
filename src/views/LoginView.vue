<template>
  <div v-if="!loggedin">
      <h1>Login</h1>
      <form @submit.prevent="login">
          <input type="email" placeholder="e-mail" v-model="mail" autocomplete="username">
          <input type="password" placeholder="password" v-model="pass" autocomplete="current-password">
          <input type="submit" value="LOG IN">
      </form>
      <div :class="{messageBox, messageHide}">
        <span id="message">User and/or password not found</span>
      </div>
  </div>
  <div v-else>
    <h1>You are already logged in</h1>
    <img src="@/assets/user.png">
    <div @click="logout" class="logout">
      LOG OUT
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: 'LoginView',
  data() {
      return {
          mail: '',
          pass: '',
          messageBox: true,
          messageHide: true,
      }
  },
  computed: {
    ...mapGetters({loggedin: 'getLoggedin'})
  },
  methods: {
    ...mapActions(['logout']),
    login() {
      let arrayUsers = JSON.parse(localStorage.getItem('arrayUsers'));
      let found = arrayUsers.find( user => user.mail == this.mail && user.pass == btoa(this.pass));
      if (found) {
        console.log('Usuari loguejat correctament');
        this.$store.commit('setLoggedin', true);
        this.mail = '';
        this.pass = '';
      } else {
        console.log("User and/or password not found");
        this.messageHide = false;
        setTimeout(() => {
          this.messageHide = true;
        }, 2000);
      }
    }
  }
}
</script>

<style scoped>
h1 {
  color: #edd700
}
input {
  display: block;
  margin: 10px auto;
  padding: 5px;
  border-radius: 3px;
  display: block;
  margin: 20px auto;
}
.logout {
  border: 1px solid #333;
  width: 100px;
  margin: 0 auto;
  cursor: pointer;
  margin-top: 10px;
}
#message {
  color: rgb(204, 73, 73);;
}
.messageBox {
  font-weight: bold;
  transition: 1s;
  opacity: 1;
}
.messageHide {
  opacity: 0;
}
</style>