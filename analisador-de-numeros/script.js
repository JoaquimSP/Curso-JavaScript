num = document.getElementById('txt_n')
input_select = document.getElementById('txt_select')
result = document.querySelector('div#result')
valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n, list){
    if(list.indexOf(Number(n)) != -1){
        return true 
    } else {
        return false
    }
}

function addNumber(){
    if(isNumber(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        campo = document.createElement('option')
        campo.text = `Valor ${num.value} adicionado`
        input_select.appendChild(campo)  
        result.innerHTML = ''
    } else {
        window.alert("Valor inválido ou já encontrado na lista.")
    }
    num.value = ''
    num.focus()
}

function endScript(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        total = valores.length
        maior = valores[0]
        menor = valores[0]
        soma = 0
        media = 0

        for(let pos in valores){
          soma += valores[pos]  
            if(valores[pos] > maior)
              maior = valores[pos]
            if(valores[pos] < menor)
              menor = valores[pos]  
        }
        media = soma / total

        result.innerHTML = ''
        result.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        result.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        result.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        result.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        result.innerHTML += `<p>A média dos valores é ${media}.</p>`

    }
}

/*
function addNumber(){  
    var n = Number(num.value)    
    if(num.value == 0){
        window.alert("Valor é inválido ou já encontrado na lista!!!")
    } else if (num.value > 100){
        window.alert("Valor é inválido ou já encontrado na lista!!!")
    } 
     else {
       campo = document.createElement('option')
       campo.text = `Valor ${n} adicionado`
       input_select.appendChild(campo)  
    }
}
*/ 