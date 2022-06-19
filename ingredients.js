const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// 1 while loop
let i = 0;
while( i < ingredients.length){
  console.log(ingredients[i]);
  i++
}

// 2 for loop

for (let i = 0; i<ingredients.length ; i++){
  console.log(ingredients[i]);
}

// 3 for loop to print ingredients backwards:

for( let i = ingredients.length-1; i >= 0 ;  i--){
  console.log(ingredients[i]); }