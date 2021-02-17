
/**
* Crie um programa que utilize os valores do objeto pessoa e imprima uma string no seguinte formato:
*
*   João Silva recebe R$ 2000. Após contabilizar suas despesas, ele ainda possui R$ 550 reais sobrando.
*
* Faça mais testes trocando os valores da variável do objeto pessoa.
*
*/


alert("Calculo de despesas, apartir de um banco de dados")
// proximo = true

console.log(dataBase)

const lista = (regs) => {
  totRegistros = regs.length
  console.log(totRegistros)
  for (let i = 0; i < regs.length; i++) {
    reg = regs[i];
    saldo = reg.salario - calcDespesas(reg.despesas)
    alert(reg.nome + " recebe R$ " + reg.salario + ". Após contabilizar suas despesas, ele ainda possui R$ " + saldo + " reais sobrando")
  }

}

lista(dataBase);

function calcDespesas(despesas) {
  totDespesas = despesas.contas + despesas.aluguel + despesas.poupanca
  return totDespesas
}
