// Assignment Code
var generateBtn = document.querySelector("#generate");

alert("Welcome to my password generator!");
alert("Follow the steps to generate a secure password! Selcting Yes will geenerate a more secure password!");

if (confirm("Would you like numbers")) {
  txt = "Ok";
} else {
  txt = "Ok";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = 8,
      charset = "aABCDEFGHIJKLMNOPQRSTUVWXYZ" +  
      "abcdefghijklmnopqrstuvwxyz0123456789@#$"
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);