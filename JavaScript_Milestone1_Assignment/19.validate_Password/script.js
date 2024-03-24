function validate() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const displayValidate = document.getElementById('validate');
  // displayValidate.innerText = "12"

  if(email.includes("@gmail.com") && password.length >= 8) {
      displayValidate.innerText = "valid email and password!";
      displayValidate.style.color = "green";
  }
  else {
      displayValidate.innerText = "invalid email or password!";
      displayValidate.style.color = "red";
  }
};

document.getElementById('submit-btn').addEventListener("click", validate);