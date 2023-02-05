function checkAge(){
   var data = new Date()
   var ano = data.getFullYear()

   var form_ano = document.getElementById('txtano')
   var res = document.getElementById('result')

   if(form_ano.value.length == 0 || Number(form_ano.value) > ano){
     window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
     var form_sex = document.getElementsByName('sexo')
     var idade = ano - Number(form_ano.value)
     // res.innerHTML = `Idade calculada: ${idade}`
     var genero = ''

     var img = document.createElement('img')
     img.setAttribute('id', 'foto')

     if(form_sex[0].checked){
        genero = 'Homem'
        if (idade >=0 && idade < 5){
            // Bebê
            img.setAttribute('src', 'img/baby-m.png')
        } else if (idade < 10){
            // Criança
            img.setAttribute('src', 'img/children-m.png') 
        } else if (idade < 21){
            // Jovem
            img.setAttribute('src', 'img/teenager-m.png')
        } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'img/adult-m.png')
        } else {
            // Idoso
            img.setAttribute('src', 'img/old-m.png')
        }
     } else if (form_sex[1].checked){
        genero = 'Mulher'
        if (idade >=0 && idade < 5){
            // Bebê
            img.setAttribute('src', 'img/baby-w.png')
        } else if(idade < 10){
            // Criança
            img.setAttribute('src', 'img/children-w.png')
        } else if (idade < 21){
            // Jovem
            img.setAttribute('src', 'img/teenager-w.png')
        } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'img/adult-w.png')
        } else {
            // Idoso
            img.setAttribute('src', 'img/old-w.png')
        }
     }
     res.style.textAlign = 'center'
     res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
     
     res.appendChild(img)
   }
}