import NextAuth, { DefaultSession } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

declare module "next-auth" {
  interface User {
    userName: string;
  }

  interface Session {
    user: User & {
      userName: string;
    };
    token: {
      userName: string;
    };
  }
}
