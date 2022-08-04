let largestNum = 0;
let secondLargestNum = 0;
let array= [1,4,2,3,5]
// let array1= [1,4,2,3,5,9,-8]
// let array2= [1,4,2,3,5]

for(let i = 1; i < array.length; i++) {
    if(array[i] > largestNum) {
    secondLargestNum = largestNum;
    largestNum = array[i];  
    }
  else if(array[i] !== largestNum && array[i] > secondLargestNum) {
  secondLargestNum = array[i];
  }
};
let sum = largestNum + secondLargestNum 
console.log("Largest Number in the array is " + largestNum);
console.log("Second Largest Number in the array is " + secondLargestNum);
console.log("Sum " + sum);