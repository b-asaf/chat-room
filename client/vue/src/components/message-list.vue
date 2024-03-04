<script setup>
import Message from "./message.vue";
let messages = [
  {
    username: "Admin",
    content: "User X joined the room",
    createAt: Date.now(),
  },
  {
    username: "Asaf",
    content: "New message",
    createAt: Date.now(),
  },
  {
    username: "Asaf1",
    content: "New message 1",
    createAt: Date.now() + 10000,
  },
];
</script>

<template>
  <div
    class="flex flex-col bg-slate-200 w-full rounded-xl flex-grow overflow-auto justify-start mx-auto my-4"
  >
    <Message
      v-for="message in messages"
      :username="message.username"
      :content="message.content"
      :createAt="message.createAt"
    />
  </div>
</template>
