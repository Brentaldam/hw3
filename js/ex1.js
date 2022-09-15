
console.log("Marriott's Output from Example 1");
const number = Number(prompt("Enter a number 1-100:"));
if ((number >= 0) && (number <= 100)) {
    console.log(`Thank you! You entered ${number}, a valid number.`);
  }
else{
    console.log(`Sorry, ${number} is not a valid entry.`);
}