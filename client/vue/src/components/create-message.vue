<script setup>
import { ref } from "vue";
import { socket } from "../socket";

const message = ref("");

const createMessage = () => {
  if (message.value) {
    socket.emit("message", message.value);
    message.value = "";
  }
};
</script>

<template>
  <form @submit.prevent="createMessage" class="flex justify-center mt-4 gap-2">
    <input
      type="text"
      class="focus:outline-none"
      placeholder="Enter message"
      v-model="message"
    />
    <button
      type="submit"
      class="rounded-md p-2 bg-blue-500 hover:bg-blue-600 transition-colors"
    >
      Submit
    </button>
  </form>
</template>
