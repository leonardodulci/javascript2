function canal(){
   let n1=10
   let n2=40
   let res = n1*n2
   console.log(res)
   
   if(res%2==0){
    return "par"
   } else{
    return "impar"
   }

}

let res = canal()
console.log(res)