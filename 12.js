/* DESAFIO 12

 Crie um sistema que recebe uma idade e retorna se o usuário é criança, adolescente, adulto ou idoso. */

//  Art. 2º Considera-se criança, para os efeitos desta Lei, a pessoa até doze anos de idade incompletos, e adolescente aquela entre doze e dezoito anos de idade.

// O Projeto de Lei 5383/19 altera a legislação vigente para que as pessoas sejam consideradas idosas a partir dos 65 anos de idade, e não mais 60. Em análise na Câmara dos Deputados, o texto altera o Estatuto do Idoso e a Lei 10048/00, que trata da prioridade de atendimento.



alert("SOLUÇÃO FAIXA ETÁRIA CRIANÇA, ADOLESCENTE, ADULTO, IDOSO")
idade = parseFloat(prompt("Digite a idade"))
// TETO medido pelos valores até o teto incompletos
tetoCrianca = 12
tetoAdolescente = 18
tetoAdulto = 65

if (idade < tetoCrianca) {
  alert("A idade digitada foi " + idade + " anos é de uma criança")
} else if (idade < tetoAdolescente) {
  alert("A idade digitada foi " + idade + " anos é de um adolescente")
} else if (idade < tetoAdulto) {
  alert("A idade digitada foi " + idade + " anos é de um adulto")
} else {
  alert("A idade digitada foi " + idade + " anos é de um idoso")
}