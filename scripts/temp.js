document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const convertBtn = document.getElementById("convertButton");
   const cInput = document.getElementById("cInput");
   const fInput = document.getElementById("fInput");
   const weatherImage = document.getElementById("weatherImage");
   const errorMessage = document.getElementById("errorMessage");

   // Input handler for C and F
   cInput.addEventListener("input", () => {
      if (cInput.value.length > 0) {
         fInput.value = "";
      }
   })

   fInput.addEventListener("input", () => {
      if (fInput.value.length > 0) {
         cInput.value = "";
      }
   })

   // Convert function
   convertBtn.addEventListener("click", () => {
      if (cInput.value.length > 0) {
         // Handel input
         handleBadInput(cInput.value);

         let celcius = parseFloat(cInput.value);
         let fahrenheit = convertCtoF(celcius);
         fInput.value = fahrenheit;
      } else if (fInput.value.length > 0) {
         // Handel input
         handleBadInput(fInput.value);
         
         let fahrenheit = parseFloat(fInput.value);
         let celcius = convertFtoC(fahrenheit);
         cInput.value = celcius;
      }

      // Change weather image
      if (fInput.value < 32) {
         weatherImage.src = "images/temperImg/cold.png";
      } else if (fInput.value <= 50) {
         weatherImage.src = "images/temperImg/cool.png";
      } else {
         weatherImage.src = "images/temperImg/warm.png";
      }

      // If no input
      if (cInput.value.length == 0 && fInput.value.length == 0) {
        errorMessage.innerHTML = "Please enter a number to convert";
        weatherImage.src = "";
      }
   })   
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return degreesCelsius * (9.0 / 5.0) + 32;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return (degreesFahrenheit - 32) * (5.0 / 9.0);
}

function handleBadInput(input) {
   if (isNaN(input)) {
      errorMessage.innerHTML = input + " is not a number";
   } else {
      errorMessage.innerHTML = "";
   }
}