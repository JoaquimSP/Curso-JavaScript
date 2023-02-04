function carregar() {
  var msg = window.document.getElementById('message')
  var img = window.document.getElementById('image')

  var data = new Date()
  var hora_atual = data.getHours()

  msg.innerHTML = `Agora são ${hora_atual} horas.`
  if(hora_atual >= 0 && hora_atual < 12) {
    img.src = '../assets/img/morning.png'
  } else if (hora_atual >= 12 && hora_atual <= 18) {
    img.src = '../assets/img/afternoon.png'
  } else {
    img.src = '../assets/img/night.png'
  }
}