function permute(x:string,l:number,r:number){
    if(l>r){
        console.log(x);
    }else{
        return;
    }
}

function swap(a:number,b:number,x:any){
    var len:number =x.length;
    if(a<len && b<len){
        if(typeof x=="string"){
            var y = x.split("");
            console.log(y);
            var temp= y[a];
            y[a]=y[b];
            y[b]=temp;
            console.log(y);
            return y.join("");
        }
    }else{
        return undefined;
    }
}

var sc:number[] = [1,2,3,4];
var x = sc.map(swap);

console.log(x);