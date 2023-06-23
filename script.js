// Assignment code here
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*()_+-=`~{}[]:;<>?/.,"

// Function to run when clicking Generate Password
function generatePassword(){
  // Start of series of prompts
  let passwordLength = prompt("Choose a password length between 8 and 128 characters");
  if( passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length");
    return "";
  }
  // Selecting Criteria
  let includeLowerCase = confirm("Include lowercase characters?");
  let includeUpperCase = confirm("Include uppercase characters?");
  let includeNumeric = confirm("Include numeric characters?");
  let includeSpecialChars = confirm("Include special characters?");
  // Validation that user selected at least one option
  if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecialChars) {
    alert("At least one character type should be selected");
    return "";
  }
  // Setting up all possible characters the user selected
  let possibleChars = "";
  if (includeLowerCase){
    possibleChars += lowerCaseChars
  }
  if (includeUpperCase){
    possibleChars += upperCaseChars
  }
  if (includeNumeric){
    possibleChars += numericChars
  }
  if (includeSpecialChars){
    possibleChars += specialChars
  }
  
  let password = ""
  // Looping through all possible characters for length specified by user
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars[randomIndex];    
  }
  // return password back to writePassword() function
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
