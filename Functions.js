
//simple function 
function findSum(a,b){
    let sum = 0;
    for(let i=0;i<10;i++){
      sum+=i;
    }
    return sum;
}
console.log(findSum(5,10));

//Arrow function
const findSumArrow = (a,b) => {
    let sum = 0;
    for(let i=0;i<10;i++){
      sum+=i;
    }
    return sum; 
}
console.log(findSumArrow(5,10));
// function to find sum of array elements


const findSumOfArray = (arr) => {
    let sum = 0;
    for(let i=0;i<arr.length;i++){
      sum+=arr[i];
    }
    return sum;
}
console.log(findSumOfArray([1,2,3,4,5]));
