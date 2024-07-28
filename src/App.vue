<template>
  <div>
    <h1 class="text-red-500 text-4xl" v-if="this.userStore.errormsg !== 'nothing'">
      {{ "ERROR from server: " + "(" + this.userStore.errormsg + ")" }}
    </h1>
  </div>
  <router-view />
</template>


<script>
import { mapStores } from "pinia";
import { useUserStore } from "./stores/user";
export default {
  name: "App",
  computed: {
    ...mapStores(useUserStore),
  },
  components: {
  },
  methods: {
  },
};
</script>