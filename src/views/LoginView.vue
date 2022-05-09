<template>
  <div class="about">
    <h1>{{ this.userStore.username }}</h1>
    <div class="bg-grey-lighter px-4 py-4 flex items-center">
      <input
        type="text"
        class="w-full justify-start border rounded px-4 py-4"
        placeholder="Insira sua mensagem"
        v-model="this.username"
        v-on:keyup.enter="updateUsername"
      />
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
    };
  },
  computed: {
    ...mapStores(useUserStore),
  },
  components: {
    //"chat-item": ChatItem,
  },
  methods: {
    updateUsername: function () {
      this.userStore.username = this.username;
      this.username = "";
      this.$router.push("/");
    },
  },
  mounted() {
    document.title = "Login Page";
  },
};
</script>
