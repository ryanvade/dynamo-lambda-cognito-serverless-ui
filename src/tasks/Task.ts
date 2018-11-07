export default class Task {
  id: string;
  name: string;
  description: string;
  userId: string;

  constructor(name: string, description: string, userId: string, id?: string) {
    this.name = name;
    this.description = description;
    this.userId = userId;

    if (id) {
      this.id = id;
    } else {
      this.id = "";
    }
  }
}
