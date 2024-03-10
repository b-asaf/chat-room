<script setup>
import { ref } from "vue";
import { socket } from "../socket";
import { userStore } from "../stores/user-store.ts";

const username = ref("");

const enterRoom = () => {
  socket.emit("join room", { username: username.value });
  userStore.userName = username.value;
};

let socketState = ref("");
</script>

<template>
  <form
    @submit.prevent="enterRoom"
    class="flex w-full justify-center m-auto gap-1"
  >
    <p>{{ socketState.connected }}</p>
    <input
      type="text"
      v-model="username"
      required
      placeholder="Your name"
      class="max-w-[60%] gap-2 rounded-md w-1/4 px-1 focus:outline-none"
    />
    <button
      type="submit"
      class="rounded-md p-2 bg-blue-500 hover:bg-blue-600 transition-colors"
    >
      Join
    </button>
  </form>
</template>
