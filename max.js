/* const defence = 234325;
const business = 365236;
const minister = 23325; */
/* if ( defence > business && defence > minister){
    console.log("Defence er power beshi");
}
else if ( business > defence && business > minister){
    console.log("business er power beshi");
}
else{
    console.log('Minister is big than defence');
} */

// for multiline comment in vs code " shift + alt + A"
/* const highest = Math.max(defence, business, minister);
console.log(highest); */
// const first = 452;
// const second = 4582;
/* var largest = 2398235;
var largest1 = 23986235;
var largest2 = 239825435;
console.log(Math.max(largest, largest1, largest2)); */
/* function findLargest (first, second, third){
    if(first > second && first > third){
        return first;
    }
    else if(second > third && second > first){
        return second;
    }
    else if(third > second && third > first){
        return third;
    }
}
var largest = findLargest(93289, 2305390, 043943);
console.log('The largest number is : ', largest); */

function findSmallest (first, second, third){
    if(first < second && first < third){
        return first;
    }
    else if(second < third && second < first){
        return second;
    }
    else if(third < second && third < first){
        return third;
    }
}
var largest = findSmallest(93289, 2305390, 043943);
console.log('The largest number is : ', largest);