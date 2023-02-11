function countNum(){
    var first = document.getElementById('num_first')
    var last = document.getElementById('num_last')
    var numb = document.getElementById('num')
    var msg = window.document.getElementById('message')

    if(first.value.length == 0 || last.value.length == 0 || numb.value.length == 0){
        msg.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Preencha todos os campos!')
    } else {
        msg.innerHTML = `Contando: <br>`
        var f = Number(first.value)
        var l = Number(last.value)
        var n = Number(numb.value)

        if(n <= 0){
            window.alert('Passo Inválido! Considerando PASSO 1')
            n = 1
        }
        if(f < l){
         // Contagem crescente   
           for(count = f; count <= l; count += n){
              msg.innerHTML += ` ${count} \u{1F449}`
           }
        } else {
         // Contagem regressiva   
           for(count = f; count >= l; count -= n){
              msg.innerHTML += ` ${count} \u{1F449}`
           }
        }
        msg.innerHTML += `\u{1F3C1}`
    }
}