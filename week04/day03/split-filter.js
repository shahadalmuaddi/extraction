let message = "JavaScript"
let character = message.split('')
let result = character.filter(character => character !== 'J')
console.log(result)

//--------

console.log("JavaScript".split('').filter(character => character !== 'a'))//its the same but in one line.
