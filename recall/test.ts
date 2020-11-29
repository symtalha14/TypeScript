function factorial(n:number){
    if(n==1){return n;}
    return n*factorial(n-1);
}

var f = factorial(2);
console.log(f);