<template>
  <div class="">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <h1 class="title">Tasks</h1>
        </div>
      </div>

      <div class="level-right">
        <div class="level-item">
          <button type="button" name="button" class="button is-danger" @click="deleteTask">Delete</button>
        </div>
      </div>
    </nav>

    <div class="box" v-if="task">
      <div class="">
        {{  task.id }}
      </div>
      <div class="">
        {{ task.name }}
      </div>
      <div class="">
        {{ task.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Task from "@/tasks/Task";
import { Auth } from "aws-amplify";
import TaskRepository from "@/tasks/tasks";


export default Vue.extend({
  created() {
    console.log("Task");
    const id = this.$route.query.id;
    if (!id) {
      this.$router.push({name: "tasks"});
    }
    this.getTask(id);
  },
  data() {
    return {
      task: undefined,
      repository: new TaskRepository(),
    };
  },
  methods: {
    getTask(id: string) {
      this.repository.get(id).then((resp) => {
        console.log(resp);
        this.task = resp.message[0];
      }).catch((error) => {
        console.error(error);
      });
    },
    deleteTask() {
      if (this.task != undefined) {
        const task = (this.task as unknown) as Task;
        this.repository.delete(task).then((resp) => {
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
