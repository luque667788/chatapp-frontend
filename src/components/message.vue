<template>
  <div class="flex mb-2 p-2" v-bind:class="{ 'justify-end': sent }">
    <div
      class="rounded py-2 px-3"
      v-bind:class="{ 'bg-green-300': sent, 'bg-neutral-300': !sent }"
    >
      <p class="text-sm text-purple">{{ msg.user }}</p>
      <p class="text-sm mt-1">{{ msg.content }}</p>
      <p class="text-right text-xs text-grey-dark mt-1">12:45 pm</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "MessageItem",
  props: ["msg", "sent"],
};
</script>
