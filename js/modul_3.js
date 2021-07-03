const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
   };
//    _______________________________________________________


const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
  };
//   _______________________________________________________


const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  // Change code below this line
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  // Change code above this line
//   ____________________________________________________________


const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  // Change code below this line
  const ownerName = apartment.owner.name;
  const ownerPhone = apartment.owner.phone;
  const ownerEmail = apartment.owner.email;
  const numberOfTags = apartment.tags.length;
  const firstTag = apartment.tags[0];
  const lastTag = apartment.tags[apartment.tags.length-1];
  // Change code above this line
//   ______________________________________________________________


const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  // Change code below this line
  const aptRating = apartment['rating'];
  const aptDescr = apartment['descr'];
  const aptPrice = apartment['price'];
  const aptTags = apartment['tags'];
  // Change code above this line
// _____________________________________________________________


const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  // Change code below this line
  apartment.price = 5000;
  apartment.rating = 4.7;
  apartment.owner.name = 'Henry Sibola';
  apartment.tags.push('trusted');
  
//   _____________________________________________________________


const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4.7,
    price: 5000,
    tags: ["premium", "promoted", "top", "trusted"],
    owner: {
      name: "Henry Sibola",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  // Change code below this line
  apartment.area = 60;
  apartment.rooms = 3;
  apartment.location = {country: "Jamaica", city: "Kingston"};
//   _______________________________________________________________


const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  // Change code below this line
name,
  price,
  image,
  tags
  


  // Change code above this line
};
// ___________________________________________________________________


const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Change code below this line
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam"
  
  
  // Change code above this line
};
// ___________________________________________________________________


const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  // Change code below this line
  for (const key in apartment) {
    keys.push(key);
    values.push(apartment[key])
  };
// _________________________________________________________________


const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if(apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key])
};

  // Change code above this line
}


  // Change code above this line
}
// ______________________________________________________________________________


function countProps(object) {
    let propCount = 0;
    // Change code below this line
  const keys= [];
  for(const key in object) {
  if(object.hasOwnProperty(key)) {
   keys.push(key);
   propCount = keys.length 
  }
  };
    // Change code above this line
    return propCount;
  }
// _________________________________________________________________________


