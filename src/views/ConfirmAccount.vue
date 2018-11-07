<template>
  <div class="">
    <div class="">
      <p>Register Page</p>
    </div>
    <div class="login">
      <form class="form">
        <!-- Password -->
        <div class="field">
          <label class="label">Verification Code</label>
          <div class="control">
            <input type="password" class="input" v-model="code">
          </div>
        </div>

        <p v-if="invalid" class="help is-danger">Invalid Email or Passsword.</p>

        <!-- Submit Buttons -->
        <div class="control">
          <button class="button is-primary" @click="verify">Submit</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {
    User
  } from "@/profile/types";
  import VerificationService from "@/auth/verify";
  import LoginService from "@/auth/login";

  export default Vue.extend({
    data() {
      return {
        invalid: false,
        code: "",
        email: "",
        password: "",
        service: new VerificationService(),
        loginService: new LoginService(),
      };
    },
    methods: {
      verify() {
        this.service.verifyUser(this.email, this.code).then((resp) => {
          if (resp == "SUCCESS") {
            this.loginService.authenticate(this.email, this.password).then((resp) => {
              const user: User = {
                username: resp.username,
                id: resp.username,
                email: this.email,
                Session: resp.getSignInUserSession()
              };
              console.log(resp);
              this.$store.commit("profile/profileLoaded", user);
              this.$router.push({name: "home"});
            }).catch((error) => {
              console.error(error);
            });
          }
        }).catch((error) => {
          console.error(error);
        });
      },
    },
    computed: {

    },
    created() {
      this.email = this.$route.params.email;
      this.password = this.$route.params.password;
    },
  });
</script>

<style>

</style>
