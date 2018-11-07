import { PoolData } from "./types";
import { Auth } from "aws-amplify";
import { User } from "@/profile/types";

export default class VerificationService {
  verifyUser(email: string, code: string) {
    return Auth.confirmSignUp(email, code);
  }
}
