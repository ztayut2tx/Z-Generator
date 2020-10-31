// Code
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*";
var charSet = "";

var confirmLength = "";
var confirmSymbols;
var confirmNumbers;
var confirmLowCase;
var confirmUpCase;


function generateP() {
    var confirmLength = (prompt("How many character's would you like to have in your password?"));

    while (confirmLength <= 7 || confirmLength >= 129) {
        alert("Password Length must be between 8-128 characters");
        var confirmLength = (prompt("How many character's would you like to have in your password?"));
    }

    alert("your password will be" + confirmLength + "characters long");

    var confirmSymbols = confirm("Click OK to include symbols");
    var confirmNumbers = confirm("Click OK to include numbers");
    var confirmLowCase = confirm("Click OK to include lower case letters");
    var confirmUpCase = confirm("Click OK to include upper case letters");

    while (confirmUpCase === false && confirmLowCase === false && confirmNumbers === false && confirmSymbols === false) {
        alert("You must choose at least one");
        var confirmSymbols = confirm("Click OK to include symbols");
        var confirmNumbers = confirm("Click OK to include numbers");
        var confirmLowCase = confirm("Click OK to include lower case letters");
        var confirmUpCase = confirm("Click OK to include upper case letters");
    }

    var passwordChar = []

    if (confirmSymbols) {
        passwordChar = passwordChar.concat(symbols)
    }

    if (confirmNumbers) {
        passwordChar = passwordChar.concat(numbers)
    }

    if (confirmLowCase) {
        passwordChar = passwordChar.concat(lowCase)
    }

    if (confirmUpCase) {
        passwordChar = passwordChar.concat(upCase)
    }

    console.log(passwordChar)

    var randomPassword = "";

    for (var i = 0; i < confirmLength; i++) {
        var randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
        console.log(randomPassword);
    }

    return randomPassword;
}

function writePassword() {
    var password = generateP();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

