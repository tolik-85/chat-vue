function generateSystemMsg(userName) {
  const div = document.createElement("div")
  const i = document.createElement("i")
  const u = document.createElement("u")
  u.innerHTML = userName
  div.appendChild(i)
  i.innerHTML = `{ system } `
  i.appendChild(u)
  i.innerHTML += " вошел(ла) в чат."
  return div
}



function renderChatFlow(userName, msgType, currentMsg) {
  const chatFlow = document.querySelector('.chat-flow')
  let elMessage
  if (msgType === 'system') {
    elMessage = generateSystemMsg(userName)
  }
  if (msgType === 'user') {
    elMessage = generateUserMsg(userName, currentMsg)
  }

  chatFlow.appendChild(elMessage)
}

function generateUserMsg(userName, currentMsg) {
  const div = document.createElement("div")
  const span = document.createElement("span")
  span.classList.add("msg-line")
  const b = document.createElement("b")
  b.innerHTML = `[${userName}]: `
  span.appendChild(b)
  span.innerHTML += currentMsg
  div.appendChild(span)
  return div
}


function renderNicknameList(userName) {
  const nicknameList = document.querySelector('.nickname-list')
  let wrapSpan = generateNicknameWrapSpan(userName)
  nicknameList.appendChild(wrapSpan)
}


function generateNicknameWrapSpan(userName) {
  const wrapSpan = document.createElement("div")
  const span = document.createElement("span")
  wrapSpan.appendChild(span)
  wrapSpan.classList.add("wrap-span")
  span.innerHTML = userName
  span.onclick = onPingClickUserNameHandler

  return wrapSpan
}

function renderInputMessage(msg) {
  const elMessageInput = document.querySelector('#input_msg')
  elMessageInput.value = msg
}
function renderLoginInput() {
  const elUserName = document.querySelector("#input_nickname")
  elUserName.value = ""
}

function renderInputUserMsg() {
  const elMessage = document.querySelector("#input_msg")
  elMessage.value = ""
}

