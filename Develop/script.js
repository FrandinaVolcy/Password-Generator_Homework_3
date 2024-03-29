// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//Variables
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ"
var lowercaseABC = "abcdefghijklmnopqrstuvwxyz"
var specialSymbols = "!@#$%^&*()_+="
var numbers = "0123456789"
var multiSelect = "";

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//Function that generates a random password
function generatePassword() {

  //Password Criteria
  var uppercaseLetter = confirm ("Your password should have an uppercase letter")
  var lowercaseLetter = confirm ("Your password should have a lowercase letter")
  var specialChar = confirm ("Your password should have a symbol")
  var numberOptions = confirm ("Your password should have a number")
  var keyLength = prompt ("Password must be between 8 and 128 characters.");

  //Length Criteria
  if (!keyLength || keyLength < 8 || keyLength > 128) {
    alert("Your password length does not meet the criteria");
    return;
  }
  if (uppercaseABC === false && lowercaseABC === false && specialSymbols === false && numbers === false) {
    alert("Your password does not meet the criteria");
    return;
  }
  if (lowercaseLetter) { multiSelect += lowercaseABC; }
  if (uppercaseLetter) { multiSelect += uppercaseABC; }
  if (numberOptions) { multiSelect += numbers; }
  if (specialChar) { multiSelect += specialSymbols; }

  //Final Password
  let finalpassword = "";
  for (let i = 0; i < keyLength; i++) {
    finalpassword += multiSelect.charAt(Math.floor(Math.random() * multiSelect.length));
  }
  passwordText.value = finalpassword;
}

