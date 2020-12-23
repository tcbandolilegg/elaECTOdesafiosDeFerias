/* DESAFIO 13

Crie um sistema de empréstimo.

O usuário precisa ter entre 18 e 65 anos.
O salário deve ser maior ou igual a R$ 1.500.
O valor do empréstimo deverá ser até cinco vezes o salário. */


alert("SOLUÇÃO EMPRESTIMO")

idade = parseFloat(prompt("Digite a idade"))


idadeMinima = 18
idadeMaxima = 65
salarioMinimo = 1500


if (idade < idadeMinima || idade > idadeMaxima) {
  alert("Infelizmente não só fazemos emprestimo para idades de 18 a 65")
} else {
  salario = parseFloat(prompt("Digite o salário"))
  if (salario < salarioMinimo) {
    alert("Infelizmente só fazemos emprestimo para salários acima de " + salarioMinimo + " reais")
  } else {
    alert("O valor máximo a ser emprestado e de " + (salario * 5) + " reais")
  }
}
