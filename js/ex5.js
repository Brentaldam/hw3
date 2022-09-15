console.log("Marriott's Output from Example 5");

const pwd = "secret";


for (let i = 1; i < 4; i++) {
    attempt = String(prompt("Please enter password:"));
if(attempt == pwd){
    console.log(`You entered the correct password after ${i} attempt(s)`); 
    throw new Error("Congrats you're in!");
}

}
console.log("Your account is locked!  You failed to enter the correct password 3 times");
