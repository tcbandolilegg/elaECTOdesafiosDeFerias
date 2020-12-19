/* DESAFIO 15

A confederação Nacional de Natação precisa de um programa que leia o ano de nascimento de um atleta e mostre sua categoria, de acordo com a idade:

- Até 9 anos: MIRIM
- Até 14 anos: INFANTIL
- Até 19 anos: JUNIOR
- Até 24 anos: SÊNIOR
- Acima: MASTER */




alert("SOLUÇÃO CATEGORIAS DOS ATLETAS, MIRIM, INFANTIL, JUNIOR, SENIOR OU MASTER")
anoNascimento = parseInt(prompt("Digite o ano de nascimento (com 4 digitos)"))
// TETO medido pelos valores até o teto incompletos
tetoMirim = 9
tetoInfantil = 14
tetoJunior = 19
tetoSenior = 24

anoAtual = new Date().getFullYear()      // Get the four digit year (yyyy)
idade = anoAtual - anoNascimento
if (anoNascimento >= anoAtual) {
  alert("O ano de nascimento não pode se maior ou igual ao ano atual")
} else if (idade < tetoMirim) {
  alert("A idade do atleta é " + idade + " sendo assim sua categoria é MIRIM")
} else if (idade < tetoInfantil) {
  alert("A idade do atleta é " + idade + " sendo assim sua categoria é INFANTIL")
} else if (idade < tetoJunior) {
  alert("A idade do atleta é " + idade + " sendo assim sua categoria é JUNIOR")
} else if (idade < tetoSenior) {
  alert("A idade do atleta é " + idade + " sendo assim sua categoria é SENIOR")
} else {
  alert("A idade do atleta é " + idade + " sendo assim sua categoria é MASTER")
}

