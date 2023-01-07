<template>
  <nav>
    <div class="nav-links-div">
      <router-link to="/"><img src="@/assets/icon.png" class="nav-logo"></router-link>
      <router-link to="/" class="nav-title"><span>Art by </span><br/>Anders & Shaira</router-link>
      <router-link to="/art">Art</router-link>
      <router-link to="/commisions">Commisions</router-link>
      <router-link to="/about">About us</router-link>
      <router-link to="/contact">Contact</router-link>
      <div class="nav-login">
        <router-link to="/login" v-if="!isLoggedIn">Log in</router-link>
        <router-link to="/" v-else @click="logout()">{{ user }}</router-link>
      </div>
      
    </div> 
  </nav>
  <div class="page-view">
    <router-view/>
  </div>
</template>

<script>
import { authService } from './services/directus.service';
import { onBeforeMount } from 'vue';
export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false,
      user: {
        email: '',
        first_name: '',
        last_name: '',
        avatar: ''
      }
    }
  },
  methods: {
    async checkIfLoggedIn() {
      var auth_token = localStorage.getItem('auth_token');
      if (auth_token) {
        this.isLoggedIn = true;
        this.checkCurrentUser();
      }
      else {
        this.isLoggedIn = false;
      }
    },
    async checkCurrentUser() {
      this.user = await authService.currentUser();
    },
    setUser(email, first_name, last_name, avatar) {
      this.user.email = email;
      this.user.first_name = first_name;
      this.user.last_name = last_name;
      this.user.avatar = avatar;
      this.isLoggedIn = true;
      console.log(this.user);
    },
    async logout() {
      var auth_token = localStorage.getItem('auth_token');
      await authService.logout(auth_token);
      this.isLoggedIn = false;
      this.user = {
        email: '',
        first_name: '',
        last_name: '',
        avatar: ''
      }
    }
  },
  setup(){
    const checkIfLoggedIn = async () => {
      var auth_token = localStorage.getItem('auth_token');
      if (auth_token) {
        this.isLoggedIn = true;
        checkCurrentUser();
      }
      else {
        this.isLoggedIn = false;
      }};
    
    const checkCurrentUser = async () => {
      this.user = await authService.currentUser();
    };
    /*
    const logout = async () => {
      await authService.logout();
      this.isLoggedIn = false;
      this.user = {
        email: '',
        first_name: '',
        last_name: '',
        avatar: ''
      }
    };
      */
    onBeforeMount(() => {
      checkIfLoggedIn();
    });
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

* {

  font-family: 'Rubik', sans-serif;
  font-weight: 300;
}


body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
}

.page-view {
  flex: 1;
  min-height: 100vh;
}

nav {
  padding: 30px;
  padding-top: 5em;
  background-color: #f5f5f5;
  width: 275px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}

nav a {
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-family: 'Rubik', sans-serif;
  text-decoration: none;
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease-in-out;

}

nav a:not(.router-link-exact-active) {
  background-image: linear-gradient(
    to right,
    #b952ac,
    #b952ac 50%,
    #2c3e50 50%
  );
}

nav a.router-link-exact-active {
  background-image: linear-gradient(
    to right,
    #b952ac,
    #b952ac 50%,
    #b952ac 50%
  );
}

nav a:hover {

 background-position: 0;
}

nav span {
  font-size: 1.25rem;
}
.nav-logo {
  width: 100px;
  height: auto;
}
.nav-links-div {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 5em;
}

.nav-title {
  margin-bottom: 2.5em;
}

.nav-login {
  margin-top: 5em;
}
</style>
