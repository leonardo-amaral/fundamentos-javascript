// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

// myFunction('abcdefg')
// Expected
// 'defg'
// myFunction('1234')
// Expected
// '4'
// myFunction('fgedcba')
// Expected
// 'dcba'

function myFunction(a){
  let strings = a
  return console.log(strings.substring(3))
}

myFunction('abcdefg')
myFunction('1234')
myFunction('fgedcba')