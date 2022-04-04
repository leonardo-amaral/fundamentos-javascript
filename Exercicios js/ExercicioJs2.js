// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

// myFunction('abcd',1)
// Expected
// 'a'
// myFunction('zyxbwpl',5)
// Expected
// 'w'
// myFunction('gfedcba',3)
// Expected
// 'e'

function myFunction(a, b){
  let strings = a
  return console.log(strings.charAt(b - 1))
}

myFunction('abcd', 1)
myFunction('zyxbwpl', 5)
myFunction('gfedcba', 3)