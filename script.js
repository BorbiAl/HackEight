let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});
let visibilityButtons = document.querySelectorAll(".visibility-button");
function myFunction() {
  var x = document.getElementById("password ele");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function myFunction1() {
  var x = document.getElementById("password1 ele");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    emailError.textContent = "";
  } else {
    emailError.textContent = "Please enter a valid email address.";
  }
});

emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    emailError.textContent = "";
  } else {
    emailError.textContent = "Please enter a valid email address.";
  }
});
function checkform() {
    var f = document.forms['theform'].elements;
    var fieldsMustBeFilled = true;
    var inputFields = Array.from(f).filter(field => field.type === 'text' || field.type === 'email' || field.type === 'password');

    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value.length == 0)
            fieldsMustBeFilled = false;
    }

    if (fieldsMustBeFilled) {
        document.getElementById("form-btn").disabled = false;
    }
    else {
        document.getElementById("form-btn").disabled = true;
    }
}
function checkform1() {
    var f1 = document.forms['theform1'].elements;
    var fieldsMustBeFilled1 = true;
    var inputFields1 = Array.from(f1).filter(field => field.type === 'text' || field.type === 'email' || field.type === 'password');

    for (let i = 0; i < inputFields1.length; i++) {
        if (inputFields1[i].value.length == 0)
            fieldsMustBeFilled1 = false;
    }

    if (fieldsMustBeFilled1) {
        document.getElementById("form-bt").disabled = false;
    }
    else {
        document.getElementById("form-bt").disabled = true;
    }
}