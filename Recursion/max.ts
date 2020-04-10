function findMax(arr:number[],max:number=0,ind:number=0){
    if(ind==arr.length){
        console.log(max);
        return;
    }else{
        // max=arr[ind];
        if(arr[ind]>max){
            max=arr[ind];
        }
        findMax(arr,max,ind+1);
    }
}

findMax([10000 ,23 ,2323 ,21]);

