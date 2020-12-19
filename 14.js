/* DESAFIO 14

Escreva um programa que leia dois números inteiros e compare-os, mostrando na tela uma mensagem:

O primeiroValor é maior. O segundoValor é maior. Não exite valor maior, os dois são iguais. */


alert("SOLUÇÃO COMPARAÇÃO ENTRE DOIS NÚMEROS")

num1 = parseInt(prompt("Digite o primeiro numero"))
num2 = parseInt(prompt("Digite o segundo numero"))


if (num1 == num2) {
  alert("Não Existe maior, os numeros são iguais")
} else if (num1 > num2) {
  alert("O primeiro número é o maior")
} else {
  alert("O segundo número é o maior")
}
