// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

// myFunction('abcdefg')
// Expected
// 'abc'
// myFunction('1234')
// Expected
// '123'
// myFunction('fgedcba')
// Expected
// 'fge'

function myFunction (a) {
  let strings = a 
  return console.log(strings.substring(3,0))
}

myFunction('abcdefg')
myFunction('1234')
myFunction('fgedcba')