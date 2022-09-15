
console.log("Marriott's Output from Example 2");
gradeStanding = "";
const name = String(prompt("Enter your name:"));
const number = Number(prompt("Enter number of units completed at college:"));

if(number >= 0 && number <= 30){
    gradeStanding = "Freshman";
}
else if(number >= 31 && number <= 60){
    gradeStanding = "Sophomore";
}
else if(number >= 61 && number <= 90){
    gradeStanding = "Junior";
}
else if(number > 90){
    gradeStanding = "Senior";
}

if(number >=0 ){
    console.log(`Hello ${name} \nYour grade standing is: ${gradeStanding}`);
}
else{
    console.log(`Sorry, ${number} is not a valid entry.`);
}