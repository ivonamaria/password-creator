// Array of special characters to be included in password
let specialCharactersArray = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
let numericCharactersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
let lowerCasedCharactersArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
let upperCasedCharactersArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];


// // Initialize an array with lowercase characters
// let lowerCasedCharactersArray = ['a', 'b', 'c', ...];

// // Initialize an array with uppercase characters
// let upperCasedCharactersArray = ['A', 'B', 'C', ...];

// // Initialize an array with numeric characters
// let numericCharactersArray = ['0', '1', '2', ...];

// // Initialize an array with special characters
// let specialCharactersArray = ['!', '@', '#', ...];

// Concatenate all the arrays into a single array
let allCharacters = lowerCasedCharactersArray
  .concat(upperCasedCharactersArray)
  .concat(numericCharactersArray)
  .concat(specialCharactersArray);

  
let passwordCriteria = [];
// Function to prompt user for password 
function getPasswordOptions() {
  
  let nextPrompt = false;

  // Regex expression for an integer - regex pattern can be used to check if a string is a valid representation of an integer number
  let regexInteger = /^[-+]?\d*$/;

  // Regex expression for a decimal
  let regexDecimal = /^\d*\.?\d*$/;

  let passwordPromptLength;

  while (!nextPrompt) {
    passwordPromptLength = prompt(
      "Enter the length of your password, any number between 8 and 64: "
    );
    passwordPromptLength = passwordPromptLength ? passwordPromptLength.trim() : "";
    if (
      regexInteger.test(passwordPromptLength) &&
      parseInt(passwordPromptLength) >= 8 &&
      parseInt(passwordPromptLength) <= 64
    ) {
      passwordLength = passwordPromptLength;
      nextPrompt = true;
    } else {
      if (
        regexInteger.test(passwordPromptLength) &&
        parseInt(passwordPromptLength) < 8
      ) {
        alert(
          `${passwordPromptLength} is less than 8. Enter an integer between 8 and 64`
        );
      } else if (
        regexInteger.test(passwordPromptLength) &&
        parseInt(passwordPromptLength) > 64
      ) {
        alert(
          `${passwordPromptLength} is more than 64. Enter an integer between 8 and 64`
        );
      } else if (
        passwordPromptLength &&
        regexDecimal.test(passwordPromptLength)
      ) {
        alert(
          `${passwordPromptLength} is a decimal. Enter an integer between 8 and 64`
        );
      } else if (!passwordPromptLength.trim()) {
        alert(`Error. Enter a number between 8 and 64`);
      } else {
        alert(
          `Your input \"${passwordPromptLength}\" is not an integer. Please try again with a number between 8 and 64`
        );
      }
    }
  }
  // Add password length to the output array 
  passwordCriteria.push(passwordLength);

  let lowerCaseAnswer = confirm(
    `Your password will have ${passwordLength} characters. Would you like to include lower case letters in your password? Click OK for yes or Cancel for no`
  );
  if (lowerCaseAnswer) {
    passwordCriteria.push(lowerCasedCharactersArray);
    passwordCriteria.push(getRandom(lowerCasedCharactersArray));
  }

  let upperCaseAnswer = confirm(
    "Would you like to include upper case letters in your password? Click OK for yes or Cancel for no"
  );
  if (upperCaseAnswer) {
    passwordCriteria[1] = passwordCriteria[1].concat(upperCasedCharactersArray);
    passwordCriteria[2] = passwordCriteria[2].concat(
      getRandom(upperCasedCharactersArray)
    );
  }

  let numericAnswer = confirm(
    "Would you like to include numbers in your password? Click OK for yes or Cancel for no"
  );
  if (numericAnswer) {
    passwordCriteria[1] = passwordCriteria[1].concat(numericCharactersArray);
    passwordCriteria[2] = passwordCriteria[2].concat(
      getRandom(numericCharactersArray)
    );
  }

  let specialCharactersAnswer = confirm(
    "Would you like to include special characters in your password? Click OK for yes or Cancel for no"
  );
  if (specialCharactersAnswer) {
    passwordCriteria[1] = passwordCriteria[1].concat(specialCharactersArray);
    passwordCriteria[2] = passwordCriteria[2].concat(
      getRandom(specialCharactersArray)
    );
  }

  // The Password Criteria is an array with 3 elements, the first is a password length (integer),
  //the second is an array of possible characters, the third one is the generated beginning of the password
  if (passwordCriteria.length === 1) {
    passwordCriteria.push(allCharacters);
    passwordCriteria.push("");
  }

  console.log(passwordCriteria);
  return passwordCriteria;
}

// Function for getting a random element from an array and rounder to the nearest decimal 
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function for getting a random integer
function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

// Function added to shuffle a string
function shuffle(s) {
  return s
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

// Function to generate password with user inputs
function generatePassword(passwordCriteria) {
  let password = "";
  let remainder;
  if (passwordCriteria[2] && passwordCriteria[2] !== "" ) {
    remainder = passwordCriteria[0] - passwordCriteria[2].length;
  }
  else {
    remainder = passwordCriteria[0];
  }
  if (remainder < passwordCriteria[0]) {
    for (let i = 0; i < remainder; i++) {
      password += getRandom(passwordCriteria[1]);
    }
  } else {
    for (let i = 0; i < remainder; i++) {
      password += getRandom(allCharacters);
    }
  }
  password += passwordCriteria[2];
  return shuffle(password);
}

// Get references to the ID generate element
let generateBtn = document.querySelector("#generate");

// Write password to the ID password input area
function writePassword() {
  let password = generatePassword(passwordCriteria);
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

passwordCriteria = getPasswordOptions();
writePassword(passwordCriteria);

// Added event listener to generate button (click)
generateBtn.addEventListener("click", writePassword);
