// we made a class so that the code will become future prove, if somehow we want to change the backend service like rn we are using
// appwrite in future we want to change the service or add self backend this class will help us to do that without making changes all
// over the project we just have to do changes in this file and everthing else will work same cos we will acess the properties like
// this  authService.createAccount, authService.login etc.

// THIS IS A PRODUCTION LEVEL CODE PRACTICE(creating cleass)

import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf?.appwriteUrl)
      .setProject(conf?.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccouont = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccouont) {
        //call another method
        return this.login(email, password); //this will directly login the user after creating the new account
      } else {
        return userAccouont;
      }
    } catch (error) {
      console.log("Appwrite servie :: createAccount :: error", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite servie :: login :: error", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite servie :: getCurrentUser :: error", error);
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite servie :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
