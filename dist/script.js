"use strict";const testString="Javascript test!";console.log(testString);const fruits=["😀","✨","💀"];fruits.map((e=>{console.log(e)}));const form=document.getElementById("js-form"),alerts=document.querySelectorAll(".js-alert"),firstName=document.getElementById("first-name"),lastName=document.getElementById("last-name"),email=document.getElementById("email"),password=document.getElementById("password"),firstNameLabel=document.getElementById("first-name-label"),firstNameAlert=document.getElementById("first-name-alert");firstName.addEventListener("keyup",(()=>{""==firstName.value?(firstNameLabel.style.display="none",firstNameAlert.removeAttribute("hidden"),firstName.style.outline="1px solid #f00"):firstName.value.length>0&&(firstNameAlert.setAttribute("hidden",""),firstNameLabel.style.display="none",firstName.style.outline="0"),/[0-9]/.test(firstName.value)&&(firstNameAlert.removeAttribute("hidden"),firstName.style.outline="1px solid #f00",firstNameLabel.style.display="none")}));
//# sourceMappingURL=script.js.map