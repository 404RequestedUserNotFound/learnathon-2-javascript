//For showing and hiding validation message in name field
function FullnameValidation() {
  var name = document.getElementById("fullname").value;
  var nameError = document.getElementById("nameError");
  var regexPattern = /^[A-Za-z\s.]+$/;

  if (name === "") {
    nameError.style.display = "none";
  } else if (!regexPattern.test(name) || name.length < 2) {
    nameError.style.display = "block";
    nameError.innerText = "Name can only contain alphabets, dot ('.'), space (' ') and characters (min 2).";
  } else {
    nameError.style.display = "none";
  }
}

document.getElementById("fullname").addEventListener("input", FullnameValidation);

//For showing and hiding validation message in password field
function PasswordValidation() {
  var password = document.getElementById("password").value;
  var passwordValidationMessage = document.getElementById(
    "passwordValidationMessage"
  );
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (password === "") {
    passwordValidationMessage.style.display = "none";
  } else if (!passwordRegex.test(password)) {
    passwordValidationMessage.style.display = "block";
    passwordValidationMessage.innerText = "The password must have at least 8 characters and contain at least 1 digit, 1 uppercase letter, and 1 lowercase letter.";
  } else {
    passwordValidationMessage.style.display = "none";
  }
}

document .getElementById("password").addEventListener("input", PasswordValidation);

//For showing and hiding validation message in confirm password field
function PasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var passwordmatchMessage = document.getElementById("passwordmatchMessage");
    
    if (confirmPassword === ""){
        passwordmatchMessage.style.display = "none";
    }
    else if (password !== confirmPassword){
        passwordmatchMessage.style.display = "block";
        passwordmatchMessage.innerText = "Password and Confirm Password do not match.";
    }
    else{
        passwordmatchMessage.style.display = "none";
    }
}

document.getElementById("password").addEventListener("input", PasswordMatch);
document.getElementById("confirmPassword").addEventListener("input", PasswordMatch);