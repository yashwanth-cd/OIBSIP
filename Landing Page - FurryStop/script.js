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
subscribeBtn.addEventListener("click", function () {
  const email = inputEmail.value.trim();
  if (email !== "" && email.includes("@")) {
    alert("Thank You for Subscribing to our Newsletter ✉️");
  } else {
    alert("Please Enter Your Email");
  }
});
