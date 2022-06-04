let peso = document.getElementById('pesoForm')
let altura = document.querySelector('input#alturaForm')
let res = document.querySelector('#resposta')

function calcImc() {
  let imc = Number((peso.value / (altura.value * altura.value)).toFixed(2))

  if (peso.value == '' || altura.value == '') {
    res.classList.add('orange')
    res.innerHTML = 'Erro: verifique os dados inseridos!'
  } else if (imc < 17) {
    res.classList.add('red')
    res.innerHTML = `Seu IMC é ${imc} : Muito abaixo do peso`
  } else if (imc < 18.5) {
    res.classList.add('yellow')
    res.innerHTML = `Seu IMC é ${imc} : Abaixo do peso`
  } else if (imc < 25) {
    res.classList.add('green')
    res.innerHTML = `Seu IMC é ${imc} : Peso normal`
  } else if (imc < 30) {
    res.classList.add('yellow')
    res.innerHTML = `Seu IMC é ${imc} : Acima do peso`
  } else if (imc < 35) {
    res.classList.add('orange')
    res.innerHTML = `Seu IMC é ${imc} : Obesidade grau I`
  } else if (imc < 40.1) {
    res.classList.add('red')
    res.innerHTML = `Seu IMC é ${imc} : Obesidade grau II`
  } else if (imc > 40) {
    res.classList.add('red')
    res.innerHTML = `Seu IMC é ${imc} : Obesidade grau III`
  }
  peso.value = ''
  altura.value = ''
  peso.focus()
}

function clearForm() {
  res.innerHTML = ''
  peso.value = ''
  altura.value = ''
  res.classList.remove('red', 'orange', 'yellow', 'green')
}
