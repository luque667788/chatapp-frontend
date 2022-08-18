<template>
  <div class="about">
    <h1>{{ this.userStore.username }}</h1>
    <div class="bg-grey-lighter px-4 py-4 flex items-center justify-between">
      <input
        type="text"
        class="border rounded px-4 py-4"
        placeholder="USERNAME"
        v-model="this.username"
        v-on:keyup.enter="updateUsername"
      />
      <input
        type="text"
        class="border rounded px-4 py-4"
        placeholder="PASSWORD"
        v-model="this.password"
        v-on:keyup.enter="updatePassword"
      />
    </div>
    <div class="flex items-center px-8 py-8" v-on:click="updateALL">
      <div class="w-full border flex justify-center bg-slate-600 rounded-md">
        <p class="p-2">Login/SignUp</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  name: "LoginView",
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapStores(useUserStore),
  },
  components: {
    //"chat-item": ChatItem,
  },
  methods: {
    updateALL: function () {
      this.userStore.username = this.username;
      this.username = "";
      this.userStore.password = this.password;
      this.password = "";
      this.$router.push("/");
    },
  },
  mounted() {
    document.title = "Login Page";
  },
};
</script>
