<script setup>
import { socket } from "../socket";
import { usersListStore } from "../stores/users-list-store.ts";

socket.on("user list", (data) => {
  usersListStore.updateUsersList(Object.values(data.users));
});
</script>

<template>
  <div class="flex flex-col w-full min-h-10 px-3 py-1 bg-slate-400 rounded-md">
    <h3>Users List</h3>
    <p v-if="usersListStore.isEmpty()">The chat-room is empty!</p>
    <p v-if="!usersListStore.isEmpty()" class="capitalize text-sm">
      {{ usersListStore.visibleUsersList() }}
    </p>
  </div>
</template>
