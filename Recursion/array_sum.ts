function sumArray(l:number,a:number[],L?:number){
    if(l==1){
        console.log(a[L-1]);
        return;
    }else{
        L=a.length;
        a[L-1]+=a[L-l];
        sumArray(l-1,a,L);
    }
}



var b=[1,2,3,4,5,6,7,8,9,10,11,12,13];
sumArray(b.length, b);