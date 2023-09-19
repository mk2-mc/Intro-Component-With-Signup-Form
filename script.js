const form = document.querySelector(".form");
const input = document.querySelectorAll(".input");

function validate() {
  let valid = true;
  
  // Input empty
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].classList.add("error");
      valid = false;
    }
  }
  
  // Email invalid
  const email = document.querySelector("#email");
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if (!emailFormat.test(email.value)) {
    email.classList.add("error");
    valid = false;
  }
  
  // Password invalid
  const password = document.querySelector("#password");
  const length = password.value.length;
  
  if ((length < 8) || (length > 24)) {
    password.classList.add("error");
    valid = false;
  }
  
  return valid;
}

// Input changed
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("input", () => {
    input[i].classList.remove("error");
  });
}

// Submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const isValid = validate();
  
  if (isValid) {
    // Hide form & show confirmation    
  }
});