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