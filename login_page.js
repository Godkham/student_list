var email = document.getElementById("email");
var password = document.getElementById("password");
var login_button = document.getElementById("login");

const admin = { email: "Peter@gmail.com", password: "Peterlikecat" };
login_button.addEventListener("click", function () {
  console.log(email.value);
  console.log(password.value);
  if (email.value == admin.email && password.value == admin.password) {
    alert("You have Login");
  } else {
    alert("Incorrect password or email");
  }
});
