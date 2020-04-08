function multiplicationTable(N:number,a:number){
    if(a==1){
        console.log(N*a);
        return 1;
    }else{
        multiplicationTable(N,a-1)
        console.log(N*a);
    }

}

multiplicationTable(2,10);