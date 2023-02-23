// starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms_card_3 = document.querySelectorAll(".need-validation-card-3");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms_card_3).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//Read Ids' and classes
const form_card_3 = document.getElementById("cardFormThree");
const cardNumberInput_card_3 = document.getElementById("cc-number-card-3");
const cardTypeImage_card_3 = document.getElementById("card-3-cardicons");
const expiry_card_3 = document.getElementById("cc-exp-card-3");
const cardCVC_card_3 = document.getElementById("cc-cvc-card-3");
const cardname_card_3 = document.getElementById("cc-name-card-3");
let cardTypescard3 = document.querySelector(".animation-card-3");
const cardCountry_card_3 = document.querySelector("#country-card-3");


//Card Number format 1234 1234 1234 1234 & image display
cardNumberInput_card_3.addEventListener("input", function (event) {
  cardNumberInput_card_3.maxLength = 19;
  let cardNumber = event.target.value;
  if (cardNumber.length > cardNumberInput_card_3.maxLength) {
    event.target.value = cardNumber.substring(0, cardNumberInput_card_3.maxLength);
    return;
  }
  let formattedCardNumber = "";
  cardNumber = cardNumber.replace(/\s+/g, ""); // remove all whitespaces
  cardNumber = cardNumber.replace(/\D+/g, ""); // remove all non-numeric characters

  for (let i = 0; i < cardNumber.length; i++) {
    formattedCardNumber += cardNumber[i];
    if ((i + 1) % 4 === 0 && i !== cardNumber.length - 1) {
      formattedCardNumber += " ";
    }
  }

  event.target.value = formattedCardNumber;
  

  if (
    cardNumber === "" ||
    (!cardNumber.startsWith("34") &&
      !cardNumber.startsWith("37") &&
      !cardNumber.startsWith("51") &&
      !cardNumber.startsWith("52") &&
      !(parseInt(cardNumber.substring(0, 4)) >= 2221 && parseInt(cardNumber.substring(0, 4)) <= 2720) &&
      !cardNumber.startsWith("53") &&
      !cardNumber.startsWith("54") &&
      !cardNumber.startsWith("55") &&
      !cardNumber.startsWith("4"))
  ) {
    cardTypescard3.style.animation = "";
    cardTypescard3.style.backgroundImage = "";
    cardTypeImage_card_3.innerHTML = "";
    cardTypeImage_card_3.style.display = "";
  } else if (cardNumber.startsWith("34") || cardNumber.startsWith("37")) {
    cardTypescard3.style.animation = "none";
    cardTypescard3.style.backgroundImage = "none";
    cardTypeImage_card_3.innerHTML =
      '<img class="card-3-mobile-image" src="./bankcard-3/card-3-images/americanexpress.png" alt="americanexpress" style="display:initial;">';
  } else if (
    cardNumber.startsWith("51") ||
    cardNumber.startsWith("52") ||
    cardNumber.startsWith("53") ||
    cardNumber.startsWith("54") ||
    cardNumber.startsWith("55") ||
    (parseInt(cardNumber.substring(0, 4)) >= 2221 && parseInt(cardNumber.substring(0, 4)) <= 2720)
  ) {
    cardTypescard3.style.animation = "none";
    cardTypescard3.style.backgroundImage = "none";
    cardTypeImage_card_3.innerHTML =
      '<img class="card-3-mobile-image " src="./bankcard-3/card-3-images/marstercard.png" alt="marstercard" style="display:initial;">';
  } else if (cardNumber.startsWith("4")) {
    cardTypescard3.style.animation = "none";
    cardTypescard3.style.backgroundImage = "none";
    cardTypeImage_card_3.innerHTML =
      '<img class="card-3-mobile-image " src="./bankcard-3/card-3-images/Visa.png" alt="visa" style="display:inline-block;">';
  }
});

//Date format
function formatStringCardThree(e) {
  var inputChar = String.fromCharCode(event.keyCode);
  var code = event.keyCode;
  var allowedKeys = [8];
  if (allowedKeys.indexOf(code) !== -1) {
    return;
  }

  event.target.value = event.target.value
    .replace(
      /^([1-9]\/|[2-9])$/g,
      "0$1/" // 3 > 03/
    )
    .replace(
      /^(0[1-9]|1[0-2])$/g,
      "$1/" // 11 > 11/
    )
    .replace(
      /^([0-1])([3-9])$/g,
      "0$1/$2" // 13 > 01/3
    )
    .replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
      "$1/$2" // 141 > 01/41
    )
    .replace(
      /^([0]+)\/|[0]+$/g,
      "0" // 0/ > 0 and 00 > 0
    )
    .replace(
      /[^\d\/]|^[\/]*$/g,
      "" // To allow only digits and `/`
    )
    .replace(
      /\/\//g,
      "/" // Prevent entering more than 1 `/`
    );
}

