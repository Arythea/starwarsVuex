<template>
  <div class="register">
      <h1>Register</h1>
      <form @submit.prevent="register">
          <input type="email" placeholder="e-mail" v-model="mail" required>
          <input type="password" placeholder="password" v-model="pass" required>
          <input type="submit">
          <div :class="{messageBox, messageHide}"><span id="message" :class="{msgError, msgSuccess}">{{ msgText }}</span></div>
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
          arrayUsers: [],
          messageBox: true,
          messageHide: true,
          msgError: false,
          msgSuccess: false,
          msgText: ''
      }
  },
  methods: {
      register() {
        let found = this.arrayUsers.find( user => user.mail == this.mail);
        if (!found) {
            this.arrayUsers.push({mail: this.mail, pass: btoa(this.pass)});
            this.mail = '';
            this.pass = '';
            this.setMessage(false, true, "User register successful.");
        } else {
            this.setMessage(true, false, "This user already exists.");
        }
      },
      setMessage(msgErrorValue, msgSuccessValue, msgString) {
        this.msgError = msgErrorValue;
        this.msgSuccess = msgSuccessValue;
        this.msgText = msgString;
        this.messageHide = false;
        console.log(msgString);
        setTimeout(() => this.messageHide = true, 2000);
      }
  },
  watch: {
    arrayUsers: {
      deep: true,
      handler() {
          localStorage.setItem('arrayUsers',    JSON.stringify(this.arrayUsers));
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
    .messageBox {
        font-weight: bold;
        transition: 1s;
        opacity: 1;
    }
    .messageHide {
        opacity: 0;
    }
    .msgError {
        color: red;
    }
    .msgSuccess {
        color: rgb(97, 179, 16);
    }
    .hide {
        opacity: 0;
    }
    
</style>