aprovados = ['Bia', 'Carlos', 'Rafael']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados.splice(1, 2,))