function rando({min = 0,max = 1000}) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rando(obj))
console.log(rando({min: 900}))
console.log(rando({}))