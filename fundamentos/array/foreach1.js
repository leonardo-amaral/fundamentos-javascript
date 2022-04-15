const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
  console.log(`${indice + 1} - ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


function forEach2(arr, funcao) {
  for(let i = 0; i < arr.length; i = i + 1) {
      funcao(i,arr[i]);
  }
}

forEach2(aprovados, function(indice, nome) {
  console.log(indice, nome)
})
