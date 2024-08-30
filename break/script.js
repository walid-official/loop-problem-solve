// problem-1
//********* 



// for(let i = 1; i <= 200; i++){
//     if(i !== 101){
//         console.log(i);
//     }
//     else{
//         break;
//     }
// }



// problem-2
//********* 



// let sum = 0;
// for(let num = 1; true; num++){
//     sum += num;
//     if(sum >= 100){
//         break;
//     }
//     console.log(sum);
// }
// console.log(sum);

// let sum = 0;           // Initialize sum
// let currentNumber = 1; // Start from number 1

// while (true) {
//   sum += currentNumber; // Add currentNumber to sum

//   if (sum >= 100) {     // Check if sum reaches or exceeds 100
//     break;              // Exit the loop if condition is met
//   }

//   currentNumber++;      // Move to the next number
//   console.log(sum);
// }

// console.log(sum);



// problem-3
//********* 


for(let i = 1; i <= 20; i++){
  let isPerfectSquare = false;
  for(let j = 1; j*j <= i; j++){
    if(j*j === i){
        isPerfectSquare = true;
        break;
    }
  }
  if (!isPerfectSquare)
    console.log(i);
}