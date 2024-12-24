import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    users: [
      { username: "your-name", password: "123456" }, // Default user
    ],
    currentUser: null,
  }),
  actions: {
    signIn(username, password) {
      const user = this.users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        this.currentUser = user;
        return true;
      }
      return false;
    },
    signUp(username, password) {
      const userExists = this.users.some((u) => u.username === username);
      if (userExists) {
        return false;
      }
      this.users.push({ username, password });
      return true;
    },
    signOut() {
      this.currentUser = null;
    },
  },
});
