// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

// myFunction('abcdefgh')
// Expected
// 'abcd'
// myFunction('1234')
// Expected
// '12'
// myFunction('gedcba')
// Expected
// 'ged'

function myFunction(a){
    let valor = (myFunction) => {
      if (a === String){
      a.slice(0,3)
    } else if (a === Number) {
      a.slice(0,2)
    }
    return console.log(valor('abcdefgh'))
  }
} 

console.log(myFunction('abcdefgh'))

// NÃO RESOLVIDO!