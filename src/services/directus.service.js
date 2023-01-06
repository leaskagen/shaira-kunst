import { Directus } from "@directus/sdk";

export const directus = new Directus("https://fj011vwx.directus.app", {
  auth: {
    //refresh_token: "",
    mode: "cookie",
  },
});

export const authService = {
    // Login
    async login(email, password) {
      return await directus.auth.login({ email, password }).then((response) => {
        directus.auth.refresh_token = response.data.refresh_token;
      });
    },
    // Log out current user
    async logout() {
      return await directus.auth.logout();
    },
    // Get current user info
    async currentUser() {
      return await directus.users.me.read({
        fields: ["email", "first_name", "last_name", "id", "avatar"],
      });
    },
  };