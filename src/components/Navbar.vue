<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <!-- Branding -->
    <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img alt="Vue logo" src="../assets/logo.png" width="50" height="25">
        </router-link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <!-- Menu -->
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/about" class="navbar-item">About</router-link>
      </div>
      <div class="navbar-end">
        <router-link to="/login" class="button" v-if="!authenticated">Login</router-link>
        <router-link to="/register" class="button" v-if="!authenticated">Register</router-link>
        <div class="navbar-item has-dropdown is-hoverable" v-if="authenticated">
          <a href="#" class="navbar-item">
            <font-awesome-icon icon="user-circle" />
            <p style="margin-left: 10px;">{{ this.$store.state.profile.user.email }}</p>
          </a>

          <div class="navbar-dropdown">
            <!-- <a href="#" class="navbar-item">Settings</a> -->
            <router-link :to="{ name: 'tasks'}" class="navbar-item">Tasks</router-link>
            <a href="#" class="navbar-item" v-if="authenticated" @click="logout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import Vue from "vue";
import { Auth } from "aws-amplify";
import Component from "vue-class-component";

@Component({
  computed: {
    authenticated() {
      return this.$store.state.profile.user != undefined;
    }
  }
})
export default class Navbar extends Vue {
  // Stuff and Things
  logout() {
    Auth.signOut().then((resp) => {
      console.log(resp);
      this.$store.commit("profile/profileUnLoaded");
      this.$router.push({name: "home"});
    }).catch((error) => {
      console.error(error);
    });
  }
}
</script>
<style lang="scss" scoped>
</style>
