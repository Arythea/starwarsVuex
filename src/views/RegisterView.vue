<template>
  <div class="register">
      <h1>Register</h1>
      <form @submit.prevent="register">
          <input type="email" placeholder="e-mail" v-model="mail" autocomplete="username" required>
          <input type="password" placeholder="password" v-model="pass" autocomplete="current-password" required>
          <input type="submit" value="REGISTER">
          <div :class="{messageBox, messageHide}">
            <span id="message" :class="{msgError, msgSuccess}">{{ msgText }}</span>
          </div>
          <div v-if="goToLogin" class="login">
            <router-link to="/login">LOG IN</router-link>
          </div>
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
          msgText: '',
          goToLogin: false
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
        setTimeout(() => {
          this.messageHide = true;
          this.goToLogin = true;
        }, 2000);
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
  display: block;
  margin: 20px auto;
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
  color: rgb(204, 73, 73);;
}
.msgSuccess {
  color: rgb(97, 179, 16);
}
.hide {
    opacity: 0;
}
h1 {
  color: #edd700
}
.login {
  border: 1px solid #333;
  width: 100px;
  margin: 0 auto;
}
</style>