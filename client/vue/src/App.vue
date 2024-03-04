<script setup lang="ts">
import JoinForm from "./components/join-form.vue";
import MessageList from "./components/message-list.vue";
import UserList from "./components/user-list.vue";
import CreateMessage from "./components/create-message.vue";
</script>

<template>
  <div class="flex flex-col p-4 h-screen">
    <JoinForm />
    <MessageList />
    <UserList />
    <CreateMessage />
  </div>
</template>
