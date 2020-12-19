/* DESAFIO 11

Desenvolva um programa que pergunte a distância de uma viagem em Km.

Calcule o preço da passagem, cobrando 0,50 por Km para viagens de até 200Km e 0,45 por viagens mais longas. */


alert("SOLUÇÃO DO PREÇO DA PASSAGEM")
quilometrosViagem = parseFloat(prompt("Digite a quantidade de quilometros a serem pergcoridos"))
custoAcimaDe200Km = .45
custoAte200Km = .50
if (quilometrosViagem > 200) {
  alert("Valor da pasagem é " + (quilometrosViagem * custoAcimaDe200Km) + " reais")
} else {
  alert("Valor da pasagem é " + (quilometrosViagem * custoAte200Km) + " reais")
}