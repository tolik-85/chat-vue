<script>
export default {
  emits: ['currentUser'],
  data() {
    return {
      currentUser: '',
    }
  },
}
</script>
<template>
  <div class="slide-modal flex f_centered">
    <div class="wrap-enter-form">
      <label for="input_nickname">Ваш никнейм:</label>
      <input
        v-model="currentUser"
        type="text"
        id="input_nickname"
        spellcheck="false"
        autocomplite="off"
        required
      />
      <div @click="$emit('currentUser', currentUser)" class="wrap-enter-button">
        <label for="chk_sm" id="btn_enter">Войти в чат</label>
      </div>
      <div class="user-logged hide">
        <span>Пользователь под таким именем уже вошел</span>
      </div>
    </div>
  </div>
</template>
