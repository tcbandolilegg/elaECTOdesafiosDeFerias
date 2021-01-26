/**
 * 1- Crie um programa que soma todos os números do vetor numeros.
 * 2- Faça com que o programa some apenas os números pares.
 * 3- Faça com que o programa mostre o resultado da soma dos números pares
 *      e da soma dos números ímpares separadamente.
 */

// numeros = [10, 2, 4, 67, 81, 92, 10, 4, 71, 14]

alert("BRINCANDO COM ARRAY")
alert("Vamos montar o nosso ARRAY?")
respMontaArray = (prompt("S - para sim\nN - para não")).toUpperCase()
if (respMontaArray == "S") {
  arrayNumeros = montaArray()
  alert("Posso te oferecer 3 soluções\nSomar todos os numeros\nSomar só os pares\nSomar só os impares\n\n")
  tipoSoma = (prompt("Digite: \nT - para todos os numeros\nP - para os pares\nI - para os impares\n\n")).toUpperCase()
  if (tipoSoma == "T") {
    soma = somaTodos(arrayNumeros)
    alert("A soma dos números digitados é " + soma)
  } else if (tipoSoma == "I") {
    soma = somaImpares(arrayNumeros)
    alert("A soma dos números impares digitados é " + soma)
  } else if (tipoSoma == "P") {
    soma = somaPares(arrayNumeros)
    alert("A soma dos números pares digitados é " + soma)
  } else {
    alert("Infelismente não entendi!")
  }
} else if (respMontaArray == "N") {
  alert("Que pena até a próxima")
} else {
  alert("Resposta inválida, execute novamente")

}


function montaArray() {
  arrayNumeros = new Array(10)
  for (i = 0; i < 10; i++) {
    arrayNumeros[i] = parseFloat(prompt("Digite o " + (i + 1) + "º número"))
  }
  console.log(arrayNumeros)
  return arrayNumeros
}

function somaTodos(arrayNumeros) {

  soma = 0
  for (i = 0; i < 10; i++) {
    soma = soma + arrayNumeros[i]
  }
  return soma
}
function somaImpares(arrayNumeros) {
  soma = 0
  for (i = 0; i < 10; i++) {
    if (arrayNumeros[i] % 2 != 0)
      soma = soma + arrayNumeros[i]
  }
  return soma

}
function somaPares(arrayNumeros) {
  soma = 0
  for (i = 0; i < 10; i++) {
    if (arrayNumeros[i] % 2 == 0)
      soma = soma + arrayNumeros[i]
  }
  return soma

}
