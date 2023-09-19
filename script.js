const form = document.querySelector(".form");
const input = document.querySelectorAll(".input");
const errorText = document.querySelectorAll(".error-text");

function validate() {
  let valid = true;
  
  for (let i = 0; i < input.length; i++) {
    const name = input[i].getAttribute("name");
    
    // Input empty
    if (input[i].value === "") {
      input[i].classList.add("error");
      errorText[i].classList.remove("hidden");
      errorText[i].innerHTML = `${name} cannot be empty`;
      valid = false;
    } else {
      
      // Email invalid
      const emailText = document.querySelector(".email-text");
      const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
      if ((name === "Email")
      && (!emailFormat.test(input[i].value))) {
        input[i].classList.add("error");
        emailText.classList.remove("hidden");
        emailText.innerHTML = "Looks like this is not an email";
        valid = false;        
      }
      
      // Password invalid
      const passwordText = document.querySelector(".password-text");
      const length = input[i].value.length;
      
      if ((name === "Password")
      && ((length < 8) || (length > 24))) {
        input[i].classList.add("error");
        passwordText.classList.remove("hidden");
        passwordText.innerHTML = "Password must be between 8 and 24 characters";
        valid = false;        
      }
    }
  }
  
  return valid;
}

// Input changed
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("input", () => {
    input[i].classList.remove("error");
    errorText[i].classList.add("hidden");
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