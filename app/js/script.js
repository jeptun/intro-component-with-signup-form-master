"use strict";
/**
 * JS Test
 */
const testString = "Javascript test!";
console.log(testString);
const fruits = ["😀", "✨", "💀"];

fruits.map((fruit) => {
  console.log(fruit);
});

const form = document.getElementById("js-form");
const alerts = document.querySelectorAll(".js-alert");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const firstNameLabel = document.getElementById("first-name-label");
const firstNameAlert = document.getElementById("first-name-alert");

const lastNameLabel = document.getElementById("last-name-label");
const lastNameAlert = document.getElementById("last-name-alert");

const emailLabel = document.getElementById("email-label");
const emailAlert = document.getElementById("email-alert");

const passwordLabel = document.getElementById("password-label");
const passwordAlert = document.getElementById("password-alert");

firstName.addEventListener("keyup", () => {
  if (firstName.value == "") {
    firstNameLabel.style.display = "none";
    firstNameAlert.removeAttribute("hidden");
    firstName.style.outline = "1px solid #f00";
  } else if (firstName.value.length > 0) {
    firstNameAlert.setAttribute("hidden", "");
    firstNameLabel.style.display = "none";
    firstName.style.outline = "0";
  }

  if (/[0-9]/.test(firstName.value)) {
    firstNameAlert.removeAttribute("hidden");
    firstName.style.outline = "1px solid #f00";
    firstNameLabel.style.display = "none";
  }
});

lastName.addEventListener("keyup", () => {
  if (lastName.value == "") {
    lastNameLabel.style.display = "none";
    lastNameAlert.removeAttribute("hidden");
    lastName.style.outline = "1px solid #f00";
  } else if (lastName.value.length > 0) {
    lastNameAlert.setAttribute("hidden", "");
    lastNameLabel.style.display = "none";
    lastName.style.outline = "0";
  }
  if (/[0-9]/.test(lastName.value)) {
    lastNameAlert.removeAttribute("hidden");
    lastName.style.outline = "1px solid #f00";
    lastNameLabel.style.display = "none";
  }
});

email.addEventListener("keyup", () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    emailAlert.setAttribute("hidden", "");
    emailLabel.style.display = "none";
    email.style.outline = "0";
  } else {
    emailLabel.style.display = "none";
    emailAlert.removeAttribute("hidden");
    email.style.outline = "1px solid #f00";
  }
});

password.addEventListener("keyup", () => {
  if (password.value == "") {
    passwordLabel.style.display = "none";
    passwordAlert.removeAttribute("hidden");
    password.style.outline = "1px solid #f00";
  } else if (password.value.length > 0) {
    passwordLabel.style.display = "none";
    passwordAlert.removeAttribute("hidden");
    password.style.outline = "1px solid #f00";
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password.value)) {
      passwordAlert.setAttribute("hidden", "");
      passwordLabel.style.display = "none";
      password.style.outline = "0";
    }
  }
});
