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
      userName: '',
    }
  },
}
</script>

<template>
  {{ userName }}
  <div class="main flex f_centered light">
    <div class="chat">
      <ChatHeader />

      <div class="content flex f_tile">
        <ChatFlow />
        <UsersList />
      </div>
      <SendMsg />
      <input type="checkbox" id="chk_sm" />
      <EnterForm @userName="userName = $event" />
    </div>
  </div>
</template>

<style>
#app {
  height: 100%;
}
</style>
