const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if (word === null || word === undefined){
    return undefined
  }
  else if (word.indexOf(startWord)>=0){
    return word
  }else return startWord+word
}

// console.log(fillStartWord("first",))
module.exports = fillStartWord
