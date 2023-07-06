/*
function soma(n1=0,n2=0){
    console.log(n1+n2)
}

soma(10, 5)
*/
const VALOR_PADRAO = 0
function soma(n1=VALOR_PADRAO,n2=VALOR_PADRAO){
    return n1+n2
}

console.log(soma(10,20))