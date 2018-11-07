<template>
  <div class="">
    <div class="">
      <h1 class="title">Task Creation Page</h1>
    </div>
    <div class="login">
      <form class="form">

        <!-- Name -->
        <div class="field">
          <label class="label">Name</label>
          <div class="control has-icons-left has-icons-right">
            <input type="text" class="input"  v-model="name">
          </div>
        </div>

        <!-- Description -->
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea class="textarea" v-model="description"></textarea>
          </div>
        </div>

        <!-- Submit Buttons -->
        <div class="control">
          <button class="button is-primary" @click="create">Submit</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Task from "@/tasks/Task";
  import TaskRepository from "@/tasks/tasks";



  export default Vue.extend({
    data() {
      return {
        name: "",
        description: "",
        repository: new TaskRepository(),
      };
    },
    methods: {
      create() {
        if (this.name.length > 1 && this.description.length > 1) {
          const task = new Task(this.name, this.description, this.$store.state.profile.user.id);
          this.repository.create(task).then((resp) => {
            console.log(resp);
            this.$router.push({name: "tasks"});
          }).catch((error) => {
            console.error(error);
          });
        }
      }
    },
    computed: {

    },
  });
</script>

<style>

</style>
