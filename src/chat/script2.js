
// let elEnterButton = document.querySelector("#btn_enter")
// let elUserName = document.querySelector("#input_nickname")
// let nicknameList = document.querySelector(".nickname-list")
// let wrapChatFlow = document.querySelector(".wrap-chat-flow")
// let elSendMessagebutton = document.querySelector("#btn_send_msg")
// let elMessage = document.querySelector("#input_msg")
// const userLoggedIn = document.querySelector(".user-logged")

// let currentUserName = ""

// let currentMessage = ""

// elEnterButton.onclick = onEnterButtonClickHandler
// elSendMessagebutton.onclick = onSendMessagebuttonHandler


// function concatPingNickName(nickname, message) {
//   const pingMessage = `@${nickname} ${message}`
//   return pingMessage
// }


// function onPingClickUserNameHandler(e) {
//   const pingUserName = e.target.innerHTML
//   const msg = concatPingNickName(pingUserName, currentMessage)
//   renderInputMessage(msg)
// }


// elMessage.onchange = onChangeMessageHandler
// function onChangeMessageHandler(e) {
//   currentMessage = e.target.value
// }

// function renderInputMessage(msg) {
//   elMessage.value = msg
// }


// function generateSystemMsg(userName) {
//   const div = document.createElement("div")
//   div.appendChild(i)
//   const i = document.createElement("i")
//   i.classList.add("msg-line")
//   const u = createElement("u")
//   i.innerHTML = { system }
//   const b = createElement("b")
//   b.innerHTML = userName
//   i.appendChild(b)
//   i.innerHTML += "Вошел в чат"

//   return div

// }

// function onSendMessagebuttonHandler() {
//   let elMessageVal = elMessage.value
//   if (elMessageVal.includes(badWord)) {
//     currentMsg = `[${currentUserName}]: ${censored} `
//     generateUserMsgLine(currentMsg, currentUserName)
//     clearInputUserMsg()
//   } else {
//     generateUserMsgLine(currentMsg, currentUserName)
//     clearInputUserMsg()
//   }
// }



// function censoredText(text, stopWord = 'cabbage') {
//   if (text.toLowerCase().includes(stopWord)) {
//     return false
//   }
//   else {
//     return text
//   }
// }

// function massCensoredText(text) {
//   const stopWords = ['cabbage', 'apple', 'orange']
//   let i = 0
//   while (i < stopWords.length) {
//     if (!censoredText(text, stopWords[i])) {
//       return false
//     }
//     i++
//   }
//   return text
// }




// function clearInputUserMsg() {
//   elMessage.value = ""
// }


// function onEnterButtonClickHandler() {

//   currentUserName = elUserName.value

//   if (isAlreadyOnLine(currentUserName)) {
//     userLoggedIn.classList.remove("hide")
//   } else {
//     renderNicknameList(currentUserName)
//     renderSystemMsg(currentUserName)
//     clearloginInputUserNameValue()
//   }
// }

// function renderNicknameList(currentUserName) {
//   const nicknameList = document.querySelector('.nickname-list')
//   let wrapSpan = generateNicknameWrapSpan(currentUserName)
//   nicknameList.appendChild(wrapSpan)
// }



// function generateNicknameWrapSpan(currentUserName) {
//   const wrapSpan = document.createElement("div")
//   const span = document.createElement("span")
//   wrapSpan.appendChild(span)
//   wrapSpan.classList.add("wrap-span")
//   span.innerHTML = currentUserName
//   usersList.push(currentUserName)
//   span.onclick = onPingClickUserNameHandler

//   return wrapSpan
// }





// function clearloginInputUserNameValue() {
//   elUserName.value = ""
// }

// function generateUserMsgLine(currentMsg, currentUserName) {
//   let chatFlow = document.querySelector(".chat-flow")
//   let currenteMsgLine = document.createElement("span")
//   currenteMsgLine.classList.add("msg-line")
//   let b = document.createElement("b")
//   let br = document.createElement("br")
//   currenteMsgLine.innerHTML = currentMsg
//   wrapChatFlow.appendChild(chatFlow)
//   currenteMsgLine.appendChild(b)
//   chatFlow.appendChild(currenteMsgLine)
//   chatFlow.appendChild(br)
// }



// function genetateSystemMsg(currentUserName) {
//   chatFlow = document.querySelector(".chat-flow")
//   let msgLine = document.createElement("span")
//   msgLine.classList.add("msg-line")
//   let b = document.createElement("b")
//   let br = document.createElement("br")
//   let i = document.createElement("i")
//   let u = document.createElement("u")
//   u.innerHTML = currentUserName
//   i.innerHTML = `{ system } ${u.innerHTML} вошел(ла) в чат.`
//   chatFlow.appendChild(i)
//   chatFlow.appendChild(br)
//   return chatFlow
// }

// function renderSystemMsg(currentUserName) {
//   let chatFlow = genetateSystemMsg(currentUserName)
//   wrapChatFlow.appendChild(chatFlow)
// }


// function renderUserList(currentUserName) {
//   let wrapSpan = genetateWrapSpan()
//   nicknameList.appendChild(wrapSpan)
//   let span = generateSpan(currentUserName)
//   wrapSpan.appendChild(span)

// }