const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const values = [];
  // Change code below this line
  const keys = Object.keys(apartment);
  for(const key of keys) {
    values.push(apartment[key])
  }
  // ________________________________________________________________________


  function countProps(object) {
    // Change code below this line
    let propCount = 0;
  
    for (const key of Object.keys(object)) {
      
        propCount += 1;
      
    }
    console.log(propCount)
    return propCount;
    // Change code above this line
  }
  // __________________________________________________________________________

  
  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  // Change code below this line
  const keys = Object.keys(apartment);
  const values = Object.values(apartment);
    // _______________________________________________________________________


    function countTotalSalary(salaries) {
      let totalSalary = 0;
      // Change code below this line
    const valueSalary = Object.values(salaries);
      for (const element of valueSalary) {
        totalSalary += element;
      }
      
      // Change code above this line
      return totalSalary;
    }
    // ______________________________________________________________________


    const colors = [
      { hex: '#f44336', rgb: '244,67,54' },
      { hex: '#2196f3', rgb: '33,150,243' },
      { hex: '#4caf50', rgb: '76,175,80' },
      { hex: '#ffeb3b', rgb: '255,235,59' },
    ];
    
    const hexColors = [];
    const rgbColors = [];
    // Change code below this line
    for (const color of colors) {
     
      hexColors.push(color.hex);
      rgbColors.push(color.rgb);
    }
  // ____________________________________________________________________________


  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  
  function getProductPrice(productName) {
    // Change code below this line
    
     for (const product of products) {
     if(product.name === productName)
     return product.price
   } return null
    
    // Change code above this line
  }
  // ______________________________________________________________________


  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  function getAllPropValues(propName) {
    const value = [];
    for (const product of products) {
       if (!product[propName]) {
        return [];
      }
      value.push(product[propName]);
     
    }
    return value;
  }
  console.log(getAllPropValues("name"));
  console.log(getAllPropValues("quantity"));
  console.log(getAllPropValues("price"));
  console.log(getAllPropValues("category"));
  // ________________________________________________________________



  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  
  function calculateTotalPrice(productName) {
    // Пиши код ниже этой строки
    let totalPrice = 0;
    
    for (const product of products) {
      
    if (product.name === productName) {
    totalPrice = product.price * product.quantity;
      
    return totalPrice;
      
    } 
      
        
        
    }
    return 0;
    // Пиши код выше этой строки
  }
  // _________________________________________________________________




  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // Change code below this line
  const { yesterday, today, tomorrow } = highTemperatures
  
  
  // Change code above this line
  const meanTemperature = (yesterday + today + tomorrow) / 3;
  // _____________________________________________________________________




  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // Change code below this line
  const { yesterday, today, tomorrow, 
         icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"  } = highTemperatures
  
  // Change code above this line
  const meanTemperature = (yesterday + today + tomorrow) / 3;
  // _______________________________________________________________________




  
  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // Change code below this line
  const
  { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, 
           icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"  } = highTemperatures;
  
  
  
  // Change code above this line
  const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
  // ____________________________________________________________________________

  const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
  ];
  
  const hexColors = [];
  const rgbColors = [];
  // Change code below this line
  
  for (const {hex, rgb} of colors) {
    hexColors.push(hex);
    rgbColors.push(rgb);
  }
  // ____________________________________________________________________________


  const forecast = {
    today: {
      low: 28,
      high: 32,
      icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
    },
    tomorrow: {
      low: 27,
      high: 31,
    },
  };
  // Change code below this line
  
  // Change code below this line
  const {today: 
         {low: lowToday, 
          high: highToday, 
          icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
         
         tomorrow: 
         {low: lowTomorrow, 
          high: highTomorrow, 
          icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},} 
  = forecast;
  // _________________________________________________________________________________________



  // Change code below this line
function calculateMeanTemperature(forecast) {
  const {today:{low: todayLow, high: todayHigh}, tomorrow:{low: tomorrowLow, high: tomorrowHigh},} = forecast;
  
  

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
// _________________________________________________________________________________________________


const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);
// _________________________________________________________________________________________________

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
// __________________________________________________________________________________________________

const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};
// __________________________________________________________________________________________________________


function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line
  const defoltData = {completed, category, priority};
  const newData = {...defoltData, ...data};
  return newData;
  // Change code above this line
}
// ___________________________________________________________________

// Change code below this line
function add(...args) {
  let sum = 0;
  for (const argument of args) {
    sum += argument;
  }
    return sum;
    
  // Change code above this line
}
// ____________________________________________________________________


// Change code below this line
function addOverNum(number,...args) {
  let total = 0;

  for (const arg of args) {
    if(arg > number) {
    total += arg;}
  }

  return total;
  // Change code above this line
}
// __________________________________________________________________


// Change code below this line
function findMatches(array, ...numbers) {
  const matches = []; // Don't change this line
  const newArrey = [...array];
  for (const number of numbers) {
    if(newArrey.includes(number)) {
      matches.push(number) }
  }
  // Change code above this line
  return matches;
}

// ________________________________________________________________



const bookShelf = {
  // Change code below this line
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`
  },
  // Change code above this line
};
// ____________________________________________________________________



const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
	
	const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, );
    this.books.splice(bookIndex, 0, newName);
	
    // Change code above this line
  },
};
// _______________________________________________________________________


const atTheOldToad = {
  // Change code below this line
  potions: []
  // Change code above this line
};
// ______________________________________________________________


const atTheOldToad = {
  // Change code below this line
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions() {
  return this.potions;
  }
  // Change code above this line
};
// _________________________________________________________


const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    // Change code below this line
    this.potions.push(potionName);
    // Change code above this line
  },
};

// ___________________________________________________________________


const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    for (let i = 0; i < this.potions.length; i += 1) {
    
      if(potionName === this.potions[i]) {
        
    this.potions.splice(i, 1)
    
    }
    
    }
    // Change code above this line
  },
};
// _____________________________________________________________


const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line
 const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex, 1, );
    this.potions.splice(potionIndex, 0, newName);
    // Change code above this line
  },
};
// _____________________________________________________________


const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
 for (let i = 0; i < this.potions.length; i += 1) {
    
      if(potionName === this.potions[i].name) {
        
    this.potions.splice(i, 1)
    
    }
    
    }
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
      for (const potion of potions) {
        if (potion.name === oldName) {
          return potion.name = newName;
        }
      }
      return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};
// ______________________________________________________________