//CVC validation
cardCVC_card_3.addEventListener("input", function () {
  
  let cardNumber = document.getElementById("cc-number-card-3").value;

  // Allow only numeric characters
  cardCVC_card_3.value = cardCVC_card_3.value.replace(/[^\d]/g, "");

  // Check card number and set max and min length accordingly
  if (cardNumber.startsWith("34") || cardNumber.startsWith("37")) {
    cardCVC_card_3.setAttribute("maxlength", 4);
    cardCVC_card_3.setAttribute("minlength", 3);
    if (cardCVC_card_3.value.length > 4) {
      cardCVC_card_3.value = cardCVC_card_3.value.slice(0, 4);
    }
  } else if (
    cardNumber.startsWith("51") ||
    cardNumber.startsWith("52") ||
    cardNumber.startsWith("53") ||
    cardNumber.startsWith("54") ||
    cardNumber.startsWith("55") ||
    (parseInt(cardNumber.substring(0, 4)) >= 2221 && parseInt(cardNumber.substring(0, 4)) <= 2720)
  ) {
    cardCVC_card_3.setAttribute("maxlength", 3);
    cardCVC_card_3.setAttribute("minlength", 3);
    if (cardCVC_card_3.value.length > 3) {
      cardCVC_card_3.value = cardCVC_card_3.value.slice(0, 3);
      return;
    }
  } else if (cardNumber.startsWith("4")) {
    cardCVC_card_3.setAttribute("maxlength", 3);
    cardCVC_card_3.setAttribute("minlength", 3);
    if (cardCVC_card_3.value.length > 3) {
      cardCVC_card_3.value = cardCVC_card_3.value.slice(0, 3);
      return;
    }
  } else {
    cardCVC_card_3.setAttribute("maxlength", 3);
    cardCVC_card_3.setAttribute("minlength", 3);
    if (cardCVC_card_3.value.length > 3) {
      cardCVC_card_3.value = cardCVC_card_3.value.slice(0, 3);
      return;
    }
  }
});


//expiry custom validation
expiry_card_3.addEventListener("input", function (event) {
  expiry_card_3.maxLength = 5;

// Get the value of the input field
let expiryValue = expiry_card_3.value;

// Check if the length of the input is greater than 5 characters
if (expiryValue.length > 5) {
expiry_card_3.value = expiryValue.slice(0, 5);
return;
}

  if (expiry_card_3.value.length == "") {
    expiry_card_3.setCustomValidity(`Card number is blank`);
    cardThreeSetErrorFor(expiry_card_3, "Card number is blank");
  } else if (expiry_card_3.value.length < 5) {
    expiry_card_3.setCustomValidity(`Card expiration is incomplete`);
    cardThreeSetErrorFor(expiry_card_3, "Card expiration is incomplete");
  } else if (!validateExpDatecardThree(expiry_card_3.value)) {
    expiry_card_3.setCustomValidity(`Card expiration is past`);
    cardThreeSetErrorFor(expiry_card_3, "Card expiration is in the past");
  } else {
    expiry_card_3.setCustomValidity("");
    cardThreeSetSuccessFor(expiry_card_3);
  }
});

//Let user to enter only numbers.
expiry_card_3.addEventListener('keypress', function(e) {
  let allowedChars = /[0-9]/;
  if (!allowedChars.test(String.fromCharCode(e.charCode))) {
    e.preventDefault();
  }
});

//cvc custom validation
cardCVC_card_3.addEventListener("input", function (event) {
  if (cardCVC_card_3.value.length == "") {
    cardCVC_card_3.setCustomValidity(`Card CVC is blank`);
    cardThreeSetErrorFor(cardCVC_card_3, "Card CVC is blank");
  } else if (cardCVC_card_3.value.length < 3) {
    cardCVC_card_3.setCustomValidity(`Card CVC is incomplete`);
    cardThreeSetErrorFor(cardCVC_card_3, "Card CVC is incomplete");
  } else {
    cardCVC_card_3.setCustomValidity("");
    cardThreeSetSuccessFor(cardCVC_card_3);
  }
});

/*invalid valid states of select fields*/
function cardThreeValidateForm() {
  var selects_card_2 = cardFormThree.querySelectorAll("select");
  var isValid = true;

  for (var i = 0; i < selects_card_2.length; i++) {
    if (selects_card_2[i].value === "") {
      selects_card_2[i].style.borderColor = "#CD4C64";
      selects_card_2[i].style.borderWidth = "1px";
      isValid = false;
    } else {
      selects_card_2[i].style.borderColor = "#14a44d";
      selects_card_2[i].style.borderWidth = "1px";
    }
  }

  return isValid;
}
cardFormThree.querySelectorAll("select").forEach(function (selects_card_2_1) {
  selects_card_2_1.addEventListener("change" || "submit", function () {
    if (selects_card_2_1.value !== "") {
      selects_card_2_1.style.borderColor = "#14a44d";
      selects_card_2_1.style.borderWidth = "1px";
    }
  });
});

//select country custom validation
cardCountry_card_3.addEventListener("input", function (event) {
  if (cardCountry_card_3.value == "") {
    cardCountry_card_3.setCustomValidity(`Card country is blank`);
    cardThreeSetErrorFor(cardCountry_card_3, "Card country is blank");
  } else {
    cardCountry_card_3.setCustomValidity("");
    cardThreeSetSuccessFor(cardCountry_card_3);
  }
});

