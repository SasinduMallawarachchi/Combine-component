// starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  
  const forms_card_4 = document.querySelectorAll(".validation-card-4");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms_card_4).forEach((form) => {
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
const form_card_4 = document.getElementById("cardForm4");
const cardNumberInput_card_4 = document.getElementById("cc-number-card-4");
const cardTypeImage_card_4 = document.getElementById("card-4-cardicons");
const expiry_card_4 = document.getElementById("exp-card-4");
const holder_name_4 = document.getElementById("card-4-name");
const cardCVC_card_4 = document.getElementById("cc-cvc-card-4");
let cardTypescard4 = document.querySelector(".animation-card-4");
const cardCountry_card_4 = document.querySelector("#country-card-4");


//Card Number format 1234 1234 1234 1234 & image display
cardNumberInput_card_4.addEventListener("input", function (event) {
  cardNumberInput_card_4.maxLength = 19;
  let cardNumber = event.target.value;
  if (cardNumber.length > cardNumberInput_card_4.maxLength) {
    event.target.value = cardNumber.substring(0, cardNumberInput_card_4.maxLength);
    return;
  }
  let formattedCardNumber4 = "";
  cardNumber = cardNumber.replace(/\s+/g, ""); // remove all whitespaces
  cardNumber = cardNumber.replace(/\D+/g, ""); // remove all non-numeric characters

  for (let i = 0; i < cardNumber.length; i++) {
    formattedCardNumber4 += cardNumber[i];
    if ((i + 1) % 4 === 0 && i !== cardNumber.length - 1) {
      formattedCardNumber4 += " ";
    }
  }

  event.target.value = formattedCardNumber4;
  
//card identify from the first 2 digits.
  if (
    cardNumber === "" ||
    (!cardNumber.startsWith("34") &&
      cardNumber.startsWith("37") &&
      cardNumber.startsWith("51") &&
      cardNumber.startsWith("52") &&
      (parseInt(cardNumber.substring(0, 4)) >= 2221 && parseInt(cardNumber.substring(0, 4)) <= 2720) &&
      cardNumber.startsWith("53") &&
      cardNumber.startsWith("54") &&
      cardNumber.startsWith("55") &&
      cardNumber.startsWith("4") &&
      cardNumber.startsWith("6"))
  ) {
    cardTypescard4.style.animation = "";
    cardTypescard4.style.backgroundImage = "";
    cardTypeImage_card_4.innerHTML = "";
    cardTypeImage_card_4.style.display = "";
  } else if (cardNumber.startsWith("34") || cardNumber.startsWith("37")) {
    cardTypescard4.style.animation = "none";
    cardTypescard4.style.backgroundImage = "none";
    cardTypeImage_card_4.innerHTML =
      '<img class="card-4-mobile-image" src="./bankcard-4/card-4-images/americanexpress.png" alt="americanexpress" style="display:initial;">';
  }else if (cardNumber.startsWith("6")) {
    cardTypescard4.style.animation = "none";
    cardTypescard4.style.backgroundImage = "none";
    cardTypeImage_card_4.innerHTML =
      '<img class="card-4-mobile-image" src="./bankcard-4/card-4-images/discover.png" alt="americanexpress" style="display:initial;">';
  } else if (
    cardNumber.startsWith("51") ||
    cardNumber.startsWith("52") ||
    cardNumber.startsWith("53") ||
    cardNumber.startsWith("54") ||
    cardNumber.startsWith("55") ||
    (parseInt(cardNumber.substring(0, 4)) >= 2221 && parseInt(cardNumber.substring(0, 4)) <= 2720)
  ) {
    cardTypescard4.style.animation = "none";
    cardTypescard4.style.backgroundImage = "none";
    cardTypeImage_card_4.innerHTML =
      '<img class="card-4-mobile-image " src="./bankcard-4/card-4-images/marstercard.png" alt="marstercard" style="display:initial;">';
  } else if (cardNumber.startsWith("4")) {
    cardTypescard4.style.animation = "none";
    cardTypescard4.style.backgroundImage = "none";
    cardTypeImage_card_4.innerHTML =
      '<img class="card-4-mobile-image " src="./bankcard-4/card-4-images/Visa.png" alt="visa" style="display:inline-block;">';
  }
});

//Date format
function formatStringCard4(e) {
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


cardCVC_card_4.addEventListener("input", function () {
  
  let cardNumber = document.getElementById("cc-number-card-4").value;

  // Allow only numeric characters
  cardCVC_card_4.value = cardCVC_card_4.value.replace(/[^\d]/g, "");

  // Check card number and set max and min length accordingly
  if (cardNumber.startsWith("34") || cardNumber.startsWith("37")) {
    cardCVC_card_4.setAttribute("maxlength", 4);
    cardCVC_card_4.setAttribute("minlength", 3);
    if (cardCVC_card_4.value.length > 4) {
      cardCVC_card_4.value = cardCVC_card_4.value.slice(0, 4);
    }
  } else if (
    cardNumber.startsWith("51") ||
    cardNumber.startsWith("52") ||
    cardNumber.startsWith("53") ||
    cardNumber.startsWith("54") ||
    cardNumber.startsWith("55") ||
    !(parseInt(cardNumber.substring(0, 4)) >= 2221 && parseInt(cardNumber.substring(0, 4)) <= 2720)
  ) {
    cardCVC_card_4.setAttribute("maxlength", 3);
    cardCVC_card_4.setAttribute("minlength", 3);
    if (cardCVC_card_4.value.length > 3) {
      cardCVC_card_4.value = cardCVC_card_4.value.slice(0, 3);
      return;
    }
  } else if (cardNumber.startsWith("4")) {
    cardCVC_card_4.setAttribute("maxlength", 3);
    cardCVC_card_4.setAttribute("minlength", 3);
    if (cardCVC_card_4.value.length > 3) {
      cardCVC_card_4.value = cardCVC_card_4.value.slice(0, 3);
      return;
    }
  } else {
    cardCVC_card_4.setAttribute("maxlength", 3);
    cardCVC_card_4.setAttribute("minlength", 3);
    if (cardCVC_card_4.value.length > 3) {
      cardCVC_card_4.value = cardCVC_card_4.value.slice(0, 3);
      return;
    }
  }
});

//holder's name validation 
// holder_name_4.addEventListener("input",function(event){
//   const holder_name_4 = document.getElementById("card-4-name");
//   if (holder_name_4.value == "") {
//     holder_name_4.setCustomValidity(`Please enter name`);
//     cardSetErrorFor(holder_name_4, "Please enter name");
//   }else {
//     holder_name_4.setCustomValidity("");
//     cardTwoSetSuccessFor(holder_name_4);
//   }
// });

//card name custom validation
holder_name_4.addEventListener("input", function (event) {
  const holder_name_4 = document.getElementById("card-4-name");
  if (holder_name_4.value == "") {
    holder_name_4.setCustomValidity(`Card name is blank`);
    cardSetErrorFor4(holder_name_4, "Card name is blank");
  } else {
    holder_name_4.setCustomValidity("");
    cardSetSuccessFor4(holder_name_4);
  }
});

//expiry custom validation
expiry_card_4.addEventListener("input", function (event) {
  expiry_card_4.maxLength = 5;
  if (expiry_card_4.value.length > 5) {
    expiry_card_4.value = expiry_card_4.value.slice(0, 5);
    return;
    }
  if (expiry_card_4.value.length == "") {
    expiry_card_4.setCustomValidity(`Card number is blank`);
    cardSetErrorFor4(expiry_card_4, "Card number is blank");
  } else if (expiry_card_4.value.length < 5) {
    expiry_card_4.setCustomValidity(`Card expiration is incomplete`);
    cardSetErrorFor4(expiry_card_4, "Card expiration is incomplete");
  } else if (!validateExpDate(expiry_card_4.value)) {
    expiry_card_4.setCustomValidity(`Card expiration is past`);
    cardSetErrorFor4(expiry_card_4, "Card expiration is in the past");
  } else {
    expiry_card_4.setCustomValidity("");
    cardSetSuccessFor4(expiry_card_4);
  }
});

//cvc custom validation
cardCVC_card_4.addEventListener("input", function (event) {
  if (cardCVC_card_4.value.length == "") {
    cardCVC_card_4.setCustomValidity(`Card CVC is blank`);
    cardSetErrorFor4(cardCVC_card_4, "Card CVC is blank");
  } else if (cardCVC_card_4.value.length < 3) {
    cardCVC_card_4.setCustomValidity(`Card CVC is incomplete`);
    cardSetErrorFor4(cardCVC_card_4, "Card CVC is incomplete");
  } else {
    cardCVC_card_4.setCustomValidity("");
    cardSetSuccessFor4(cardCVC_card_4);
  }
});


// card holder name

// holder_name_4.addEventListener("input",function (event) {
//   if (holder_name_4.value.length == "") {
//     holder_name_4.setCustomValidity(`Name is blank`);
//     cardSetErrorFor(holder_name_4, "Name is blank");
//   } else {
//     holder_name_4.setCustomValidity("");
//     cardSetSuccessFor(holder_name_4);
//   }
// });

// card holder name
holder_name_4.addEventListener("input", function (event) {
  if (holder_name_4.value == "") {
    holder_name_4.setCustomValidity(`Name is blank`);
    cardSetErrorFor4(holder_name_4, "Name is blank");
  } else {
    holder_name_4.setCustomValidity("");
    cardSetSuccessFor4(holder_name_4);
  }
});

/*invalid valid states of select fields*/
function card4ValidateForm() {
  var selects_card_4 = cardForm4.querySelectorAll("select");
  var isValid = true;

  for (var i = 0; i < selects_card_4.length; i++) {
    if (selects_card_4[i].value === "") {
      selects_card_4[i].style.borderColor = "#CD4C64";
      selects_card_4[i].style.borderWidth = "1px";
      isValid = false;
    } else {
      selects_card_4[i].style.borderColor = "#14a44d";
      selects_card_4[i].style.borderWidth = "1px";
    }
  }

  return isValid;
}
cardForm4.querySelectorAll("select").forEach(function (selects_card_4_1) {
  selects_card_4_1.addEventListener("change" || "submit", function () {
    if (selects_card_4_1.value !== "") {
      selects_card_4_1.style.borderColor = "#14a44d";
      selects_card_4_1.style.borderWidth = "1px";
    }
  });
});

//select country custom validation
cardCountry_card_4.addEventListener("input", function (event) {
  if (cardCountry_card_4.value == "") {
    cardCountry_card_4.setCustomValidity(`Card country is blank`);
    cardSetErrorFor4(cardCountry_card_4, "Card country is blank");
  } else {
    cardCountry_card_4.setCustomValidity("");
    cardSetSuccessFor4(cardCountry_card_4);
  }
});

//Card Number validation 
let card4timeout;             
cardNumberInput_card_4.addEventListener("input", function (event) {
  if (cardNumberInput_card_4.value.length == "") {
    cardNumberInput_card_4.setCustomValidity(`Card number is blank`);
    cardSetErrorFor4(cardNumberInput_card_4, "Card number is blank");
  } else if (cardNumberInput_card_4.value.length < 15) {
    cardNumberInput_card_4.setCustomValidity(`Card number is incomplete`);
    cardSetErrorFor4(cardNumberInput_card_4, "Card number is incomplete");
  }else {
    clearTimeout(card4timeout);
    card4timeout = setTimeout(function() {
     cardnumbervalidation4();
    }, 800); //add 800 mili seconds
    } 
});

//check validity of card number
function cardnumbervalidation4(){

  const inpNumber = document.getElementById("cc-number-card-4").value;
  const numretValue = validateCreditCardNumber4(inpNumber);

  if (numretValue === false) {
    cardNumberInput_card_4.setCustomValidity(`Card number is invalid`);
    cardSetErrorFor4(cardNumberInput_card_4, "Card number is invalid");
  } else {
    cardNumberInput_card_4.setCustomValidity("");
    cardSetSuccessFor4(cardNumberInput_card_4);
  }
}

//Luhn Algorithm
function validateCreditCardNumber4(number) {
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



cardForm4.addEventListener("submit", function (event) {
  
  if (cardCVC_card_4.value.length == "") {
    cardCVC_card_4.setCustomValidity(`Card CVC is blank`);
    cardSetErrorFor4(cardCVC_card_4, "Card CVC is blank");
    
  }

  if (cardNumberInput_card_4.value.length == "") {
    cardNumberInput_card_4.setCustomValidity(`Card number is blank`);
    cardSetErrorFor4(cardNumberInput_card_4, "Card number is blank");
  }

  if (cardCountry_card_4.value == "") {
    cardCountry_card_4.setCustomValidity(`Card country is blank`);
    cardSetErrorFor4(cardCountry_card_4, "Card country is blank");
  }

  if (expiry_card_4.value.length == "") {
    expiry_card_4.setCustomValidity(`Card number is blank`);
    cardSetErrorFor4(expiry_card_4, "Card number is blank");
  }
  if (holder_name_4.value == "") {
    holder_name_4.setCustomValidity(`Card name is blank`);
    cardSetErrorFor4(holder_name_4, "Card name is blank");
  } 
});


/*Date validation*/
validateExpDate = (date) => {
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

//error messages 
function cardSetErrorFor4(input, message) {
  const formControl = input.parentElement; // .form-control
  const CFOErr = formControl.querySelector(".card-cardform-4-erroMessage-div");
  // add error message inside the div
  CFOErr.innerHTML =
    "<p>" + message + '&nbsp;<i class="fas fa-exclamation-circle"></i></p>';
  formControl.classList.add("error");
  formControl.classList.remove("success");
}

function cardSetSuccessFor4(input) {
  const formControl = input.parentElement; // .form-control
  const CFOErr = formControl.querySelector(".card-cardform-4-erroMessage-div");

  // add error message inside the div
  CFOErr.innerText = "";
  formControl.classList.add("success");
  formControl.classList.remove("error");
}



