/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...
//Define the function
const joinList = function (array) {
  //Declare a variable to store the concepts
  let concepts = "";
  //Iterate over array using for loop
  for (let i = 0; i < array.length; i++) {
    //Add comma to the concept if it is not the last concept in the array
    if (i !== array.length - 1) {
      concepts += array[i] + ", "
    } else {
      //Otherwise add the concept without a comma
      concepts += array[i]
    }
  }
  
  //Return an output of concepts
  return concepts; 
}
// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);