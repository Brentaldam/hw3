console.log("Marriott's Output from Example 2");
const dayEntered = String(prompt("Enter a day of the week in the following format \"sun, mon, tue, wed, thu, fri, or sat\":"));
followingDay = "";
switch(dayEntered){
    case "sun":
        followingDay = "mon";
        console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`);
      break;
    case "mon":
        followingDay = "tue";
        console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`);
      break;
    case "tue":
        followingDay = "wed";
        console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`);
      break;
    case "wed":
        followingDay = "thu";
        console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`);
      break;
    case "thu":
        followingDay = "fri";
        console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`);
      break;
    case "fri":
        followingDay = "sat";
        console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`);
      break;
    case "sat":
        followingDay = "sun";
        console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`);
        break;
    default:
      console.log("Not a valid day")
  } 