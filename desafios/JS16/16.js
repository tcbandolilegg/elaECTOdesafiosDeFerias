/* DESAFIO 16

Elabore um programa que calcule o valor a ser pago por um produto, considerando o seu preço normal e condição de pagamento:

- À vista dinheiro / cheque: 10% de desconto
- À vista no cartão: 5% de desconto
- Em até 2x no cartão: preço normal
- 3x ou mais no cartão: 20% de juros */

alert("SOLUÇÃO CALCULO DO VALOR A SER PAGO")


descontoAvistaDinheiroOuCheque = 10
descontoAvistaCartao = 5
descontoAte2VezesCartao = 0
juros3VezesOuMaisCartao = 20

formaDePagamento = (prompt("Digite a forma de pagamento\nA = Avista dinheiro ou cheque\nC = Cartão ?"))


if (formaDePagamento != "a" && formaDePagamento != "A" && formaDePagamento != "c" && formaDePagamento != "C") {
  alert("Opção deve ser A ou C")
} else {
  valorDoProduto = parseFloat(prompt("Digite o valor do produto comprado"))
  if (formaDePagamento == "a" || formaDePagamento == "a".toUpperCase) {
    valorPagar = valorDoProduto - (valorDoProduto * descontoAvistaDinheiroOuCheque / 100)
    alert("Seu desconto é de " + descontoAvistaDinheiroOuCheque + "%\nValor a pagar é " + valorPagar + " reais")
  } else {
    numeroDeParcelas = parseInt(prompt("Digite o número e paracelas"))
    if (numeroDeParcelas == 1) {
      valorPagar = valorDoProduto - (valorDoProduto * descontoAvistaCartao / 100)
      alert("Seu desconto é de " + descontoAvistaCartao + "%\nValor a pagar é" + valorPagar + " reais")
    } else if (numeroDeParcelas == 2) {
      valorPagar = valorDoProduto - (valorDoProduto * descontoAte2VezesCartao / 100)
      valorParcela = valorPagar / numeroDeParcelas
      alert("Seu desconto é de " + descontoAte2VezesCartao + "%\nValor a pagar é " + valorPagar + " reais\nDividido em " + numeroDeParcelas + " de " + valorParcela + " reais")
    } else {
      valorPagar = valorDoProduto + (valorDoProduto * juros3VezesOuMaisCartao / 100)
      valorParcela = valorPagar / numeroDeParcelas
      alert("Para este número de parcelas terá juros de " + juros3VezesOuMaisCartao + "%\nValor a pagar será de" + valorPagar + " reais\nDividido em " + numeroDeParcelas + " de " + valorParcela + " reais")
    }
  }
}