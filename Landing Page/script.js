'use strict';

const aboutButton = document.getElementById('btn-about');
aboutButton.addEventListener('click', function (){
  window.location.href = "about.html";
});

const contactButton = document.getElementById('btn-contact');
contactButton.addEventListener('click', function () {
  window.location.href = "contact.html";
});

const appointmentButton = document.getElementById('btn-appointment');
appointmentButton.addEventListener('click', function () {
  window.location.href = "appointment.html";
});

const subscribe = document.getElementById('btn-subscribe');
subscribe.addEventListener('click', function () {
  alert('Thanks for Subscribing to our Newsletter! ✅');
});

