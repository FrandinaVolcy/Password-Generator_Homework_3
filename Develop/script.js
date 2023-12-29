// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ"
  var lowercaseABC = "abcdefghijklmnopqrstuvwxyz"
  var specialSymbols = "!@#$%^&*()_+="
  var numeric = "0123456789"
  var multiSelect = [];

  if (keyLength, 8 || keyLength > 128) {
    alert("Your password does not meet the criteria");
    var keyLength = prompt("Password must be between 8 and 128 characters.");
  }

  if (uppercaseABC === false && lowercaseABC === false && specialSymbols === false && numeric === false) {
    return "Your password does not mee the criteria";
  };
}

var uppercaseABC = confirm("Your password should have an uppercase letter")
var lowercaseABC = confirm("Your password should have an lowercase letter")
var specialSymbols = confirm("Your password should have a symbol")
var numeric = confirm("Your password should have a number")


if (lowercaseABC) { multiSelect += lowercase }
if (uppercaseABC) { multiSelect += uppercaseABC; }
if (number) { multiSelect += numbers; }
if (specialSymbols) { multiSelect += specialSymbols; }

let finalpassword = ""
for (let i = 0; i < keyLength; i++) {
  let rng = [Math.floor(Math.random() * multiSelect.length)];
  finalpassword = finalpassword + multiSelect[rng];
  return finalpassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
