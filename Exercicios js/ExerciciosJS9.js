// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

// myFunction(6,5,4,3,2,1)
// Expected
// 10.5
// myFunction(6,2,1,4,2,3)
// Expected
// 2744
// myFunction(2,3,6,4,2,3)
// Expected
// -8

function myFunction(a, b, c, d, e, f){
  let part1 = a + b
  let part2 = part1 - c
  let part3 = part2 * d
  let part4 = part3 / e
  let part5 = part4 ** f
  return console.log(part5)
}


myFunction(6,5,4,3,2,1)
myFunction(6,2,1,4,2,3)
myFunction(2,3,6,4,2,3)