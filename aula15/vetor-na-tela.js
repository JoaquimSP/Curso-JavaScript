valores = [3, 7, 1, 9, 11, 4]

// console.log(valores)


// for maior

/* for(pos = 0; pos < valores.length; pos++){
    // console.log(valores[pos])
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

// for menor e mais simples

for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
