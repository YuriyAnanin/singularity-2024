const form = document.querySelector("form");
const outputText = document.querySelector(".output-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");

  const emailRegex = /^\S+@\S+\.\S+$/;

  console.log(emailRegex.test(email) + "  " + email);

  if (name.length < 1 || email.length < 1 || !emailRegex.test(email)) {
    alert("Fields are not valid!");
  } else {
    alert("Fields are valid!");
  }
});
