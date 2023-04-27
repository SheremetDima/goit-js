// ----- while ----
// let num = prompt ('введіте чісло'  , 0);
// num = parseInt (num);
// const a = 5;
// const b = 15;

// while (nmm < a || num > b) {
// alert ('нет в діапозоне' ) ;
// num = prompt ('введіте чісло'  , 0);
// num = parseInt (num);
// }
// ---------------
// let mss = [2, 6, 90 ,121, 1 , 0 ];
// let total = 0 ;
// let count = 0 ;
// for ( let i=0 ; i>mss.length-1 ; i +=1  ) {
//  total += mss[i];
// ----------------
//     if (mss[i]<100) {
// count += 1;
// console.log (count);
// }
// console.log (mss[i]);
// }

// -----------------------
// function F(n)
// {
// if (n==1)
//   return 1;
// return F(n-1)*n;
// return (n!=1)?n*F(n-1):1;
// }
// alert(F(5));
//--------------------------
//Дано натуральное число n. Выведите все числа от 1 до n.
// s='';
// function f(n)
// {
// if (n>1)
//   f(n-1);
// s=s+n+' ';
// alert(n);
// }
// f(4);
// alert(s);

//------------------------------
// Определим функцию K(n), которая возвращает количество цифр в заданном натуральном числе n
// function f(n)
// {
// let kol;
// if (n<10)
//   kol=1;
// else
//   kol=f(n/10)+1;
// return kol;
// }
// s=f(456);
// alert(s);

// ------------ modul 3/20 

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки 

// let total = 0;
// console.log(productName) // дивимось що пердали в функцію
// for (let product of products) {

//     console.log(product) // дивимось що таке product на кожному кругу циклу
//   if (productName === product.name) {
//     console.log(productName, product.name) // дивимось що порівнюємо з переданим значенням в функцію
//   total = product.price * product.quantity;
//   }
// } 
// return total;

//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice('Radar')); // приклад виводу в консоль результату роботи функції

// calculateTotalPrice("Blaster")
// calculateTotalPrice("Radar") 
// calculateTotalPrice("Droid") 
// calculateTotalPrice("Grip") 
// calculateTotalPrice("Scanner")

// ------------

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
// //   console.log(data)

// return {completed, category, priority, ...data}
  
//     // Change code above this line
//   }

//   makeTask({});
//   makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
//   makeTask({ category: "Finance", text: "Take interest" });
//   makeTask({ priority: "Low", text: "Choose shampoo" }); 
//   makeTask({ text: "Buy bread" });

// ------------

// function add(...args) {
//     // Change code above this line
// console.log(add)  
// let total = 0
// for (let i = 0; i<args.length; i +=1 ) {
//     total += args[i];
// }
// console.log(total)
// return total
// }

// add(15, 27) 
// add(12, 4, 11, 48) 
// add(32, 6, 13, 19, 8) 
// add(74, 11, 62, 46, 12, 36) 

// ------------

// function addOverNum(firstNumber, ...args) {
//     let total = 0;

//     for (const arg of args) {
//         if (arg > firstNumber) {
//             total += arg;
//         }
//     }
//     console.log(firstNumber)
//     console.log(args)
//     console.log( total)


//     return total;
//     // Change code above this line
//   }


//  addOverNum(50, 15, 27)
//  addOverNum(10, 12, 4, 11, 48, 10, 8) 
//  addOverNum(15, 32, 6, 13, 19, 8) 
//  addOverNum(20, 74, 11, 62, 46, 12, 36) 

 // ------------

//  function findMatches(firstNamber, ...args) {
//     const matches = []; // Don't change this line
//     for (const arr of firstNamber) {
//       for (const value of args) {
//         if (value === arr) {
//           matches.push(value);
//         }
//       }
//     }
//     // console.log(firstNamber)
//     // console.log(args)
//     console.log(matches)

//     // Change code above this line
//     return matches;
//    }   


// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) ;
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) ;
// findMatches([63, 11, 8, 29], 4, 7, 16);

// ------------

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//       // Change code below this line
//   this.potions.push(potionName);
//   console.log(potionName);
//   console.log(this);
  
//       // Change code above this line
//     },
//   };
  
// atTheOldToad.addPotion("Invisibility");
// atTheOldToad.addPotion("Power potion");


// console.log(atTheOldToad.potions);

// ------------

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//       // Change code below this line
  
//           // знаходімо індекс елемента масіваб зберігаємо в змінну для візова метода 
//   const delNameInd = this.potions.indexOf(potionName);
  
//       // відрізаємо в масіві по індексу

//   this.potions.splice(delNameInd, 1);
// console.log(potionName);
  
// console.log(delNameInd);
  
//       // Change code above this line
//     },
//   };

//   atTheOldToad.removePotion("Dragon breath");
//   atTheOldToad.removePotion("Speed potion");

// ------------

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },      
  
  addPotion(newPotion) {
    const { potions } = this;
    for (const potion of potions) {
      if (newPotion.name === potions.name) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  }
},

  removePotion(potionName) {
  const {points} = this;
  for (let i =0; i <potions.length; i +=1) {
    const {name} = potions[i];
    if (potionName === name) {this.potions.splice(i,1)}
  }
},

  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (const potion of potions) {
      if (potion.name === oldName) {
      potion.name = newName;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

atTheOldToad.getPotions();
console.log(atTheOldToad.getPotions())
atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
console.log(atTheOldToad.addPotion())

// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion");
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");