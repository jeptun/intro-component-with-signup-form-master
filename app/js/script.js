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

firstName.addEventListener("keyup", () => {
  if (firstName.value == "") {
    firstNameLabel.style.display = "none";
    firstNameAlert.removeAttribute("hidden");
    firstName.style.outline = "1px solid #f00";
  }
   else if (firstName.value.length > 0) {
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
