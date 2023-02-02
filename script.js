// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Create variables

function generatePassword(length, includeSpecial, includeNumeric, includeLowercase, includeUppercase) {
  // Initialize the password variable
  var password = "";

  // Initialize an array to store all of the characters that will be included in the password
  var characterTypes = [];

  // If includeSpecial is true, add the special characters array to characterTypes
  if (includeSpecial) {
    characterTypes = characterTypes.concat(specialCharacters);
  }

  // If includeNumeric is true, add the numeric characters array to characterTypes
  if (includeNumeric) {
    characterTypes = characterTypes.concat(numericCharacters);
  }

  // If includeLowercase is true, add the lowercase characters array to characterTypes
  if (includeLowercase) {
    characterTypes = characterTypes.concat(lowerCasedCharacters);
  }

  // If includeUppercase is true, add the uppercase characters array to characterTypes
  if (includeUppercase) {
    characterTypes = characterTypes.concat(upperCasedCharacters);
  }
// Prompt user for password options using Function 

// Get references to the generate button
var generateBtn = document.querySelector('#generate');

// Write password to the password textarea
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);