// This function takes a number as input and returns its cube
function cubeNumber(n) {
// Calculate the cube of the number
  let cube = n * n * n;
  return cube;
}

let n = Number(prompt("Enter a number to cube:")); // take input from user
let cube = cubeNumber(n); // call the function to calculate the cube
alert(`The cube of ${n} = ${cube}`);

function isAdult(age) {
  // Check if the age is 18 or above
  if (age >= 18) {
    return true; // The person is an adult
  } else {
    return false; // The person is not an adult
  }
}

let a = parseInt(prompt("Enter your age:")); // take input from user
let canVote = isAdult(a); // call the function to check if the person is an adult
if (canVote) {
  alert("You are eligible to vote.");
} else {
  alert("You are not eligible to vote.");
}

let age = Number(prompt("Enter your age:")); // take input from user
if (isAdult(age)) {
  alert("You are an adult.");
} else {
  alert("You are not an adult.");
}