const raining = true;
const cold = false ;
const temperature = -1;

// if (raining){
//   console.log (`don't foget your embrela `);
// }
// if (cold) {
//   console.log('make sure you pick out a scarf !');
// }
// console.log (`short sleeves are fine!`);

if (temperature <0) {
  console.log('make sure you pick out a scarf !');
} else if (temperature <15) {
  console.log ("short sleeves won't cut it ");

}else {
  console.log ("short sleeves are fine!")
}
console.log ("Now you're ready to go outside")

// ex 2:
 const isCitizen = true;
 const age = 26;

 if (isCitizen && age > 18) {
  console.log ("You are eligible to vote ");
 }

 //ex 3:
 if ( temperature <-40 || temperature >40) {
  console.log ("Maybe going outsid isn't a great idea...");
 }
 // ex 4 :

 if (!raining) {
  console.log ("leave your umbrella at home! ");
 }