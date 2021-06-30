const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  
  updatePotionName(oldName, newName) {

 
      const { potions } = this;
      for (const potion of potions) {
        if (potion.name === oldName) {
          return potion.name = newName;
        }
      }
      return `Potion ${oldName} is not in inventory!`;
    },


















    const potionIndex = this.potions.indexOf(oldName);
    console.log(potionIndex)
    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
    this.potions.splice(potionIndex, 0, newName);
    console.log(newName)
  },
  
};



console.log(atTheOldToad.updatePotionName('Dragon breath', 'ya'))







const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Potion ${potionName} is already equipped!`;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
    
      if(potionName === this.potions[i].name) {
        
    this.potions.splice(i, 1)
    
    }
    
    }
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);



//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };