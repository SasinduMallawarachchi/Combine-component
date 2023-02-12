// disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation-cardFive");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach((form) => {
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
const form = document.getElementById("cardFormFive");
const cardNumber_cardFiveInput = document.getElementById("cc-number-card-5");
const card_5_image = document.getElementById("card-5-cardicons");
const card_5_expiration = document.getElementById("cc-exp-card-5");
const card_5_CVC = document.getElementById("cc-cvc-card-5");
const card_5_name = document.getElementById("cc-name-card-5");
let  card_5_cardTypes = document.querySelector(".animation-bankcard-5");
const card_5_errorMessage = document.getElementById("card-cardform-5-erroMessage-div");
const card_5_country = document.querySelector("#card-5-country");
const cardNumber_cardFiveValue = cardNumber_cardFiveInput.value.trim().replace(/[ -]/g, "");

//Card Number input format 1234 1234 1234 1234
cardNumber_cardFiveInput.addEventListener("input", function (event) {
  cardNumber_cardFiveInput.maxLength = 19;
  let cardNumber_cardFive = event.target.value;
  
  if (cardNumber_cardFive.length > cardNumber_cardFiveInput.maxLength) {
    event.target.value = cardNumber_cardFive.substring(0, cardNumber_cardFiveInput.maxLength);
    return;
  }

  let formattedCard_5_Number = "";
  cardNumber_cardFive = cardNumber_cardFive.replace(/\s+/g, ""); // remove all whitespaces
  cardNumber_cardFive = cardNumber_cardFive.replace(/\D+/g, ""); // remove all non-numeric characters

  for (let i = 0; i < cardNumber_cardFive.length; i++) {
    formattedCard_5_Number += cardNumber_cardFive[i];
    if ((i + 1) % 4 === 0 && i !== cardNumber_cardFive.length - 1) {
      formattedCard_5_Number += " ";
    }
  }
  event.target.value = formattedCard_5_Number;
//   card_5_errorMessage.style.display = "";
 
// when start entering card number display card icon
  if (
    cardNumber_cardFive === "" ||
    (!cardNumber_cardFive.startsWith("34") &&
      !cardNumber_cardFive.startsWith("37") &&
      !cardNumber_cardFive.startsWith("51") &&
      !cardNumber_cardFive.startsWith("52") &&
      !(parseInt(cardNumber_cardFive.substring(0, 4)) >= 2221 && parseInt(cardNumber_cardFive.substring(0, 4)) <= 2720) &&
      !cardNumber_cardFive.startsWith("53") &&
      !cardNumber_cardFive.startsWith("54") &&
      !cardNumber_cardFive.startsWith("55") &&
      !cardNumber_cardFive.startsWith("4"))
  ) {
    card_5_cardTypes.style.animation = "";
    card_5_cardTypes.style.backgroundImage = "";
    card_5_image.innerHTML = "";
    card_5_image.style.display = "";
  } else if (cardNumber_cardFive.startsWith("34") || cardNumber_cardFive.startsWith("37")) {
    card_5_cardTypes.style.animation = "none";
    card_5_cardTypes.style.backgroundImage = "none";
    card_5_image.innerHTML =
      '<img class="card-5-image" src="./bankcard-5/bankcard-5-images/americanexpress.png" alt="americanexpress" style="display:initial;">';
  } else if (
    cardNumber_cardFive.startsWith("51") ||
    cardNumber_cardFive.startsWith("52") ||
    cardNumber_cardFive.startsWith("53") ||
    cardNumber_cardFive.startsWith("54") ||
    cardNumber_cardFive.startsWith("55") ||
     (parseInt(cardNumber_cardFive.substring(0, 4)) >= 2221 && parseInt(cardNumber_cardFive.substring(0, 4)) <= 2720)
  ) {
    card_5_cardTypes.style.animation = "none";
    card_5_cardTypes.style.backgroundImage = "none";
    card_5_image.innerHTML =
      '<img class="card-5-image " src="./bankcard-5/bankcard-5-images/marstercard.png" alt="marstercard" style="display:initial;">';
  } else if (cardNumber_cardFive.startsWith("4")) {
    card_5_cardTypes.style.animation = "none";
    card_5_cardTypes.style.backgroundImage = "none";
    card_5_image.innerHTML =
      '<img class="card-5-image " src="./bankcard-5/bankcard-5-images/Visa.png" alt="visa" style="display:inline-block;">';
  }
});

//Date validations placeholder style
function formatStringc5(e) {
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
      "" // To allow only digits and
    )
    .replace(
      /\/\//g,
      "/" // Prevent entering more than 1 
    );
}

