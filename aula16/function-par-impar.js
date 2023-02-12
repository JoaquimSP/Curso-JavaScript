function parimpar(num){
    if(num%2 == 0){
        return `Número: ${num} é par!`
    } else {
        return `Número: ${num} é ímpar!`
    }
}

console.log(parimpar(4))