
/*
let f=function(...valores){
    let res=0
    for(v of valores){
    res+=v
    }
    return res
}

console.log(f(10,50))
*/

const f=new Function("v1","v2", "return v1+v2")  //funcao construtor anônima 

console.log(f(15,654))