const form = document.querySelector(".form");
const input = document.querySelectorAll(".input");
const errorText = document.querySelectorAll(".error-text");
const terms = document.querySelector(".terms");
const confirmation = document.querySelector(".confirmation");

function validate() {
  let valid = true;
  
  for (let i = 0; i < input.length; i++) {
    const name = input[i].getAttribute("name");
    let check = true;
    
    // Input empty
    if (input[i].value.trim() === "") {
      check = false;
      errorText[i].innerHTML = `${name} cannot be empty`;
    } else {
      
      // Email invalid
      const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
      if ((name === "Email")
      && (!emailFormat.test(input[i].value.trim()))) {
        check = false;
        errorText[i].innerHTML = "Looks like this is not an email";    
      }
      
      // Password invalid
      const length = input[i].value.length;
      
      if ((name === "Password")
      && ((length < 8) || (length > 24))) {
        check = false;
        errorText[i].innerHTML = "Password must be between 8 and 24 characters";      
      }
    }
    
    // Show error message
    if (!check) {
      valid = false;
      input[i].classList.add("error");
      errorText[i].classList.remove("hidden");      
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
  
  if (validate()) {
    form.classList.add("hidden");
    terms.classList.add("hidden");
    confirmation.classList.remove("hidden");
  }
});