<template>
  <div class="">
    <div class="">
      <p>Login Page</p>
    </div>
    <div class="login">
      <form class="form">
        <!-- Email Field -->
        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input type="email" class="input" placeholder="example@foo.foo" v-model="email">
            <span class="icon is-small is-left">
              <font-awesome-icon icon="envelope" />
            </span>
            <span v-if="!emailMissing" class="icon is-small is-right">
              <!-- <i class="fas fas-check"></i> -->
              <font-awesome-icon icon="check" />
            </span>
          </div>
        </div>
        <!-- Password Field -->
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input type="password" class="input" v-model="password">
          </div>
        </div>
        <p v-if="invalid" class="help is-danger">Invalid Email or Passsword.</p>

        <!-- Submit Buttons -->
        <div class="control">
          <button class="button is-primary" @click="login">Submit</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "@/profile/types";
import LoginService from "@/auth/login";

export default Vue.extend({
  data() {
    return {
      invalid: false,
      emailMissing: true,
      passwordMissing: true,
      email: "",
      password: "",
      service: new LoginService(),
    };
  },
  methods: {
    login() {
      this.invalid = false;
      this.service.authenticate(this.email, this.password).then((resp) => {
        console.log(resp);
        const userSession = resp.getSignInUserSession();
        const user: User = {
          username: resp.username,
          id: resp.username,
          email: this.email,
          Session: userSession
        };
        this.$store.commit("profile/profileLoaded", user);
        this.$router.push({name: "home"});
      }).catch((error) => {
        console.error(error);
        this.invalid = true;
      });
    }
  },
  computed: {

  },
});
</script>

<style>

</style>
