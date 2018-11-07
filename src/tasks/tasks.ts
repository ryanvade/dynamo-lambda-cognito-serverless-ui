import { API } from "aws-amplify";
import Task from "./Task";

export default class TaskRepository {
  endpoint: string;
  path: string;

  constructor() {
    this.endpoint = "tasks";
    this.path = "/tasks";
  }

  get(id?: string) {
    let headers = {};
    if (id) {
      headers = {
        queryStringParameters: {
          id: id
        }
      };
    }
    return API.get(this.endpoint, this.path, headers);
  }

  create(task: Task) {
    return API.post(this.endpoint, this.path, {
      body: {
        name: task.name,
        description: task.description,
        userId: task.userId,
      },
      headers: {}
    });
  }

  delete(task: Task) {
    return API.del(this.endpoint, this.path + "?id=" + task.id, {});
  }

  update(task: Task) {

  }
}
