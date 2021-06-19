  function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
	const totalPrice = pricePerDroid * orderedQuantity;
	if (totalPrice > customerCredits) {
	message = "Insufficient funds!";
	} else {
  	customerCredits -= totalPrice;
  	message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`};
  // Change code above this line
  return message;
} 

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if(totalSpent>=50000) {
  discount = GOLD_DISCOUNT;
}
else if(totalSpent>=20000 && totalSpent<50000) {
  discount = SILVER_DISCOUNT;
};
  
  
  
 if(totalSpent>=5000 && totalSpent<20000) {
  discount = BRONZE_DISCOUNT;
} 
  else {
  discount = BASE_DISCOUNT;
}; 
  
  // Change code above this line
  return discount;
}



function getShippingCost(country) {
  let message;
  // Change code below this line
 switch (country) { 
    case "China": 
      message = "Shipping to China will cost 100 credits"; 
    break;
     
    case "Chile": 
      message = "Shipping to Chile will cost 250 credits"; 
    break;
     
    case "Australia": 
      message = "Shipping to Australia will cost 170 credits"; 
    break;
     
    case "Jamaica": 
      message = "Shipping to Jamaica will cost 120 credits"; 
    break;
     
   default:
     message = "Sorry, there is no delivery to your country";
 }
    
  // Change code above this line
  return message;
}
// _____________________________________________________________________________________________

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];
//_______________________________________________________________________________________________

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}
// ________________________________________________________________________________________________________
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
if (message.length === maxLength) {
  result = message;
} else {
  result = message.slice(0, maxLength) + "...";}
  /// Change code above this line
  return result;
}
// ______________________________________________________________________________________________
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}
// ________________________________________________________________________________________
function checkForName(fullName, name) {
  const result = fullName.includes(name); 
   return result;
 }
//  ____________________________________________________________________________________________


function checkForSpam(message) {
  let result;
  // Change code below this line
result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale"); 
  // Change code above this line
  return result;
}
// ________________________________________________________________________________________
