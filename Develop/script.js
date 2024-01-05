// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordField = document.querySelector("#password");

//Variables
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
var specialSymbols = "!@#$%^&*()_+=";
var numeric = "0123456789";
var multiSelect = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function that generates a random password
function writePassword() {

  //Password Criteria
  var uppercaseLetter = confirm ("Would you like your password to include uppercase letters?");
  var lowercaseLetter = confirm ("Would you like your password to include lowercase letters?");
  var specialChar = confirm ("Would you like your password to include special characters?");
  var numberOption = confirm ("Would you like your password to include numbers?");
  var passwordLength = parseInt(prompt ("How long would you like your password? Choose between 8 to 128 characters"));

  //Validation for the length of the password
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("Your password length does not meet the criteria");
    return;
  }
  if (!uppercaseLetter && !lowercaseLetter && !specialChar && !numberOption) { 
    alert("Your password does not meet the criteria");
    return;
  }
  if (lowercaseLetter) { multiSelect += lowercaseABC; }
  if (uppercaseLetter) { multiSelect += uppercaseABC; }
  if (numberOption) { multiSelect += numeric; }
  if (specialChar) { multiSelect += specialSymbols; }

  let finalpassword = "";
  for (let i = 0; i < passwordLength; i++) {
    finalpassword += multiSelect.charAt(Math.floor(Math.random() * multiSelect.length));
  }
  passwordField.value = finalpassword;
}

