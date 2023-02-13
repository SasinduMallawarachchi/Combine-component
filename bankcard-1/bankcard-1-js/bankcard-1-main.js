// mdb javascript for empty feilds and validation not matching
(() => {
    "use strict";
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms_card_2 = document.querySelectorAll(".cardFormtwo-validation");
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms_card_2).forEach((form) => {
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

//Retrieve Ids and classes
const bank_card_1 = document.getElementById("cardFormtwo-validation");
const cardName_1 = document.getElementById("cc-name-BC-1");
const cardNumber_1 = document.getElementById("cc-number-BC-1");
const cardTypeImage_1 = document.getElementById("bankcard-1-cardicons");
const cardExpiry_1 = document.getElementById("cc-exp-BC-1");
const cardCVC_1 = document.getElementById("cc-cvc-BC-1");
let cardTypes_1 = document.querySelector(".animation-card-1");
const cardCountry_1 = document.querySelector(".cc-Country-BC-1");

//error messages 
function card_1_SetErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const CFOErr = formControl.querySelector(".card-bankcard-1-erroMessage-div");
  // add error message inside the div
  CFOErr.innerHTML =
    "<p>" + message + '&nbsp;<i class="fas fa-exclamation-circle"></i></p>';
  formControl.classList.add("error");
  formControl.classList.remove("success");
}

function cardSetSuccessFor1(input) {
  const formControl = input.parentElement; // .form-control
  const CFOErr = formControl.querySelector(".card-bankcard-1-erroMessage-div");

  // add error message inside the div
  CFOErr.innerText = "";
  formControl.classList.add("success");
  formControl.classList.remove("error");
}  

//---------------Card Holder Name validation----------
//card name custom validation
cardName_1.addEventListener("input", function (event) {
  if (cardName_1.value == "") {
    cardName_1.setCustomValidity(`Card name is blank`);
    cardSetSuccessFor1(cardName_1, "Card name is blank");
  } else {
    cardName_1.setCustomValidity("");
    cardSetSuccessFor1(cardName_1);
  }
});

//--------------Card Number Validations------------
//Card Number format 1234 1234 1234 1234 & image display
  cardNumber_1.addEventListener("input", function (event) {
    cardNumber_1.maxLength = 19;
    let bankcard_1Number = event.target.value;
    if (bankcard_1Number.length > cardNumber_1.maxLength) {
      event.target.value = bankcard_1Number.substring(0, cardNumber_1.maxLength);
      return;
    }

    let formattedbankcard_1Number = "";
    bankcard_1Number = bankcard_1Number.replace(/\s+/g, ""); // remove all whitespaces
    bankcard_1Number = bankcard_1Number.replace(/\D+/g, ""); // remove all non-numeric characters
  
    for (let i = 0; i < bankcard_1Number.length; i++) {
      formattedbankcard_1Number += bankcard_1Number[i];
      if ((i + 1) % 4 === 0 && i !== bankcard_1Number.length - 1) {
        formattedbankcard_1Number += " ";
      }
    }
  
    event.target.value = formattedbankcard_1Number;
    
    if (
      bankcard_1Number === "" ||
      (!bankcard_1Number.startsWith("34") &&
        !bankcard_1Number.startsWith("37") &&
        !bankcard_1Number.startsWith("51") &&
        !bankcard_1Number.startsWith("52") &&
        !(parseInt(bankcard_1Number.substring(0, 4)) >= 2221 && parseInt(bankcard_1Number.substring(0, 4)) <= 2720) &&
        !bankcard_1Number.startsWith("53") &&
        !bankcard_1Number.startsWith("54") &&
        !bankcard_1Number.startsWith("55") &&
        !bankcard_1Number.startsWith("4"))
    ) {
      cardTypes_1.style.animation = "";
      cardTypes_1.style.backgroundImage = "";
      cardTypeImage_1.innerHTML = "";
      cardTypeImage_1.style.display = "";
    } else if (bankcard_1Number.startsWith("34") || bankcard_1Number.startsWith("37")) {
      cardTypes_1.style.animation = "none";
      cardTypes_1.style.backgroundImage = "none";
      cardTypeImage_1.innerHTML =
        '<img class="bankcard-1-mobile-image" src="./bankcard-1/bankcard-1-images/americanexpress.png" alt="americanexpress" style="display:initial;">';
    } else if (
      bankcard_1Number.startsWith("51") ||
      bankcard_1Number.startsWith("52") ||
      bankcard_1Number.startsWith("53") ||
      bankcard_1Number.startsWith("54") ||
      bankcard_1Number.startsWith("55") ||
      (parseInt(bankcard_1Number.substring(0, 4)) >= 2221 && parseInt(bankcard_1Number.substring(0, 4)) <= 2720)
    ) {
      cardTypes_1.style.animation = "none";
      cardTypes_1.style.backgroundImage = "none";
      cardTypeImage_1.innerHTML =
        '<img class="bankcard-1-mobile-image" src="./bankcard-1/bankcard-1-images/marstercard.png" alt="marstercard" style="display:initial;">';
    } else if (bankcard_1Number.startsWith("4")) {
      cardTypes_1.style.animation = "none";
      cardTypes_1.style.backgroundImage = "none";
      cardTypeImage_1.innerHTML =
        '<img class="bankcard-1-mobile-image" src="./bankcard-1/bankcard-1-images/Visa.png" alt="visa" style="display:inline-block;">';
    }
  });

//Card Number validation 
let timeout;             
cardNumber_1.addEventListener("input", function (event) {
  if (cardNumber_1.value.length == "") {
    cardNumber_1.setCustomValidity(`Card number is blank`);
    card_1_SetErrorFor(cardNumber_1, "Card number is blank");
  } else if (cardNumber_1.value.length < 15) {
    cardNumber_1.setCustomValidity(`Card number is incomplete`);
    card_1_SetErrorFor(cardNumber_1, "Card number is incomplete");
  }else {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      BC_1_validity();
    }, 500);
    } 
});

