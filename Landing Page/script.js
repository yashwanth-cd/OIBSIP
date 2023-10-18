"use strict";

const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
const inputEmail = document.getElementById("email");
const subscribeBtn = document.getElementById("btn-subscribe");

subscribeBtn.addEventListener("click", function () {
  const firstName = inputFirstName.value.trim();
  const lastName = inputLastName.value.trim();
  const email = inputEmail.value.trim();
  if (firstName !== "" && lastName !== "" && email !== "") {
    alert("Thank You for Subscribing to our Newsletter ✉️");
  } else {
    alert("Please Enter all Details");
  }
});
