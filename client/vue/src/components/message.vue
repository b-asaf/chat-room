<script setup>
import { format } from "date-fns";

defineProps({
  username: String,
  content: String,
  createAt: Number,
});

const ADMIN = "Admin";
// will be replaced by user from socket
const currentUsername = "Asaf";
</script>

<template>
  <div
    :class="{
      'border rounded-md m-4 bg-slate-300 overflow-hidden flex-shrink': true,
      'self-start w-[60%]': username !== ADMIN && username === currentUsername,
      'self-end w-[60%]': username !== ADMIN && username !== currentUsername,
    }"
  >
    <div
      v-if="username !== ADMIN"
      :class="{
        'flex justify-between p-1 rounded-top-md': true,
        'bg-blue-600': username === currentUsername,
        'bg-blue-600': username !== currentUsername,
      }"
    >
      <p class="justify-center items-center capitalize font-semibold">
        {{ username }}
      </p>
      <p className="justify-center items-center text-s">
        {{ format(createAt, "H:mm:ss") }}
      </p>
    </div>
    <div
      :class="{
        'mt-1 px-1 py-2': true,
        'flex justify-center': username === ADMIN,
      }"
    >
      {{ content }}
    </div>
  </div>
</template>
