"use strict";

// DOM elements
const inputTemp = document.getElementById("input-temperature");
const inputOption = document.getElementById("input-choice");
const outputOption = document.getElementById("output-choice");
const errorMessage = document.getElementById("error-message");
const convertButton = document.getElementById("convert-button");
const result = document.getElementById("result");

// Function for DEGREE-CELCIUS to FAHRENHEIT
const celciusToFahren = function (input) {
  if (!isNaN(input)) {
    const tempResult = ((input * 9) / 5 + 32).toFixed(2) + `°F`;
    result.textContent = tempResult;
  }
};

// 0°F − 32) × 5/9
// Function for FAHRENHEIT to DEGREE-CELCIUS
const fahrenToCelcius = function (input) {
  if (!isNaN(input)) {
    const tempResult = (((input - 32) * 5) / 9).toFixed(2) + `°C`;
    result.textContent = tempResult;
  }
};

// 0°C + 273.15
// Function for DEGREE-CELCIUS to KELVIN
const celciusToKelvin = function (input) {
  if (!isNaN(input)) {
    const tempResult = (input + 273.15).toFixed(2) + `K`;
    result.textContent = tempResult;
  }
};

// Function for KELVIN to DEGREE-CELCIUS
const kelvinToCelcius = function (input) {
  if (!isNaN(input)) {
    const tempResult = (input - 273.15).toFixed(2) + `°C`;
    result.textContent = tempResult;
  }
};

//(12°F − 32) × 5/9 + 273.15
// Function for FAHRENHEIT to KELVIN
const fahrenToKelvin = function (input) {
  if (!isNaN(input)) {
    const tempResult = ((input - 32) * (5 / 9) + 273.15).toFixed(2) + `K`;
    result.textContent = tempResult;
  }
};

//(12K − 273.15) × 9/5 + 32
// Function for KELVIN to FAHRENHEIT
const kelvinToFahren = function (input) {
  if (!isNaN(input)) {
    const tempResult = ((input - 273.15) * (9 / 5) + 32).toFixed(2) + `°F`;
    result.textContent = tempResult;
  }
};

// EVENT HANDLERS

// KEYBOARD ENTER KEY
inputTemp.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    convertButton.click();
  }
});

// CONVERT BUTTON
convertButton.addEventListener("click", function () {
  const input = Number(inputTemp.value);
  if (input && typeof input === "number") {
    const selectedInputType =
      inputOption.options[inputOption.selectedIndex].value;
    const selectedOutputType =
      outputOption.options[outputOption.selectedIndex].value;
    switch (true) {
  case selectedInputType === "Celcius" && selectedOutputType === "Fahrenheit":
    celciusToFahren(input);
    errorMessage.style.opacity = 0;
    break;
  case selectedInputType === "Fahrenheit" && selectedOutputType === "Celcius":
    fahrenToCelcius(input);
    errorMessage.style.opacity = 0;
    break;
  case selectedInputType === "Kelvin" && selectedOutputType === "Celcius":
    kelvinToCelcius(input);
    errorMessage.style.opacity = 0;
    break;
  case selectedInputType === "Celcius" && selectedOutputType === "Kelvin":
    celciusToKelvin(input);
    errorMessage.style.opacity = 0;
    break;
  case selectedInputType === "Fahrenheit" && selectedOutputType === "Kelvin":
    fahrenToKelvin(input);
    errorMessage.style.opacity = 0;
    break;
  case selectedInputType === "Kelvin" && selectedOutputType === "Fahrenheit":
    kelvinToFahren(input);
    errorMessage.style.opacity = 0;
    break;
  default:
    result.textContent = "0.00";
    errorMessage.style.opacity = 100;
    inputOption.selectedIndex = 0;
    outputOption.selectedIndex = 0;
    break;
}

});
