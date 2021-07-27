function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Пиши код ниже этой строки
  
     orderedItems.forEach(function (element) {
    (totalPrice += element)
    });
  
    // Пиши код выше этой строки
    return totalPrice;
  }

//   ________________________________________________________________________


function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
    numbers.forEach(number => {if(number > value) filteredNumbers.push(number)})
  
    
  
    // Пиши код выше этой строки
    console.log(filteredNumbers)
    return filteredNumbers;
  }
  
  // numbers.forEach(function(number) {number > value})
  filterArray([1, 2, 3, 4, 5], 3)

//   ___________________________________________________________________________

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
    firstArray.forEach(element => {if(secondArray.includes(element))
  commonElements.push(element) })
  
    return commonElements;
    // Пиши код выше этой строки
  }

//   ________________________________________________________________________________


const calculateTotalPrice = (quantity, pricePerItem) => {
    // Пиши код выше этой строки
    return quantity * pricePerItem;
  }

//   _______________________________________________________________________________

// Пиши код ниже этой строки
    const calculateTotalPrice = (quantity, pricePerItem) => {
    return quantity * pricePerItem;
    };
  const calculateTotalPrice = (quantity, pricePerItem) => 
  quantity * pricePerItem;


  // Пиши код выше этой строки
//   ______________________________________________________________________________


// Пиши код ниже этой строки





function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
  
    orderedItems.forEach(function (item) {
      totalPrice += item;
    });
  
    return totalPrice;
  }

  ______________________________________________
const calculateTotalPrice = (orderedItems) => {
    let totalPrice = 0;
  
  
  
    orderedItems.forEach((item) => {
      totalPrice += item;
    });
  
    return totalPrice;
  }
  // Пиши код выше этой строки

//   _____________________________________________________________________

const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Пиши код выше этой строки
    return filteredNumbers;
  }

//   _____________________________________________________________________

// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach((element) => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Пиши код выше этой строки
    return commonElements;
  }

//   ____________________________________________________________________

function changeEven(numbers, value) {
  // Пиши код ниже этой строки
   const newNumbers = [];
numbers.forEach(number => number % 2 === 0 ? newNumbers.push(number = number + value) : newNumbers.push(number))
return  newNumbers;
  // Пиши код выше этой строки
}
// _______________________________________________________________________________________

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => planet.length);
// ______________________________________________________________________________________
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const titles = books.map(book => book.title);
// _____________________________________________________________________________________

const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика']
  }
];
// Пиши код ниже этой строки

const genres = books.flatMap(book => book.genres);
// ___________________________________________________________________________________________

const getUserNames = users => users.map(user => user.name);
// ___________________________________________________________________________________________
const getUserEmails = users => users.map(user => user.email);
// ____________________________________________________________________________________________
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);
// _____________________________________________________________________________________________
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика', 'мистика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика', 'приключения']
  }
];
// Пиши код ниже этой строки
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((book, index, array) => array.indexOf(book) === index);
// _________________________________________________________________________________________________

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// ______________________________________________________________________________________________________
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);

};
// ______________________________________________________________________________________________________
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.age >= minAge && user.age <= maxAge);
 
 };
//  _______________________________________________________________________________________________________________
const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName)); 
// _______________________________________________________________________________________________________________
const getFriends = (users) => {
  const friends = users.flatMap(user => user.friends);
 return friends.filter((user, index, array) => array.indexOf(user) === index);
 

};
// _________________________________________________________________________________________________________
const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive) 
};
// ______________________________________________________________________________________________________________
const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive); 
};
// _______________________________________________________________________________________________________________
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);
// _________________________________________________________________________________________

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email); 
};
// ____________________________________________________________________________________________________

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every((element) => element % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((element) => element % 2 !== 0);;

const eachElementInSecondIsEven = secondArray.every((element) => element % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((element) => element % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((element) => element % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((element) => element % 2 !== 0);
// _____________________________________________________________________________________________________
const isEveryUserActive = (users) => {
  return users.every((user) => user.isActive); 
};
// _________________________________________________________________________________________________

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(element => element % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(element => element % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(element => element % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 !== 0);
// _____________________________________________________________________________________________________

const isAnyUserActive = users => {
  return users.some(user => user.isActive);
};
// ______________________________________________________________________________________________________

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((previousValue, element) => previousValue + element);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;
// ___________________________________________________________________________________________________________


const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки



const totalAveragePlaytimePerGame = players.reduce((previousValue, player) => { 
  return previousValue + player.playtime / player.gamesPlayed}, 0);
// _________________________________________________________________________

const calculateTotalBalance = users => { 
  return users.reduce((accumulator, user) => accumulator + user.balance, 0);
   
};
// ___________________________________________________________________________________

const getTotalFriendCount = users => {
  return users.reduce((accum, user) => accum + user.friends.length, 0)
   
};
// _____________________________________________________________________________________

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();
// __________________________________________________________________________________________

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// ____________________________________________________________________________________________

const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский',
  'Говард Лавкрафт'
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort((a, b) =>    a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) =>    b.localeCompare(a));
// __________________________________________________________________________________________

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((a, b) =>    a.author.localeCompare(b.author));

const sortedByReversedAuthorName = [...books].sort((a, b) =>    b.author.localeCompare(a.author));

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// _______________________________________________________________________________________

const sortByAscendingBalance = users => { 
  return [...users].sort((a, b) => a.balance - b.balance)
   
};

// _________________________________________________________________________________________


const sortByDescendingFriendCount = users => {
  return [...users].sort((a, b) => b.friends.length - a.friends.length)
};

// _______________________________________________________________________________________________

const sortByName = users => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name)) 
};

// ______________________________________________________________________________________________

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = books.filter((book) => book.rating > MIN_BOOK_RATING)
.map(book => book.author)
.sort((a, b) => a.localeCompare(b));
// ________________________________________________________________________________________________


const getNamesSortedByFriendCount = users => {
  return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name)
};

// ______________________________________________________________________________________________________


const getSortedFriends = users => {
  return users.flatMap(user => user.friends)
.filter((user, index, array) => array.indexOf(user) === index)
.sort((a, b) => a.localeCompare(b)) 
};

// ____________________________________________________________________________________________________________

const getTotalBalanceByGender = (users, gender) => {   return [...users].filter((el)=>el.gender===gender).reduce((acc,el)=>acc+el.balance,0)
   
};
// _______________________________________________________________________________