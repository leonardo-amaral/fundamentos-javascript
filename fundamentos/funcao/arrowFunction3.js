let comparadaComThis = function (param){
  console.log(this === param)
}

comparadaComThis(global)

const obj = {}
comparadaComThis = comparadaComThis.bind(obj)
comparadaComThis(global)
comparadaComThis(obj)

let comparadaComThisArrow = param => console.log(this === param)
comparadaComThisArrow(global)