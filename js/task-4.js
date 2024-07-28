const userForm = document.querySelector(".login-form");

userForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const fieldEmail = document.querySelector('[name="email"]').value;
  const fieldPsw = document.querySelector('[name="password"]').value;

  if (fieldEmail == "" || fieldPsw == "") {
    alert("All form fields must be filled in");
    return;
  }

  const user = {
    email: fieldEmail,
    password: fieldPsw,
  };

  console.log(user);
  userForm.reset();
}
