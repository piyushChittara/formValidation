let form = document.getElementById("btn");
form.addEventListener("click", function () {
  let username = document.getElementById("usernameError");
  username.textContent = "";
  let password = document.getElementById("passwordError");
  password.textContent = "";
  let confirmpassword = document.getElementById("confirmpasswordError");
  confirmpassword.textContent = "";

  let user = document.getElementById("username");
  let uservalue = user.value.trim();
  let pass = document.getElementById("password");
  let passvalue = pass.value.trim();
  let conpass = document.getElementById("confirmpassword");
  let confirmpassvalue = conpass.value.trim();

  isValid = true;
  if (uservalue === "") {
    username.textContent = "please enter a username";
    isValid = false;
  }

  if (passvalue === "") {
    password.textContent = "please enter a password";
    isValid = false;
  }

  if (confirmpassvalue !== passvalue) {
    confirmpassword.textContent = "password do not match";
    isValid = false;
  }
});
