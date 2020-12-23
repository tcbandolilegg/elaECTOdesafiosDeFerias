// DESAFIO 3:

// Crie um programa que receba um valor em dólares
// e o converta para reais.

// Taxa de câmbio: 5.30
alert("SOLUÇÃO CONVERSÃO DE VALORES  EM DOLARES")
let us = Number(prompt("Digite o número de dolares"))
let txCambio = Number(prompt("Digite a taxa de cambio"))
let emReais = us * txCambio

console.log("a Conversão de ", us, " dolares é de ", emReais, " reais (tx cambio é de ", txCambio, ")")
