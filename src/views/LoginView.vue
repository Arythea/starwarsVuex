<template>
  <div class="home">
      <h1>Login</h1>
      <form @submit.prevent="login">
          <input type="email" placeholder="e-mail" v-model="mail">
          <input type="password" placeholder="password" v-model="pass">
          <input type="submit">
      </form>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
      return {
          mail: '',
          pass: ''
      }
  },
  methods: {
      login() {
        let arrayUsers = JSON.parse(localStorage.getItem('arrayUsers'));
        let found = arrayUsers.find( user => user.mail == this.mail && user.pass == btoa(this.pass));
        if (found) {
            console.log('Usuari loguejat correctament');
        } else {
            console.log('No es troba l´usuari');
        }
        this.mail = '';
        this.pass = '';
      }
  }
}
</script>
