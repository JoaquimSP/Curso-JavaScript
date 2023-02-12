let num = [5, 8, 2, 9 ,3]
num.push(1) // adiciona o valor 1 na primeira posição do vetor
num.sort() // ordena todos os vetores


console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4)
console.log(`O valor 4 está na posição ${pos}`) // como o valor 4 não existe, irá retornar o -1