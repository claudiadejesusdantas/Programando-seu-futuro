function Soma() {
    var inputN1 = document.getElementById('input1')
    var input2 = document.getElementById('input2')
    var resultado = document.getElementById('resultado')

    var n1 = Number(inputN1.value)
    var n2 = Number(input2.value)

    var resultadoSoma = n1+n2
    resultado.innerHTML = resultadoSoma

  }