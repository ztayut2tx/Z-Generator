// proclaimed arrays
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
var symbols = ["!", "@", "#", "$", "%", "&"];
var getBig = "";
var space = [];
// proclaimed confirms
var Qa
var confirmSymbols;
var confirmNumbers;
var confirmLowCase;
var confirmUpCase;
// variable for users selections from prompts
var choices;
// command to change alphabet array to upper case.
var toUpper = alphabet.map(alphabet => alphabet.toUpperCase());
     

    


//variable for upper case alphabet
var alpha = toUpper;
//button reference
var GeeBtn = document.querySelector("#generate");

GeeBtn.addEventListener("click", function () {
    gp = generateP();
    document.getElementById("password").placeholder = gp;
});
//function to generate random numbers based on user choices
function generateP() {
//initial prompt after clicking button
    Qa = parseInt(prompt("Your new password can be between 8 and 128 characters along, please enter a number"));
//prompt if proper value wasnt inputed
    if (!Qa) {
        alert("This needs a Number");
    }
   
    else if (Qa < 7 || Qa > 129) {

        Qa = parseInt(prompt("Choose beetween 8 and 128"));
    }
// password criteria section which allows us to get the users choices
    else {
         confirmSymbols = confirm("Will this password contain symbols?");
         confirmNumbers = confirm("Will this password contain number?");
         confirmLowCase = confirm("Will this password contain lower case letters?");
         confirmUpCase = confirm("Will this password contain upper case letters?");

    };

    if (!confirmSymbols && !confirmNumbers && !confirmLowCase && !confirmUpCase) {
        choices = alert("User must set password criteria!");
    }

    else if (confirmSymbols && confirmNumbers && confirmUpCase) {
        choices = symbols.concat(numbers, alpha);
    }

    else if (confirmSymbols && confirmNumbers && confirmLowCase) {
        choices = symbols.concat(number, alphabet);
    }

    else if (confirmSymbols && confirmLowCase && confirmUpCase) {
        choices = symbols.concat(alphabet, alpha);
    }

    else if (confirmSymbols && confirmNumbers) {
        choices = symbols.concat(numbers);
    }

    else if (confirmSymbols && confirmLowCase) {
        choices = symbols.concat(alphabet);
    }

    else if (confirmSymbols && confirmUpCase) {
        choices = symbols.concat(alpha);
    }

    else if (confirmLowCase && confirmUpCase) {
        choices = alphabet.concat(alpha);
    }

    else if (confirmLowCase && confirmNumbers) {
        choices = alphabet.concat(numbers);
    }

    else if (confirmUpCase && confirmNumbers) {
        choices = alpha.concat(numbers);
    }

    else if (confirmNumbers) {
        choices = numbers;
    }

    else if (confirmSymbols) {
        choices = symbols;
    }

    else if (confirmLowCase) {
        choices = alphabet;
    }

    else if (confirmUpCase) {
        choices = space.concat(alpha);
    };
//this represents where the generated password will be stored.
    var password = [];
//the equation to generate random numbers, takes the user choices and does random math based on the items in the length of all arrays selected.
    for (var i = 0; i < Qa; i++){
        var picks = choices[Math.floor(Math.random()*choices.length)];
        password.push(picks);
    }

    var gp = password.join("");
    
    UserInput(gp);
    
    return gp;
};
// sends new password to display box.
function UserInput(gp) {
    document.getElementById("password").textContent = gp;
}


