<script>
import EnterForm from './components/EnterForm.vue'
import ChatHeader from './components/ChatHeader.vue'
import ChatFlow from './components/ChatFlow.vue'
import SendMsg from './components/SendMsg.vue'
import UsersList from './components/UsersList.vue'
export default {
  components: { EnterForm, ChatHeader, ChatFlow, SendMsg, UsersList },
  data() {
    return {
      currentUser: '',
      users: [],
    }
  },

  methods: {
    addNewUser(newUser) {
      if (this.users.includes(newUser)) return

      this.users.unshift(newUser)
      this.currentUser = newUser
    },
  },
}
</script>

<template>
  {{ currentUser }}
  <div class="main flex f_centered light">
    <div class="chat">
      <ChatHeader />

      <div class="content flex f_tile">
        <ChatFlow />
        <UsersList />
      </div>
      <SendMsg />
      <input type="checkbox" id="chk_sm" />
      <EnterForm @currentUser="addNewUser($event)" />
    </div>
  </div>
</template>

<style>
#app {
  height: 100%;
}
</style>