//CVC number validation for entering numbers
card_5_CVC.addEventListener("input", function () {
  let cardNumber_cardFive = document.getElementById("cc-number-card-5").value;

  // Only use numeric characters cvc numbers will change 3 to 4
  card_5_CVC.value = card_5_CVC.value.replace(/[^\d]/g, "");

  if (cardNumber_cardFive.startsWith("34") || cardNumber_cardFive.startsWith("37")) {
    card_5_CVC.maxLength = 4;
    card_5_CVC.minLength = 3;
    if (card_5_CVC.value.length > 4) {
      card_5_CVC.value = card_5_CVC.value.slice(0, 4);
    }
  } else if (
    cardNumber_cardFive.startsWith("51") ||
    cardNumber_cardFive.startsWith("52") ||
    cardNumber_cardFive.startsWith("53") ||
    cardNumber_cardFive.startsWith("54") ||
    cardNumber_cardFive.startsWith("55") ||
    (parseInt(cardNumber_cardFive.substring(0, 4)) >= 2221 && parseInt(cardNumber_cardFive.substring(0, 4)) <= 2720)
  ) {
    card_5_CVC.maxLength = 3;
    card_5_CVC.minLength = 3;
    if (card_5_CVC.value.length > 3) {
      card_5_CVC.value = card_5_CVC.value.slice(0, 3);
    }
  } else if (cardNumber_cardFive.startsWith("4")) {
    card_5_CVC.maxLength = 3;
    card_5_CVC.minLength = 3;
    if (card_5_CVC.value.length > 3) {
      card_5_CVC.value = card_5_CVC.value.slice(0, 3);
    }
  } else {
    card_5_CVC.maxLength = 3;
    card_5_CVC.minLength = 3;
    if (card_5_CVC.value.length > 3) {
      card_5_CVC.value = card_5_CVC.value.slice(0, 3);
    }
  }
});

//when add currect bank card details recorrection the errors
let timeoutcard5;             
cardNumber_cardFiveInput.addEventListener("input", function (event) {
  if (cardNumber_cardFiveInput.value.length == "") {
    cardNumber_cardFiveInput.setCustomValidity(`Card number is blank`);
    cardSetErrorFor(cardNumber_cardFiveInput, "Card number is blank");
  } else if (cardNumber_cardFiveInput.value.length < 15) {
    cardNumber_cardFiveInput.setCustomValidity(`Card number is incomplete`);
    cardSetErrorFor(cardNumber_cardFiveInput, "Card number is incomplete");
  }else {
    clearTimeout(timeoutcard5);
    timeoutcard5 = setTimeout(function() {
     card_5_myFunction();
    }, 500);
    } 
});

function card_5_myFunction(){

  const inputtNumber = document.getElementById("cc-number-card-5").value;
  const numretValue = validateCreditCardNumber(inputtNumber);

  if (numretValue === false) {
    cardNumber_cardFiveInput.setCustomValidity(`Card number is invalid`);
    cardSetErrorFor(cardNumber_cardFiveInput, "Card number is invalid");
  } else {
    cardNumber_cardFiveInput.setCustomValidity("");
    cardSetSuccessFor(cardNumber_cardFiveInput);
  }
}