//check validity of card number
function BC_1_validity(){

  const inpNumber_1 = document.getElementById("cc-number-BC-1").value;
  const cardNum_1_value = validateCreditCard_1Number(inpNumber_1);

  if (cardNum_1_value === false) {
    cardNumber_1.setCustomValidity(`Card number is invalid`);
    card_1_SetErrorFor(cardNumber_1, "Card number is invalid");
  } else {
    cardNumber_1.setCustomValidity("");
    cardSetSuccessFor1(cardNumber_1);
  }
}

//Luhn Algorithm
function validateCreditCard_1Number(number) {
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

//------Validation for CVC-----------------------
//CVC validation
cardCVC_1.addEventListener("input", function () {

let bankcard_1Number = cardNumber_1.value;

// Allow only numeric characters
cardCVC_1.value = cardCVC_1.value.replace(/[^\d]/g, "");

// Check card number and set max and min length accordingly
if (bankcard_1Number.startsWith("34") || bankcard_1Number.startsWith("37")) {
  cardCVC_1.setAttribute("maxlength", 4);
  cardCVC_1.setAttribute("minlength", 3);
  if (cardCVC_1.value.length > 4) {
    cardCVC_1.value = cardCVC_1.value.slice(0, 4);
  }
} else if (
  bankcard_1Number.startsWith("51") ||
  bankcard_1Number.startsWith("52") ||
  bankcard_1Number.startsWith("53") ||
  bankcard_1Number.startsWith("54") ||
  bankcard_1Number.startsWith("55") ||
  (parseInt(bankcard_1Number.substring(0, 4)) >= 2221 && parseInt(bankcard_1Number.substring(0, 4)) <= 2720)
) {
  cardCVC_1.setAttribute("maxlength", 3);
  cardCVC_1.setAttribute("minlength", 3);
  if (cardCVC_1.value.length > 3) {
    cardCVC_1.value = cardCVC_1.value.slice(0, 3);
    return;
  }
} else if (bankcard_1Number.startsWith("4")) {
  cardCVC_1.setAttribute("maxlength", 3);
  cardCVC_1.setAttribute("minlength", 3);
  if (cardCVC_1.value.length > 3) {
    cardCVC_1.value = cardCVC_1.value.slice(0, 3);
    return;
  }
} else {
  cardCVC_1.setAttribute("maxlength", 3);
  cardCVC_1.setAttribute("minlength", 3);
  if (cardCVC_1.value.length > 3) {
    cardCVC_1.value = cardCVC_1.value.slice(0, 3);
    return;
  }
}
});

//cvc custom validation
cardCVC_1.addEventListener("input", function (event) {
  if (cardCVC_1.value.length == "") {
    cardCVC_1.setCustomValidity(`Card CVC is blank`);
    card_1_SetErrorFor(cardCVC_1, "Card CVC is blank");
  } else if (cardCVC_1.value.length < 3) {
    cardCVC_1.setCustomValidity(`Card CVC is incomplete`);
    card_1_SetErrorFor(cardCVC_1, "Card CVC is incomplete");
  } else {
    cardCVC_1.setCustomValidity("");
    cardSetSuccessFor1(cardCVC_1);
  }
});

//-------Validation for expiration date--------------------
//Expiration Date format
function formatStringCard_One(e) {
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
//Expiration date validation
validateExpDate_1 = (date) => {
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

//Expiration Date custom validation
cardExpiry_1.addEventListener("input", function (event) {
  cardExpiry_1.maxLength=5;
  if (cardExpiry_1.value.length > 5) {
    cardExpiry_1.value = cardExpiry_1.value.slice(0, 5);
    return;
    }
  if (cardExpiry_1.value.length == "") {
    cardExpiry_1.setCustomValidity(`Card number is blank`);
    card_1_SetErrorFor(cardExpiry_1, "Card number is blank");
  } else if (cardExpiry_1.value.length < 5) {
    cardExpiry_1.setCustomValidity(`Card expiration is incomplete`);
    card_1_SetErrorFor(cardExpiry_1, "Card expiration is incomplete");
  } else if (!validateExpDate_1(cardExpiry_1.value)) {
    cardExpiry_1.setCustomValidity(`Card expiration is past`);
    card_1_SetErrorFor(cardExpiry_1, "Card expiration is in the past");
  } else {
    cardExpiry_1.setCustomValidity("");
    cardSetSuccessFor1(cardExpiry_1);
  }
});

//-----------------Validations for Country------------------------
//validation for country selection
function bankCard_1_validation() {
  var BC_Select_1 = bank_card_1.querySelectorAll("select");
  var isValid = true;

  for (var i = 0; i < BC_Select_1.length; i++) {
    if (BC_Select_1[i].value === "") {
      BC_Select_1[i].style.borderColor = "#CD4C64";
      BC_Select_1[i].style.borderWidth = "1px";
      isValid = false;
    } else {
      BC_Select_1[i].style.borderColor = "#14a44d";
      BC_Select_1[i].style.borderWidth = "1px";
    }
  }

  return isValid;
}
bank_card_1.querySelectorAll("select").forEach(function (BC_Select_1) {
  BC_Select_1.addEventListener("change" || "submit", function () {
    if (BC_Select_1.value !== "") {
      BC_Select_1.style.borderColor = "#14a44d";
      BC_Select_1.style.borderWidth = "1px";
    }
  });
});

//Country selection custom validation
cardCountry_1.addEventListener("input", function (event) {
if (cardCountry_1.value == "") {
  cardCountry_1.setCustomValidity(`Card country is blank`);
  card_1_SetErrorFor(cardCountry_1, "Card country is blank");
} else {
  cardCountry_1.setCustomValidity("");
  cardSetSuccessFor1(cardCountry_1);
}
});

//----------Empty feilds submission error message----------------------
//when form is submitting is empty feilds
bank_card_1.addEventListener("submit", function (event) {
  if (cardCVC_1.value.length == "") {
    cardCVC_1.setCustomValidity(`Card CVC is blank`);
    card_1_SetErrorFor(cardCVC_1, "Card CVC is blank");  
  }
  if (cardNumber_1.value.length == "") {
    cardNumber_1.setCustomValidity(`Card number is blank`);
    card_1_SetErrorFor(cardNumber_1, "Card number is blank");
  }
  if (cardCountry_1.value == "") {
    cardCountry_1.setCustomValidity(`Card country is blank`);
    card_1_SetErrorFor(cardCountry_1, "Card country is blank");
  }
  if (cardExpiry_1.value.length == "") {
    cardExpiry_1.setCustomValidity(`Card number is blank`);
    card_1_SetErrorFor(cardExpiry_1, "Card number is blank");
  }
  if (cardName_1.value == "") {
    cardName_1.setCustomValidity(`Card name is blank`);
    card_1_SetErrorFor(cardName_1, "Card name is blank");
  }
});
   



