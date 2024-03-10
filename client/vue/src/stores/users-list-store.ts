import { reactive } from "vue";

type User = {
  name: string;
  id: string;
};

export let usersListStore = reactive({
  userList: [] as User[],

  updateUsersList(updatedUsersList: User[]) {
    this.userList = updatedUsersList;
  },

  isEmpty() {
    return this.userList.length === 0;
  },

  visibleUsersList() {
    return this.userList.map((user) => user.name).join(", ");
  },
});
