/* DESAFIO 09

Escreva um programa que leia a velocidade de um carro. Se ele ultrapassar 80 Km/h, mostre uma mensagem dizendo que ele foi multado.

A multa vai custar R$ 7,00 por cada Km acima do limite. */

alert("SOLUÇÃO DO MONITORAMENTO DE VELOCIDADE")
let velocidadeRegistrada = parseFloat(prompt("Digite A VELOCIDADE REGISTRADA"))
const velociadeLimite = 80
const valorKmExcedente = 7.00
if (velocidadeRegistrada > velociadeLimite) {
  let excesso = velocidadeRegistrada - velociadeLimite
  let multa = excesso * valorKmExcedente
  alert("Infelismente você ultrapassou a " + velociadeLimite + "Km/h gerando uma multa de " + multa + " reais")
} else {
  alert("Parabéns, você é um motorista que respeita a velocidade limite que é de " + velociadeLimite + "Km/h")
}
