/* DESAFIO 18

Crie um programa que receba:
a) o valor da conta em um restaurante (valor total do consumo)
b) O número de amigos que vão dividir o valor

Depois disso calcule e mostre no console:
a) O valor dos 10% (cota do garçom)
b) O valor final da conta (consumo + 10%)
c) O valor que cada cliente deve pagar */

alert("SOLUÇÃO CALCULO DA DIVISÃO DA CONTA ENTRE AMIGOS")

cotaDoGarcon = 10

valorConsumo = parseFloat(prompt("Digite o valor do consumo"))
numeroAmigos = parseFloat(prompt("Digite o número de amigos que irão dividir a conta"))

valorCotaGarcon = valorConsumo * cotaDoGarcon / 100

contaTotal = valorConsumo + valorCotaGarcon
valorAmigo = contaTotal / numeroAmigos

alert("Consumo foi de " + valorConsumo + " reais\nValor da cota do garçom " + valorCotaGarcon + " reais\nTotal à pagar " + contaTotal + " reais\nSendo " + numeroAmigos + " Amigos\nCada Amigo deverá contribuir com " + valorAmigo + " reais")
