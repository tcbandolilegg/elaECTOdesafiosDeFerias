/* 
DESAFIO 17

Crie um programa que receba um email e uma senha.
O programa tem salvo em seu sistema o email e a senha correta.
O programa deve retornar se os dados estão ou não corretos.
*/

alert("SOLUÇÃO VALIDA E-MAIL E SENHA")
const email = "tcbandolilegg@gmail.com"
const senha = "0TCBlegg*"

emailDigitado = prompt("Digite o e-mail")
senhaDigitada = prompt("Digite a senha")

if (emailDigitado == email) {
  emailValido = true
} else {
  emailValido = false
}

if (senhaDigitada == senha) {
  senhaValida = true
} else {
  senhaValida = false
}

if (emailValido && senhaValida) {
  alert("E-mail digitado corretamente\nSenha digitada corretamente")
} else if (emailValido && !senhaValida) {
  alert("E-mail digitado coretamente\nSenha digitada incorretamente")
} else if (!emailValido && senhaValida) {
  alert("E-mail digitado incorretamente\nSenha digitada corretamente")
} else if (!emailValido && !senhaValida) {
  alert("E-mail digitado incorretamente\nSenha digitada incorretamente")
}

