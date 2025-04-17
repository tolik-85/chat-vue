function censoredText(text, stopWord = 'cabbage') {
  if (text.toLowerCase().includes(stopWord)) {
    return false
  }
  else {
    return text
  }
}

function massCensoredText(text) {
  const stopWords = ['cabbage', 'apple', 'orange']
  let i = 0
  while (i < stopWords.length) {
    if (!censoredText(text, stopWords[i])) {
      return false
    }
    i++
  }
  return text
}



function tagFilter(message) {
  const openTagIdx = message.indexOf('<')
  const closeTagIdx = message.lastIndexOf('>')
  const aloneTag = (openTagIdx === -1) || (closeTagIdx === -1)
  const deltaCount = closeTagIdx - openTagIdx
  const tagName = message.substring(openTagIdx, closeTagIdx)
  if (aloneTag || deltaCount <= 1 || tagName.includes(' ')) {
    return message
  }
  return ''
}


function concatPingNickName(nickname, message) {
  const pingMessage = `@${nickname} ${message}`
  return pingMessage
}



function isUserOnline(userName) {
  const isOnline = usersNickNames.includes(userName)
  if (!isOnline) {
    usersNickNames.push(userName)
  }
  return isOnline
}

function spamFilter(message) {
  if (message === prevMessage) {
    return ''
  }
  prevMessage = message
  return message
}
