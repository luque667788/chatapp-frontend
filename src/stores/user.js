import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore("user", {
  // other options...
  state: () => {
    return {
      username: "Escolha seu Nome e Senha",
      password: "anonimous",
      success: "tring to connect",

    };
  },
  getters: {
  },
  actions: {},
});
