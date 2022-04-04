const pessoa = {
  saudacao: 'Bom dia!',
  falar(){
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e 00(computacional)

const falarDePessoas = pessoa.falar.bind(pessoa) //metodo certo usar . bind para "amarrar" o objeto.
falarDePessoas()

const falar2 = pessoa.falar
falar()