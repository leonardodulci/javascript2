/*
let n=0

while(n<=10){
    console.log(n)
    n++
}
console.log("fim do programa")
*/


//calculo de fatorial usando while:

let n = 10
let fat = 1

while(n>=1){
    fat*=n
    //fat = fat * n (mesma coisa)
    n--
}

console.log(fat)