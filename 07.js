alert("SOLUÇÃO MÉDIA DE NOTAS")
let n1 = Number(prompt("Digite a nota 1"))
let n2 = Number(prompt("Digite a nota 2"))
let n3 = Number(prompt("Digite a nota 3"))

let media = ((n1 + n2 + n3) / 3).toFixed(2)

if (media >= 7) {
  alert("Sua média foi " + media + " PARABÉNS! Você já aprovado")
} else if (media >= 5) {
  alert("Sua média foi " + media + " Você está de recuperação, Boa sorte!")
}
else {
  alert("Sua média foi " + media + " Infelizmente  você está reprovado")
}
