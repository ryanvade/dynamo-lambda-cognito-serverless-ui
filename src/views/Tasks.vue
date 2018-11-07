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
          <router-link :to="{ name: 'create'}" class="button is-primary">Create</router-link>
        </div>
      </div>
    </nav>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>
            <router-link :to="{ name: 'task', query: { id: task.id }, parameters: { id: task.id }}">{{ task.id }}</router-link>
          </td>
          <td>{{ task.name }}</td>
          <td>{{ task.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Task from "@/tasks/Task";
import { Auth } from "aws-amplify";
import TaskRepository from "@/tasks/tasks";


export default Vue.extend({
  created() {
    this.getTasks();
  },
  data() {
    return {
      tasks: new Array<Task>(),
      repo: new TaskRepository()
    };
  },
  methods: {
    getTasks() {
      this.repo.get().then((resp) => {
        for (const task of resp.message) {
          this.tasks.push(new Task(task.name, task.description, task.userId, task.id));
        }
      }).catch((error) => {
        console.error(error);
      });
    },
    async session() {
      return await Auth.currentSession();
    }
  },
  computed: {
  },
});
</script>

<style>

</style>