//card name custom validation
cardname_card_3.addEventListener("input", function (event) {
  const cardname_card_3 = document.getElementById("cc-name-card-3");
  if (cardname_card_3.value == "") {
    cardname_card_3.setCustomValidity(`Card name is blank`);
    cardThreeSetErrorFor(cardname_card_3, "Card name is blank");
  } else {
    cardname_card_3.setCustomValidity("");
    cardThreeSetSuccessFor(cardname_card_3);
  }
});


//Card Number validation 
let timeoutcard3;             
cardNumberInput_card_3.addEventListener("input", function (event) {
  if (cardNumberInput_card_3.value.length == "") {
    cardNumberInput_card_3.setCustomValidity(`Card number is blank`);
    cardThreeSetErrorFor(cardNumberInput_card_3, "Card number is blank");
  } else if (cardNumberInput_card_3.value.length < 15) {
    cardNumberInput_card_3.setCustomValidity(`Card number is incomplete`);
    cardThreeSetErrorFor(cardNumberInput_card_3, "Card number is incomplete");
  }else {
    clearTimeout(timeoutcard3);
    timeoutcard3 = setTimeout(function() {
      cardThreeCardvaNumberValidationFunction();
    }, 500);
    } 
});

//check validity of card number
function cardThreeCardvaNumberValidationFunction(){

  const inpNumber = document.getElementById("cc-number-card-3").value;
  const numretValue = validateCreditCardNumberCardThree(inpNumber);

  if (numretValue === false) {
    cardNumberInput_card_3.setCustomValidity(`Card number is invalid`);
    cardThreeSetErrorFor(cardNumberInput_card_3, "Card number is invalid");
  } else {
    cardNumberInput_card_3.setCustomValidity("");
    cardThreeSetSuccessFor(cardNumberInput_card_3);
  }
}

//Luhn Algorithm
function validateCreditCardNumberCardThree(number) {
  // Remove non-digit characters from the number
  number = number.replace(/\D/g, '');

  // Check if the number is between 12 and 19 digits long
  if (!/^\d{12,19}$/.test(number)) return false;

  // Check if the number passes the Luhn algorithm
  let sum = 0;
  let shouldDouble = false;
  for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number[i]);
      if (shouldDouble) {
          digit *= 2;
          if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}



cardFormThree.addEventListener("submit", function (event) {
  
  if (cardCVC_card_3.value.length == "") {
    cardCVC_card_3.setCustomValidity(`Card CVC is blank`);
    cardThreeSetErrorFor(cardCVC_card_3, "Card CVC is blank");
    
  }

  if (cardNumberInput_card_3.value.length == "") {
    cardNumberInput_card_3.setCustomValidity(`Card number is blank`);
    cardThreeSetErrorFor(cardNumberInput_card_3, "Card number is blank");
  }

  if (cardCountry_card_3.value == "") {
    cardCountry_card_3.setCustomValidity(`Card country is blank`);
    cardThreeSetErrorFor(cardCountry_card_3, "Card country is blank");
  }

  if (expiry_card_3.value.length == "") {
    expiry_card_3.setCustomValidity(`Card number is blank`);
    cardThreeSetErrorFor(expiry_card_3, "Card number is blank");
  }

  if (cardname_card_3.value == "") {
    cardname_card_3.setCustomValidity(`Card name is blank`);
    cardThreeSetErrorFor(cardname_card_3, "Card name is blank");
  } 
});


//date validation
validateExpDatecardThree = (date) => {

  let today = new Date();
  let today_mm = ("0" + (today.getMonth() + 1)).slice(-2);
  let today_yy = today.getFullYear().toString().substr(-2);

  // Check if the entered date has exactly 5 characters (2 for month + "/" + 2 for year)
  if (date.length !== 5) {
    return false;
  }

  let date_mm = date.split("/")[0];
  let date_yy = date.split("/")[1];

  // Check if the first two characters are numeric (month) and the last two characters are numeric (year)
  if (!/^\d{2}$/.test(date_mm) || !/^\d{2}$/.test(date_yy)) {
    return false;
  }

  // Check if the entered month is within the range of 1 to 12
  if (parseInt(date_mm) < 1 || parseInt(date_mm) > 12) {
    return false;
  }

  // Check if the entered expiration date is later than the current date
  if (date_yy > today_yy || (date_yy === today_yy && date_mm >= today_mm)) {
    return true;
  } else {
    return false;
  }
};



//error messages 
function cardThreeSetErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const CFOErr = formControl.querySelector(".card-cardform-3-erroMessage-div");
  // add error message inside the div
  CFOErr.innerHTML =
    "<p>" + message + '&nbsp;<i class="fas fa-exclamation-circle"></i></p>';
  formControl.classList.add("error");
  formControl.classList.remove("success");
}

function cardThreeSetSuccessFor(input) {
  const formControl = input.parentElement; // .form-control
  const CFOErr = formControl.querySelector(".card-cardform-3-erroMessage-div");

  // add error message inside the div
  CFOErr.innerText = "";
  formControl.classList.add("success");
  formControl.classList.remove("error");
}
