/* DESAFIO 11

Desenvolva um programa que pergunte a distância de uma viagem em Km.

Calcule o preço da passagem, cobrando 0,50 por Km para viagens de até 200Km e 0,45 por viagens mais longas. */


alert("SOLUÇÃO DO PREÇO DA PASSAGEM")
quilometrosViagem = parseFloat(prompt("Digite a quantidade de quilometros a serem pergcoridos"))

const limite = 200
const custoKmAcimaDe200Km = .45
const custoKmAte200Km = .50

if (quilometrosViagem > limite) {

  quilometrosAcimaDelimite = quilometrosViagem - limite
  custoQuilometrosAtelimite = limite * custoKmAte200Km
  custoQuilometrosAcimaDelimite = quilometrosAcimaDelimite * custoKmAcimaDe200Km
  valorPassagem = custoQuilometrosAcimaDelimite + custoQuilometrosAtelimite

} else {
  valorPassagem = quilometrosViagem * custoKmAte200Km
}
alert("Valor da pasagem é " + valorPassagem + " reais")
