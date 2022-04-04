const escola = "Cod3r";
let numeros1 = [3,5,7,2,1]
let numeros2 = [6,2,4,6,7]

//let Resultado = numeros1.substring(1) + numeros2.substring(3); // Não dá Certo!

//console.log(Resultado)

//Forma certa de realizar o problema acima.


//let Resultado = numeros1[3] + numeros2[5];
//console.log(Resultado)

//Brincadeira, não deu certo! :(


console.log(escola.charAt(3))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'))

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola '.concat(escola).concat("!"))
              //ou//
console.log('Escola ' + escola + ("!"))


console.log(escola.replace(/\d/, 'e'))
console.log(escola.replace(/\w/g, 'e'))

console.log('Ana, Maria, Pedro');
console.log('Ana, Maria, Pedro'.split(/,/));

