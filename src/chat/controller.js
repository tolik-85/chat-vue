

function onEnterButtonClickHandler(e) {
  if ((e instanceof PointerEvent) || (e.key === 'Enter')) {

    const elUserName = document.querySelector("#input_nickname")
    currentUserName = elUserName.value

    if (!isUserOnline(currentUserName) && massCensoredText(currentUserName) && tagFilter(currentUserName)) {
      renderNicknameList(currentUserName)
      renderChatFlow(currentUserName, "system")
    }
    renderLoginInput()
    const elCheckbox = document.querySelector('#chk_sm')
    elCheckbox.checked = true
  }
}



function onPingClickUserNameHandler(e) {
  const pingUserName = e.target.innerHTML
  if (!(pingUserName === currentUserName)) {
    const msg = concatPingNickName(pingUserName, currentMessage)
    renderInputMessage(msg)
  }
}

function onSendMessagebuttonHandler(e) {
  const elMessageInput = document.querySelector('#input_msg')

  if ((e instanceof PointerEvent) || (e.key === 'Enter')) {
    let currentMessage
    currentMessage = elMessageInput.value
    currentMessage = massCensoredText(currentMessage)
    currentMessage = tagFilter(currentMessage)
    currentMessage = spamFilter(currentMessage)
    if (currentMessage && tagsFilter(currentMessage)) {
      renderChatFlow(currentUserName, 'user', currentMessage)
    }
    renderInputUserMsg()
  }
}