function calculate(){
    num = document.getElementById('txt_n')
    tab = document.getElementById('txt_tab')

    if(num.value.length == 0){
        window.alert("Por favor, digite um número!")
    } else {
        n = Number(num.value)
        count = 1
        tab.innerHTML = '' // Zera o campo de texto

        while(count <= 10){
           item = document.createElement('option')
           item.text = `${n} x ${count} = ${n*count}`
           item.value = `tab${count}`
           tab.appendChild(item)
           count++
        }
    }
}