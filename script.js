let firstEntry = Number(prompt("Digite o primeiro número:"))
let secondEntry = Number(prompt("Digite o segundo número:"))
let sum = firstEntry + secondEntry
let subtract = firstEntry - secondEntry
let multiply = firstEntry * secondEntry
let divide = (firstEntry / secondEntry).toFixed(2)
let moduleDivide = firstEntry % secondEntry
let odd = sum % 2

alert(`A soma dos números é: ${sum}`)
alert(`A subtração dos números é: ${subtract}`)
alert(`A multiplicação dos números é: ${multiply}`)
alert(`A divisão dos números é: ${divide}`)
alert(`O resto da divisão dos números é: ${moduleDivide}`)

if (odd == 1) {
  alert(`A soma dos números é ímpar: ${sum}`)
} else {
  alert(`A soma dos números é par: ${sum}`)
}
if (firstEntry == secondEntry) {
  alert(`Os números digitados são iguais: ${firstEntry}`)
}
