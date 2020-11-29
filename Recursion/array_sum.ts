function add(arr:number[],ind:number=0,sum:number=0){
    if(arr[ind]!=undefined){
        sum+=arr[ind];
        return add(arr,ind+1,sum);
    }else{
        return sum;
    }
}

var arry = [1,2,3,4,5];
var s = add(arry);
console.log(arry, "Sum: ", s);