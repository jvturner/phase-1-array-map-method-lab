const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

// // Input: Array name tutorials
// // Output: A new array with only the first letter of each word capitalized
// //  title case formatting

// will have to use the map array method to go over each element of the array 
// map() method takes in two arguments a callback and optional context


const titleCased = () =>{
  const Call = tutorials.map((string) =>{
    return string.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.substring(1)
    }).join(" ")
  });
  return Call;
}


