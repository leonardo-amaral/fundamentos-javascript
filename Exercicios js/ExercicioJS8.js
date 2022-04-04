// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

// myFunction(100,50)
// Expected
// 50
// myFunction(10,1)
// Expected
// 0.1
// myFunction(500,25)
// Expected
// 125

function myFunction(a, b){
  let porcentagem = b / 100
  return console.log(a * porcentagem)
}

myFunction(100, 50)
myFunction(10, 1)
myFunction(500, 25)