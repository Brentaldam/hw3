console.log("Marriott's Output from Example 7");
const promptInput = prompt("Enter time as three values: hours, minutes, seconds (separated by commas):");
const values = promptInput.split(",")
if(values[0] < 0 || values[0] > 24 || values[1] < 0 || values[1] > 60 || values[2] < 0 || values[2] > 60 )
{
    console.log("One or more of the values inputed are invalid.");
    throw new Error("Please reload and try again.");
}
else{
    console.log(`Time input: ${values[0]}h${values[1]}m${values[2]}s`);
  
    if((parseInt(values[2])+1)==60)
    {
      values[2]=0;
      add1=1;
    }
    else
    {
      values[2]=parseInt(values[2])+1;
      add1=0;
    }
    if((parseInt(values[1])+add1)==60)
    {
      values[1]=0;
      add1=1;
    }
    else
    {
      values[1]=parseInt(values[1])+add1;
      add1=0;
    }
    if((parseInt(values[0])+add1)==24)
    {
      values[0]=0;
      add1=1;
     }
    else
    {
      values[0]=parseInt(values[0])+add1;
      add1=0;
   }
    console.log(`One second later:${values[0]}h${values[1]}m${values[2]}s`);
}

