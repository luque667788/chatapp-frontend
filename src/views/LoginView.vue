<template>
  <div class="about">
    <h1>{{ "Type in your Credentials, if the acount doesnt exist a new acount will be created" }}</h1>
    <div class="bg-grey-lighter px-4 py-4 flex items-center">
      <input
        type="text"
        class="w-2/3 justify-start border rounded px-4 py-4"
        placeholder="Type your username"
        v-model="this.username"
      />
      <div class="px-3">
      <input
        type="text"
        class="w-auto justify-start border rounded px-4 py-4"
        placeholder="Type your password"
        v-model="this.password"
      />
    </div>
    </div>
    <div class="px-4">
    <input
      type="text"
      hidden="true"
      class="w-1/2 justify-start border rounded px-4 py-4"
      placeholder="Specify websocket PORT (optional, default is 8080)"
      v-model="this.port"
    />
    </div>
    <div class="px-4 py-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="gotochatview"
      >
        Login
      </button>
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
      port: "",
    };
  },
  computed: {
    ...mapStores(useUserStore),
  },
  components: {
  },
  methods: {
    gotochatview: function () {
      this.userStore.username = this.username.trim();
      this.userStore.password = this.password.trim();
      if (this.port !== "" && /^\d{4}$/.test(this.port)) {
        this.userStore.port = this.port;
        console.log("Changing port to: " + this.port);
      }
      console.log("Going to chat view");
      this.$router.push("/");
    },
  },
  mounted() {
    document.title = "Login Page";
  },
};
</script>
