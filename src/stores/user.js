import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore("user", {
  // other options...
  state: () => {
    return {
      username: "anonimous",
    };
  },
  getters: {
    getUsername: (state) => state.username,
  },
  actions: {
    setUsername(val = "Not defined") {
      this.username = val;
    },

  },
});
