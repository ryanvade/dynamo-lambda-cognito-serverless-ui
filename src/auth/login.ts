import { PoolData } from "./types";
import { Auth } from "aws-amplify";
import { User } from "@/profile/types";

export default class LoginService {

  constructor() {
  }

  async authenticate(username: string, password: string) {
    const response = await Auth.signIn(username, password);
    return response;
  }

  save(user: User) {

  }
}
