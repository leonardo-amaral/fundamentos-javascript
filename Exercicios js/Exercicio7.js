/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) 

e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo/

Quando o parâmetro inclusivo for true, tenha "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja informado 

seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.

Exemplos:
estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true) // retornará true */


function rand ([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let resultado = rand([10,150])
console.log(resultado)
 
function oca (resultado) {
  if (resultado >= 1 | 1000){
    return console.log(true)
  } 
}


console.log(oca(resultado))
