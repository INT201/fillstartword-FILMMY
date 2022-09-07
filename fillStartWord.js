const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if (word == null || word == undefined){
    return String(undefined)
  }
  else if (startWord.length == word.length){
    return console.log(word)
  }else if (startWord.length != word.length){
    return String(startWord+word)
  }
}

// console.log(fillStartWord("first",))
module.exports = fillStartWord
