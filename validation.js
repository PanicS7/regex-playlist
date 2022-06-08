const inputs = [...document.querySelectorAll("input")];
const pattern = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{8,20}$/i,
  telephone: /^[\d]{11}$/,
  slug: /^[a-z\d-]{8,20}$/
}

inputs.map(input => {
  input.addEventListener("keyup",validate);
})

function validate(e) {
  let inputValue = e.target.value;
  let inputField = e.target.name;

  if (pattern[inputField].test(inputValue)) {
    e.target.className = "valid";
    console.log("valid");
  }
  else {
    e.target.className = "invalid";
    console.log("invalid");
  }
}