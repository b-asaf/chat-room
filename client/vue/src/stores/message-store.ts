import { reactive } from "vue";

type MessageType = {
  username: string;
  content: string;
  createAt: number;
};

export let messageStore = reactive({
  messages: [] as MessageType[],

  updateMessages(data: MessageType) {
    console.log(data);
    this.messages = [...this.messages, data];
  },
});
