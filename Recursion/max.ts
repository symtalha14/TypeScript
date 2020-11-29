function findMax(arr:number[],max:number=0,ind:number=0):number{
    if(ind==arr.length){
        return max;
    }else{
        // max=arr[ind];
        if(arr[ind]>max){
            max=arr[ind];
        }
        var max_=findMax(arr,max,ind+1);
    }
    return max_;
}

console.log(findMax([130,2023,4230,909,123,234,214,7868,4563,1264]));

