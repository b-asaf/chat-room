<script setup>
import Message from "./message.vue";
import { socket } from "../socket";
import { messageStore } from "../stores/message-store.ts";

socket.on("message", (data) => {
  messageStore.updateMessages(data);
});
</script>

<template>
  <div class="flex flex-col h-screen overflow-auto">
    <div class="flex-grow bg-slate-200 w-full rounded-xl justify-start mx-auto">
      <Message
        v-for="message in messageStore.messages"
        :username="message.username"
        :content="message.content"
        :createAt="message.createAt"
      />
    </div>
  </div>
</template>
