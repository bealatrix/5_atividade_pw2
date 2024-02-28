// Exercício 1
function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value)
  const nota2 = parseFloat(document.getElementById("nota2").value)
  const nota3 = parseFloat(document.getElementById("nota3").value)
  const nota4 = parseFloat(document.getElementById("nota3").value)

  const media = (nota1 + nota2 + nota3 + nota4) / 4
  document.getElementById("resultadoMedia").innerText = `Média: ${media.toFixed(
    2
  )}`
}

// Exercício 2
function calcularSalario() {
  const salario = parseFloat(document.getElementById("salario").value)
  const salarioComAumento = salario * 1.2
  const inssDesconto = salarioComAumento * 0.08
  const salarioFinal = salarioComAumento - inssDesconto

  document.getElementById(
    "resultadoSalario"
  ).innerText = `Salário Inicial: ${salario.toFixed(
    2
  )} | Salário com Aumento: ${salarioComAumento.toFixed(
    2
  )} | Desconto INSS: ${inssDesconto.toFixed(
    2
  )} | Salário Final: ${salarioFinal.toFixed(2)}`
}

// Exercício 3
function calcularMediaAluno() {
  const matricula = document.getElementById("matricula").value
  const notaAluno1 = parseFloat(document.getElementById("notaAluno1").value)
  const notaAluno2 = parseFloat(document.getElementById("notaAluno2").value)

  const mediaAluno = (notaAluno1 + notaAluno2) / 2

  let resultadoMensagem
  if (mediaAluno > 7.0) {
    resultadoMensagem = "Aluno Aprovado"
  } else if (mediaAluno === 7.0) {
    resultadoMensagem = "Aluno em Recuperação"
  } else {
    resultadoMensagem = "Aluno Reprovado"
  }

  document.getElementById(
    "resultadoAluno"
  ).innerText = `Matrícula: ${matricula} | Média: ${mediaAluno.toFixed(
    2
  )} | ${resultadoMensagem}`
}

// Exercício 4
function calcularValor() {
  const quantidadeSmall = parseInt(document.getElementById("small").value) || 0
  const quantidadeMedium =
    parseInt(document.getElementById("medium").value) || 0
  const quantidadeLarge = parseInt(document.getElementById("large").value) || 0

  const valorSmall = 10
  const valorMedium = 12
  const valorLarge = 15

  const valorTotal =
    quantidadeSmall * valorSmall +
    quantidadeMedium * valorMedium +
    quantidadeLarge * valorLarge

  document.getElementById(
    "resultado"
  ).innerText = `Valor arrecadado: R$ ${valorTotal.toFixed(2)}`
}

// Exercício 5
function dividirConta() {
  const totalConta =
    parseFloat(document.getElementById("totalConta").value) || 0

  const valorCarlosAndre = Math.floor(totalConta / 3)
  const valorFelipe = totalConta - valorCarlosAndre * 2

  document.getElementById(
    "resultadoConta"
  ).innerText = `Carlos: R$ ${valorCarlosAndre.toFixed(
    2
  )}, André: R$ ${valorCarlosAndre.toFixed(
    2
  )}, Felipe: R$ ${valorFelipe.toFixed(2)}`
}
