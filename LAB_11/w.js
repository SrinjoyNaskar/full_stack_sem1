// while loop
console.log("---while loop---");

let i =1;
while(i<=10){
    console.log(`2 x ${i} = ${2*i}`);
    i++;
}

// do while loop
console.log("---do while loop---");

let j = 1;
do{
    console.log(`3 x ${j} = ${3*j}`);
    j++;
}while(j<=10);


// sum of first ten natural number
let k = 1;
let sum = 0;

do {
    sum += k;
    k++;
} while (k <= 10);

console.log(sum);

// prompt 
console.log("---prompt---");
let named = prompt("Enter your name: ");
alert(`Hello ${named}`);

// confirm
console.log("---confirm---");

let isConfirmed = confirm("Are you sure you want to delete this file?");
if (isConfirmed) {
  console.log("File deleted");
} else {
  console.log("File not deleted");
}

console.log(Math.min(65,76,23,10));