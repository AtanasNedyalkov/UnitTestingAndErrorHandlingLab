function solve (arr, startIndex =0 , endIndex = arr.length-1){
let result = 0;
if(!Array.isArray(arr)){
    return NAN;
}
if(startIndex<0){
    startIndex=0;
}
if(endIndex>=arr.length-1){
    endIndex=arr.length-1;
}
for(let i = startIndex;i<=endIndex;i++){
    result += arr[i];
}
return result;
}
let res = solve([10, 20, 30, 40, 50, 60], 3, 300)
console.log(res);