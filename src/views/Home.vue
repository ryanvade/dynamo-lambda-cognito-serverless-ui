<template>
  <div>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          <img alt="Vue logo" src="../assets/logo.png">
        </h1>
        <h2 class="subtitle">
          Weleome!
        </h2>
      </div>
    </div>
  </section>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
