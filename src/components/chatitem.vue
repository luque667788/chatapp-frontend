<template>
  <div
    class="flex items-center px-1 cursor-pointer"
    v-bind:class="{
      'bg-gray-200': isactive,
      'bg-white  hover:bg-gray-100': !isactive,
    }"
  >
    <div>
      <img
        class="h-12 w-12 rounded-full"
        src="data:image/png;base64,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"
      />
    </div>
    <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
      <div class="flex items-bottom justify-between">
        <p class="text-grey-darkest">{{ user.username }}</p>
        <p
          class="text-xxs md:text-sm text-grey-darkest"
          v-if="user.messages.length > 0"
        >
          {{ user.messages[user.messages.length - 1].time }}
        </p>
      </div>
      <p class="text-grey-dark mt-1 text-sm" v-if="user.messages.length > 0">
        {{ user.messages[user.messages.length - 1].content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatItem",
  props: ["user", "isactive"],
};
</script>
