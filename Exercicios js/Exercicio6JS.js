// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

// myFunction('abcdefg')
// Expected
// 'abcd'
// myFunction('1234')
// Expected
// '12'
// myFunction('fgedcba')
// Expected
// 'fged'

function myFunction(a) {
  let variable = a
  return console.log(variable.substring(0, 4))
}

myFunction('abcdefg')
myFunction('1234') // FALTA ESSE <--
myFunction('fgedcba')