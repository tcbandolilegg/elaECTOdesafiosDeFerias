/**
* 1- Crie um programa que utilize as 3 dimensões de uma piscina para
* calcular quantos litros de água ela comporta. (1000 litros = 1m³)
* 
* 2- Faça com que o programa imprima o resultado de forma amigável.
* Ex:
*      A piscina comporta 50000 litros de água      
*/

alert("SOLUÇÃO CALCULO DA CAPACIDADE DE UMA PISCINA")

volumePiscina = 0


comprimento = parseFloat(prompt("Digite a medida do comprimento em metros"))
largura = parseFloat(prompt("Digite a medida da largura em metros"))
profundidade = parseFloat(prompt("Digite a medida da profundidade em metros"))

volumePiscina = comprimento * largura * profundidade
capacidadeEmLitros = volumePiscina * 1000

alert("A piscina de " + comprimento + " de comprimento, " + largura + " de largura e " + profundidade + " é de " + capacidadeEmLitros)


