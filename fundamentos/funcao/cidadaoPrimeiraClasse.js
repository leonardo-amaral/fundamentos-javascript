// Funcao em JS é First-Class Object (Citizen)
// Higher-order Function

//Criar de forma literal
function func(){

}

//Armazenar em um array

const array = [function(a,b){ return a + b}]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//Passar funcao como um parametro
function run (fun){
  fun()
}

run(function(){console.log('Executando...')})


// Uma funcao pode retornar/conter uma funcao
function soma(a, b) {
  return function (c){
    console.log(a + b + c)
  }
}

soma(2, 3)(4)


