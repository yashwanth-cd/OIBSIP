const section2 = document.querySelector(".section-2");
const navbar = document.querySelector(".nav-bar");

// Adding smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1); // Remove the "#" from the href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// DOM elements for the media icons
const facebook = document.getElementById("facebook");
const whatsapp = document.getElementById("whatsapp");
const linkedIn = document.getElementById("linked-in");

// Event Listeners for media icons
linkedIn.addEventListener("click", function () {
  window.open(
    "https://www.linkedin.com/in/yashwanth-sai-c-5562851b2/",
    "_blank"
  );
});

whatsapp.addEventListener("click", function () {
  window.open("https://www.instagram.com/i_can_code7/", "_blank");
});

facebook.addEventListener("click", function () {
  window.open("https://www.facebook.com/yashwanth.sai.1217/", "_blank");
});

// Newsletter details check
const inputEmail = document.getElementById("email");
const subscribeBtn = document.getElementById("btn-subscribe");
function subEvent() {
  const email = inputEmail.value.trim();
  if (email !== "" && email.includes("@")) {
    alert("Thank You for Subscribing to our Newsletter ✉️");
  } else {
    alert("Please Enter Your Email");
  }
  inputEmail.blur();
  inputEmail.value = "";
}
subscribeBtn.addEventListener("click", subEvent);
inputEmail.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    subEvent();
  }
});

// Dom elements for contact details
const facebookContact = document.getElementById("facebook-contact");
const whatsappContact = document.getElementById("whatsapp-contact");
const linkedInContact = document.getElementById("linked-in-contact");
linkedInContact.addEventListener("click", function () {
  window.open(
    "https://www.linkedin.com/in/yashwanth-sai-c32/",
    "_blank"
  );
});

whatsappContact.addEventListener("click", function () {
  window.open("https://www.instagram.com/i_can_code7/", "_blank");
});

facebookContact.addEventListener("click", function () {
  window.open("https://www.facebook.com/yashwanth.sai.1217/", "_blank");
});

// Implementing a sticky Nav bar
const section2Coords = section2.getBoundingClientRect();
console.log(section2Coords);

window.addEventListener("scroll", function () {
  if (section2Coords.top < window.scrollY) {
    navbar.classList.add("nav-bar-sticky");
  } else {
    navbar.classList.remove("nav-bar-sticky");
  }
});
