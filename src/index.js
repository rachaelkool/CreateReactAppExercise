import foods from "./foods"
import {choice, remove} from "./helpers"


let random_fruit = choice(foods);

console.log(`I'd like one ${random_fruit}, please.`);
console.log(`Here you go: ${random_fruit}`);
console.log(`Delicious! May I have another?`);

let fruits_left = remove(foods, random_fruit);

console.log(`I'm sorry, we're all out. We have ${fruits_left.length} left.`);


// let random_fruit2 = choice(fruits_left);
// let fruits_left2 = remove(fruits_left, random_fruit2);
// console.log(fruits_left2.length)
  