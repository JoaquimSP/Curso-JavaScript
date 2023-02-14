let objeto = {
    nome: 'Joaquim',
    sexo: 'M',
    peso: 61.50,
    emagreceu(p=0){
       console.log('Emagreceu')
       this.peso -= p
 }}

objeto.emagreceu(1)
console.log(`${objeto.nome} pesa ${objeto.peso} kg`)
// console.log(objeto)