// DESAFIO 4:

// Crie um programa que receba um número inteiro e imprima na tela seu sucessor e antecessor. A resposta deve ser: "Analisando o número x, seu antecessor é y e seu sucessor é z".

let num = Number(prompt("Digite um número"))
let sucessor = num + 1
let antecessor = num - 1

console.log("O sucessor de ", num, " é ", sucessor, " seu antecesor é ", antecessor)
