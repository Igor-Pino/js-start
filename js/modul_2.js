// 2- module
function checkAge(age) {
    if (age >= 18) { // Change this line
      return "You are an adult";
    }
  
    return "You are a minor";
  }
  //______________________________________________________________________________________
  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    // Change code below this line
  
   if (password === ADMIN_PASSWORD) {
    return "Welcome!";
    } 
    return "Access denied, wrong password!";
  
  }
  // ___________________________________________________________________________________
  function checkStorage(available, ordered) {
    // Change code below this line
  
    if (ordered === 0) {
    return "Your order is empty!";
    }  
    if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
    } 
    return "The order is accepted, our manager will contact you";
    }
    // __________________________________________________________________________________
    // Change code below this line
  const fruits = ["apple", "plum", "pear", "orange"]
  // ____________________________________________________________________________________
  const fruits = ["apple", "plum", "pear", "orange"];
  
  // Change code below this line
  const firstElement = "apple";
  const secondElement = "plum";
  const lastElement = "orange";
  // _______________________________________________________________________________
  const fruits = ["apple", "plum", "pear", "orange"];
  
  // Write your code under this line
  fruits[1] = "peach";
  fruits[3] = "banana";
  // ___________________________________________________________________________________
  const fruits = ["apple", "peach", "pear", "banana"];
  
  // Change code below this line
  const fruitsArrayLength = fruits.length;
  // ___________________________________________________________________________________
  const fruits = ["apple", "peach", "pear", "banana"];
  
  // Change code below this line
  
  const lastElementIndex = fruits.length - 1;
  const lastElement = fruits[lastElementIndex];
  // ________________________________________________________________________________________
  
  function getExtremeElements(array) {
    // Change code below this line
    const arrayFirst = array[0];
    const arrayLast = array[array.length-1];
    const newArray = [arrayFirst, arrayLast];
    return newArray;
  
    // Change code above this line
  }
// ______________________________________________________________________________________________    
function splitMessage(message, delimeter) {
    let words;
    
    // Change code below this line
    words = message.split(delimeter);
  
    // Change code above this line
    return words;
  }
// _______________________________________________________________________________________________
function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
 
 const array = message.split(" ");
 const arrayItems = array.length;
 const totalPrice = arrayItems * pricePerWord;
 return  totalPrice;
 
 
    // Change code above this line
 }
//  ________________________________________________________________________________________
function makeStringFromArray(array, delimeter) {
    let string;
    // Change code below this line
  string = array.join(delimeter);
  
  
    // Change code above this line
    return string;
  }
//   _____________________________________________________________________________________
function slugify(title) {
    // Change code below this line
  const newTitle = title.toLowerCase();
  const titleArray = newTitle.split(" ");
  const titleSlug = titleArray.join("-");
  
  return titleSlug
    // Change code above this line
  }
//   ________________________________________________________________________________________________
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls = fruits.slice(1,4);
const lastThreeEls = fruits.slice(-3);
// ___________________________________________________________________________________________
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients);
// _____________________________________________________________________________________________
