const elEnterButton = document.querySelector("#btn_enter")
const body = document.querySelector("body")
let currentUserName = ""
let currentMessage = ""

const usersNickNames = []
let prevMessage = ''


const elSendMessagebutton = document.querySelector("#btn_send_msg")
const userLoggedIn = document.querySelector(".user-logged")

elEnterButton.onclick = onEnterButtonClickHandler
elSendMessagebutton.onclick = onSendMessagebuttonHandler

elInputMessege = document.querySelector("#input_msg")
const elUserName = document.querySelector("#input_nickname")



elUserName.addEventListener("keydown", onEnterButtonClickHandler)
elInputMessege.addEventListener("keydown", onSendMessagebuttonHandler)
