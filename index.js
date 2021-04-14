// Code your solutions in this file
for (let age =30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`); 
    debugger; 
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); 

// ================================= 

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
          names [i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return names; 
}

const result = writeCards(["Ada", "Brendan", "Ali"], "birthday"); 


// =================================


function countDown (number) {
let countup = number;
while (countup >= 0) {
  console.log(countup--);
    } 
}

countDown (10);






 


