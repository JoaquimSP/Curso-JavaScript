function carregar() {
  var msg = window.document.getElementById('message')
  var img = window.document.getElementById('image')

  var data = new Date()
  var hora_atual = data.getHours()

  msg.innerHTML = `Agora são ${hora_atual} horas.`

  if(hora_atual >= 0 && hora_atual < 12) {
    img.src = '../assets/img/morning.png'
    //document.body.style.background = '#ffdc44'
  } else if (hora_atual >= 12 && hora_atual <= 18) {
    img.src = '../assets/img/afternoon.png'
    //document.body.style.background = '#b0e0fe'
  } else {
    img.src = '../assets/img/night.png'
    //document.body.style.background = '#571e55'
  }
}