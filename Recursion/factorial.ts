function fact(N:number){
    if(N==1){
        return 1;
    }else{
        return N*fact(N-1);
    }
}

console.log(fact(4));