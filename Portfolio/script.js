// project links

const project1 = document.getElementById("project1");
project1.addEventListener("click", function () {
  window.open("https://yashwanth-cd.github.io/pig_game/", "_blank");
});

const project2 = document.getElementById("project2");
project2.addEventListener("click", function () {
  window.open("https://yashwanth-cd.github.io/guess_my_number/", "_blank");
});

const project3 = document.getElementById("project3");
project3.addEventListener("click", function () {
  window.open(
    "https://yashwanth-cd.github.io/OIBSIP/Landing Page/",
    "_blank"
  );
});

const project4 = document.getElementById("project4");
project4.addEventListener("click", function () {
  window.open(
    "https://yashwanth-cd.github.io/OIBSIP/Temperature Calculator/",
    "_blank"
  );
});

const project5 = document.getElementById("project5");
project5.addEventListener("click", function () {
  window.open("https://yashwanth-cd.github.io/BankistApplication/", "_blank");
});

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

// Adding redirecting pages for contact details
const linkedIn = document.getElementById("linkedin-link");
linkedIn.addEventListener("click", function () {
  window.open(
    "https://www.linkedin.com/in/yashwanth-sai-c-5562851b2/",
    "_blank"
  );
});

const facebook = document.getElementById("facebook-link");
facebook.addEventListener("click", function () {
  window.open("https://www.facebook.com/yashwanth.sai.1217/", "_blank");
});