//Luhn Algorithm
function validateCreditCardNumber(number) {
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
//name validation
card_5_name.addEventListener("input", function (event) {
  if (card_5_name.value == "") {
    card_5_name.setCustomValidity(`Card name is blank`);
    cardSetErrorFor(card_5_name, "Card name is blank");
  } else {
    card_5_name.setCustomValidity("");
    cardSetSuccessFor(card_5_name);
  }
});

//expiration custom validation error msg
card_5_expiration.addEventListener("input", function (event) {
   card_5_expiration.maxLength = 5;
  if (card_5_expiration.value.length > 5) {
    card_5_expiration.value = card_5_expiration.value.slice(0, 5);
    return;
    }
  if (card_5_expiration.value.length == "") {
    card_5_expiration.setCustomValidity(`Card expiration is blank`);
    cardSetErrorFor(card_5_expiration, "Card expiration is blank");

  } else if (card_5_expiration.value.length < 5) {
    card_5_expiration.setCustomValidity(`Card expiration is incomplete`);
    cardSetErrorFor(card_5_expiration, "Card expiration is incomplete");

  } else if (!validateExpireDate(card_5_expiration.value)) {
    card_5_expiration.setCustomValidity(`Card expiration is past`);
    cardSetErrorFor(card_5_expiration, "Card expiration is in the past");

  } else {
    card_5_expiration.setCustomValidity("");
    cardSetSuccessFor(card_5_expiration);
  }
});


//cvc number validation error msg
card_5_CVC.addEventListener("input", function (event) {
  if (card_5_CVC.value.length == "") {
    card_5_CVC.setCustomValidity(`Card CVC is blank`);
    cardSetErrorFor(card_5_CVC, "Card CVC is blank");
  } else if (card_5_CVC.value.length < 3) {
    card_5_CVC.setCustomValidity(`Card CVC is incomplete`);
    cardSetErrorFor(card_5_CVC, "Card CVC is incomplete");
  } else {
    card_5_CVC.setCustomValidity("");
    cardSetSuccessFor(card_5_CVC);
  }
});

//select country custom validation error msg
card_5_country.addEventListener("input", function (event) {
  if (card_5_country.value == "") {
    card_5_country.setCustomValidity(`Card country is blank`);
    cardSetErrorFor(card_5_country, "Card country is blank");
  } else {
    card_5_country.setCustomValidity("");
    cardSetSuccessFor(card_5_country);
  }
});

/*Date validation*/
validateExpireDate = (date) => {
  let today = new Date();
  let today_mm = ("0" + (today.getMonth() + 1)).slice(-2);
  let today_yy = today.getFullYear().toString().substr(-2);
  // Check if the date entered has exactly 5 characters (2 for month + "/" + 2 for year)
  if (date.length !== 5) {
    // Check if the entered date has 2 characters (month)
    if (date.length === 2 && /^\d{2}$/.test(date)) {
      return true;
    }
    return false;
  }

  let date_mm = date.split("/")[0];
  let date_yy = date.split("/")[1];

  // Check if the first two characters are numeric (month) and the last two characters are numeric (year)
  if (!/^\d{2}$/.test(date_mm) || !/^\d{2}$/.test(date_yy)) {
    return false;
  }

  // Check if the entered expiration date is later than the current date
  if (date_yy > today_yy || (date_yy === today_yy && date_mm >= today_mm)) {
    return true;
  } else {
    return false;
  }
};

// blank/null submission error
cardFormFive.addEventListener("submit", function (event) {
  // event.preventDefault();
 if (card_5_name.value == "") {
    card_5_name.setCustomValidity(`Card name is blank`);
    cardSetErrorFor(card_5_name, "Card name is blank");
  }

  if (card_5_CVC.value.length == "") {
    card_5_CVC.setCustomValidity(`Card CVC is blank`);
    cardSetErrorFor(card_5_CVC, "Card CVC is blank");
  }

  if (cardNumber_cardFiveInput.value.length == "") {
    cardNumber_cardFiveInput.setCustomValidity(`Card number is blank`);
    cardSetErrorFor(cardNumber_cardFiveInput, "Card number is blank");
  }

  if (card_5_country.value == "") {
    card_5_country.setCustomValidity(`Card country is blank`);
    cardSetErrorFor(card_5_country, "Card country is blank");
  }

  if (card_5_expiration.value.length == "") {
    card_5_expiration.setCustomValidity(`Card expiration is blank`);
    cardSetErrorFor(card_5_expiration, "Card expiration is blank");
  }
});

/*invalid valid states border color*/
function cardFiveValidateForm() {
  var selects_bankCard_5_1 = cardFormFive.querySelectorAll("select");
  var isValid = true;

  for (var i = 0; i < selects_bankCard_5_1.length; i++) {
    if (selects_bankCard_5_1[i].value === "") {
      selects_bankCard_5_1[i].style.borderColor = "#CD4C64";
      selects_bankCard_5_1[i].style.borderWidth = "1px";
      isValid = false;
    } else {
      selects_bankCard_5_1[i].style.borderColor = "#14a44d";
      selects_bankCard_5_1[i].style.borderWidth = "1px";
    }
  }

  return isValid;
}
cardFormFive.querySelectorAll("select").forEach(function (selects_bankCard_5_2) {
  selects_bankCard_5_2.addEventListener("change" || "submit", function () {
    if (selects_bankCard_5_2.value !== "") {
      selects_bankCard_5_2.style.borderColor = "#14a44d";
      selects_bankCard_5_2.style.borderWidth = "1px";
    }
  });
});

//??
function cardSetErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const CFOErr = formControl.querySelector(".card-cardform-5-erroMessage-div");
  // add error message inside the div
  CFOErr.innerHTML =
    "<p>" + message + '&nbsp;<i class="fas fa-exclamation-circle"></i></p>';
  formControl.classList.add("error");
  formControl.classList.remove("success");
}

function cardSetSuccessFor(input) {
  const formControl = input.parentElement; // .form-control
  const CFOErr = formControl.querySelector(".card-cardform-5-erroMessage-div");

  // add error message inside the div
  CFOErr.innerText = "";
  formControl.classList.add("success");
  formControl.classList.remove("error");
}
