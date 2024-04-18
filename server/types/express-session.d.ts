import { Session } from "express-session";
import { User } from "../models/user/user"; // Adjust the path as needed

declare module "express-session" {
  interface Session {
    user: User;
    // Add other custom session properties as needed
  }
}
