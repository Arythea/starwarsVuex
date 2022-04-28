<template>
  <div class="register">
      <h1>Register</h1>
      <form @submit.prevent="register">
          <input type="email" placeholder="e-mail" v-model="mail" required>
          <input type="password" placeholder="password" v-model="pass" required>
          <input type="submit">
      </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  data() {
      return {
          mail: '',
          pass: '',
          arrayUsers: []
      }
  },
  methods: {
      register() {
        let found = this.arrayUsers.find( user => user.mail == this.mail);
        if (!found) {
            this.arrayUsers.push({mail: this.mail, pass: btoa(this.pass)});
            this.mail = '';
            this.pass = '';
            console.log("User register successful.");
        } else {
            console.log("This user already exists.");
        }
      }
  },
  watch: {
    arrayUsers: {
      deep: true,
      handler() {
          localStorage.setItem('arrayUsers',JSON.stringify(this.arrayUsers));
      }
    }
  },
  mounted(){
      if(localStorage.getItem('arrayUsers')){
        this.arrayUsers = JSON.parse(localStorage.getItem('arrayUsers'));
      }
  }
}
</script>

<style scoped>
    .register {
        text-align: center;
    }
    input {
        display: block;
        margin: 10px auto;
        padding: 5px;
        border-radius: 3px;
    }
</style>