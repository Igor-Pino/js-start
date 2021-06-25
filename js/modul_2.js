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
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
makeArrey = firstArray.concat(secondArray).slice(0,maxLength);
return makeArrey;


  // Change code above this line
}
// _______________________________________________________________________
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1 ) { // Change this line
  
  console.log(i);
}
// ______________________________________________________________________________
function calculateTotal(number) {
  // Change code below this line
 let total = 0;
 for (let i = 0; i <= number; i += 1 ) { // Change this line
   total += i;
  
 }
 return total;
   // Change code above this line
 }
//  _______________________________________________________________________
const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i+=1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}
// _________________________________________________________________________________
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (let i = 0; i < order.length; i+=1) {
total += order[i];
};
  // Change code above this line
  return total;
}
// ______________________________________________________________________________
function findLongestWord(string) {
  // Change code below this line

const array = string.split(' ');
let longestWord = array[0];
for(const word of array)
  if (longestWord.length < word.length) {
        longestWord = word;        
    }
return longestWord;

  // Change code above this line
}
// ________________________________________________________________________________
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for (let i = min; i <= max; i+=1) {
    numbers.push(i);
}
  // Change code above this line
  return numbers;
}
// ______________________________________________________________________________
function filterArray(numbers, value) {
  // Change code below this line

let newNumbers = [];

for (const number of numbers) {
   if (number > value) {
       newNumbers.push(number);
   }
}

return newNumbers;
 // Change code above this line
}
// ___________________________________________________________________________________
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
 
  return fruits.includes(fruit);

   // Change this line
}
// __________________________________________________________________________
function getCommonElements(array1, array2) {
  // Change code below this line
let newArray = [];
  
for (let i = 0; i < array1.length; i+=1) {
  if (array2.includes(array1[i])) {
      newArray.push(array1[i])
  }
     
 
}
  return newArray;

 // Change code above this line
}
// ______________________________________________________________________________
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
 for (const price of order) {
   total += price;
 
  }

  // Change code above this line
  return total;
}
// ____________________________________________________________________________
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];
for (const number of numbers) {
  if (number > value) {
      filteredNumbers.push(number);
    }
}
  
  
  
  return filteredNumbers;
  // Change code above this line
}
// _________________________________________________________________________
// Change code below this line
const a = 3 % 3 ;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;
// ________________________________________________________________________
let newNumbers = [];
for (let i = start; i <= end; i+=1){ 
    if (i % 2 === 0) {
        newNumbers.push(i);
    }
    
}

return newNumbers

    // Change code above this line
  }
  // __________________________________________________________________________
  const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
// _________________________________________________________________________
function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return number;
    }
  }

  return number;
  // Change code above this line
}
// ___________________________________________________________________________
function includes(array, value) {
  // Change code below this line
if (array.indexOf(value) !== -1) {
    return true;
} else {
    return false;
}
  // Change code above this line
}
// __________________________________________________________________________