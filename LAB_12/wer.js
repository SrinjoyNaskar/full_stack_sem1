// BMI Calculator
function calculateBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        throw new Error("Weight and height must be greater than zero.");
    }

    const bmi = weight / (height * height);
    return bmi;
}

let weight = parseFloat(prompt("Enter your weight in kilograms:"));
let height = parseFloat(prompt("Enter your height in meters:"));

if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid weight and height.");
} else {
    let bmi = calculateBMI(weight, height);
    alert(`Your BMI is: ${bmi.toFixed(2)}`);
}