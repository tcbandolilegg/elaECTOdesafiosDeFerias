/**
 * Escreva um programa que utiliza o conteúdo da variável frase e coloca cada uma
 * de suas letras em uma linha do console, com um intervalo de 1 segundo entre
 * o aparecimento de cada letra.
 */
alert("ANIMANDO A FRASE")
// frase = "Ei você aí, me dá um dinheiro ai"
frase = (prompt("Digite sua frase!"))
totCaracteres = frase.length

for (i = 0; i < totCaracteres; i++) {
  console.log(frase[i])
  espera = 0
  for (j = 0; j < 60; j++) {
    espera = espera++
  }
}

