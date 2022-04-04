const prod1 = {}
prod1.nome = 'Celular Bonzao'
prod1.preco = 4998.90
prod1['Descontinho'] = 0.20

console.log(prod1);

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90
}

console.log(prod2);
console.log(prod2.preco)
console.log(prod1.Descontinho)

console.log (prod2.preco / prod1.Descontinho)

'{ "nome": "Camisa Polo", "preco: 79.90 }'  //JSON EXEMPLE