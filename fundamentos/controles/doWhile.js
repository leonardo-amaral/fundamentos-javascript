function numeroAleatorio(max, min){
  const valor = Math.random()*(max-min) + min
  return Math.floor(valor)
}

let opcao = -1

do{
  opcao = numeroAleatorio(-1, 10)
  console.log(`O resultado foi ${opcao}`)
} while(opcao != -1)