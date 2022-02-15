// const numbers = [12412, 325, 23535, 23535, 5325];
// let sum = 0;
// for ( let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
    
//      sum = sum + element;
//     console.log(sum);
// }

function totalSum(numbers){
    let sum = 0;
    for ( let i = 0; i <numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const total = totalSum([102,522,346346,67654,4543]);
console.log(total);