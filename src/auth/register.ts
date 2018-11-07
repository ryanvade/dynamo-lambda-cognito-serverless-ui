import { PoolData } from "./types";
import { Auth } from "aws-amplify";
import { User } from "@/profile/types";

export default class RegisterService {
  signUp(username: string, password: string, email: string) {
    return Auth.signUp(username, password, email);
  }
}
