// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function triangulo(a, b, c ){
  if(a === b && b === c){
    console.log("É um triangulo, Equilátero")
  } else if(a === b||c && b||c !== a) {
    console.log("É um triangulo, Isósceles")
  } else if(a !== b && c !== b||a){
    console.log("É um triangulo, Escaleno")
  }
}

triangulo(5, 5 ,5)
