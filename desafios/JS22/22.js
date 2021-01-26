/**
* Crie um programa que utiliza os números ímpares encontrados entre numeroInicial
* e numeroFinal e realiza a soma entre eles.
*
* Ex:
* numeroInicial = 2
* numeroFinal = 11
* impares = 3, 5, 7, 9, 11
* soma = 35
*/


alert("ARRAY DE IMMPARES")
alert("Vamos montar o nosso ARRAY?")
respMontaArray = (prompt("S - para sim\nN - para não")).toUpperCase()
if (respMontaArray == "S") {
  arrayNumeros = montaArray()
  soma = somaImpares(arrayNumeros)
  alert("A soma dos números impares é " + soma)
} else if (respMontaArray == "N") {
  alert("Que pena até a próxima")
} else {
  alert("Resposta inválida, execute novamente")
}


function montaArray() {
  numeroInicial = parseFloat(prompt("Digite o número inicial"))
  numeroFinal = parseFloat(prompt("Digite o número Final"))
  tamanhoArray = numeroFinal - numeroInicial + 1
  arrayNumeros = new Array(tamanhoArray)

  for (i = 0; i < totNumeros; i++) {
    arrayNumeros[i] = numeroInicial + i
  }
  console.log(arrayNumeros)
  return arrayNumeros
}

function somaImpares(arrayNumeros) {
  soma = 0
  for (i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] % 2 != 0)
      soma = soma + arrayNumeros[i]
  }
  return soma

}