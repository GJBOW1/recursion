// To Do 1 - Gregg Bowen


// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.



function rSigma(num, sum = 0){
    num = Math.floor(num)
    if(num < 1) {
        return sum
    }
    else {
        sum += num
        return rSigma(num-1,sum)
    }
}

console.log(rSigma(2.5))
console.log(rSigma(5))
console.log(rSigma(-1))

// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6). 

function rFact(num, sum = 1){
    num = Math.floor(num)
    if(num < 0 || num === 0) {
        return sum
    }
    else {
        sum *= num
        return rFact(num-1,sum)
    }
}


console.log(rFact(6.5))
console.log(rFact(0))
console.log(rFact(3))


//The below is an unrelated example of using a recursive function to count down (and use the parameter as a persistent variable that can be fed into each function call.)

// function count_down_recursion(num,str = ""){
//     if (num < 1) {
//         return "done"
//     }
//     else {
//         str += String(num)
//         count_down_recursion(num-1,str)
//     }
// }

// console.log(count_down(9))