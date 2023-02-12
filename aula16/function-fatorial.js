// 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(num){
    var fat = 1
    for(count = num; count > 1; count--){
       fat *= count
    } 
    return fat
}

console.log(fatorial(5))