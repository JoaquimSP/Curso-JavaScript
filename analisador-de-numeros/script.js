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