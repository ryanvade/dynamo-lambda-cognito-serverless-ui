<template>
  <div class="">
    <div class="">
      <p>Register Page</p>
    </div>
    <div class="login">
      <form class="form">
        <!-- Username -->
        <!-- <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input type="text" class="input" placeholder="username" v-model="username">
            <span class="icon is-small is-left">
              <font-awesome-icon icon="user-circle" />
            </span>
          </div>
        </div> -->

        <!-- Email -->
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

        <!-- Password -->
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input type="password" class="input" v-model="password">
          </div>
        </div>

        <!-- Confirm Password -->
        <div class="field">
          <label class="label">Confirm Password</label>
          <div class="control">
            <input type="password" class="input" v-model="confirmpassword">
          </div>
        </div>
        <p v-if="invalid" class="help is-danger">Invalid Email or Passsword.</p>

        <!-- Submit Buttons -->
        <div class="control">
          <button class="button is-primary" @click="register">Submit</button>
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
  import RegisterService from "@/auth/register";


  export default Vue.extend({
    data() {
      return {
        invalid: false,
        emailMissing: true,
        passwordMissing: true,
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        service: new RegisterService(),
        code: "",
        verify: false,
      };
    },
    methods: {
      register() {
        this.service.signUp(this.email, this.password, this.email).then((resp) => {
          console.log(resp);
          this.$router.push({name: "verify", params: {email: this.email, password: this.password}});
        }).catch((error) => {
          console.error(error);
        });
      },
    },
    computed: {

    },
  });
</script>

<style>

</style>
