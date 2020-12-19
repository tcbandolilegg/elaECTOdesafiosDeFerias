/* DESAFIO 10

Crie um programa que leia um número inteiro e mostre na tela se ele é PAR ou ÍMPAR. */


alert("SOLUÇÃO DO PAR OU IMPAR")
let numero = parseInt(prompt("Digite o número"))

if (numero % 2 != 0) {
  alert("O número " + numero + " é impar")
} else {
  alert("O número " + numero + " é par")
}