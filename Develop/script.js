// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

//Variables
  var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
  var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
  var specialSymbols = "!@#$%^&*()_+=";
  var numeric = "0123456789";
  var multiSelect = [];
  var optionVariable = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Function that generates a random password
function writePassword()

//Password Criteria
var uppercaseLetter = confirm ("Would you like your password to include uppercase letters?");
var lowercaseLetter  = confirm ("Would you like your password to include lowercase letters?");
var specialChar = confirm ("Would you like your password to include special characters?");
var number = confirm ("Would you like your password to include numbers?");
var passwordLength = prompt ("How long would you like your password? Choose between 8 to 128 characters");

//Function for the length of the password
  if (PasswordLength, 8 || PasswordLength > 128) {
    return("Your password does not meet the criteria");
    var passwordLength = prompt("Password must be between 8 and 128 characters.");
  }

  if (uppercaseABC === false && lowercaseABC === false && specialSymbols === false && numeric === false) {
    return "Your password does not meet the criteria";
    var uppercaseLetter = confirm ("Would you like your password to include uppercase letters?");
var lowercaseLetter  = confirm ("Would you like your password to include lowercase letters?");
var specialChar = confirm ("Would you like your password to include special characters?");
var number = confirm ("Would you like your password to include numbers?");
  };
}

if (lowercaseABC) { multiSelect += lowercase; }
if (uppercaseABC) { multiSelect += uppercaseABC; }
if (number) { multiSelect += numbers; }
if (specialSymbols) { multiSelect += specialSymbols; }

let finalpassword = ""
for (let i = 0; i < passwordLength; i++) {
  let rng = multiSelect.charat[Math.floor(Math.random() * multiSelect.length)];
  finalpassword = finalpassword + multiSelect[rng];
  return finalpassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

