const whichSchool = function (age) {
  if (age < 13){
    return "Elementary School"
  } else if (age >= 13 && age < 19) {
    return "Secondary School"
  } else {
    return "Lighthouse Labs"
  }
}
console.log(whichSchool(13));


// let start = 0;
// while (start <10) {
//   console.log (start);
//   start =+
// };

// let x = 0;
// while (x < 20) {
//   if ( x % 3 === 0 && x % 5 === 0){
//     console.log ("juliaJames");
//     } else if ( x % 5 === 0){
//     console.log ('James');
//   } else if ( x % 3 === 0 ) {
//     console.log ("Julia");
//   } else {
//     console.log (x);
//   }
// x = x+1;
// }
//  let b = 99;
//  while ( b >= 1) {
//   if ( b === 1) {
//     console.log (`${b} bottle of juice on the wall!`)
//   } else {
//     console.log(`${b} bottles of juice on the wall!`)
//   }
//   b = b-1;
//  }


//  let t = 60;
//  while ( t >= 0){
//   if (t === 50){
//     console.log ("Orbiter transfers from ground to internal power")
//   } else if(t === 31 ) {
//     console.log("Ground launch sequencer is go for auto sequence start ")

//   } else if ( t === 16) {
//     console.log ("Activate launch pad sound suppression system")
//   } else if ( t === 0) {
//     console.log ("Solid rocket booster ignition and liftoff! ")
//   } 
//   else {
//     console.log (t)
//   }
//   t = t-1;
//  }

 for(x = 9; x >= 1 ; x--) {
  console.log (`hello ${x}`)
 };
// for ( y = 5 ; y <10; y++){
//   console.log(y)
// };

for ( let k = 0; k < 200 ; k++){
  console.log(k)
};

let solution = 1
for (let i =1 ; i <= 12 ; i++){
  solution*=i;

}

for ( let i= 0 ; i <=25 ; i++) {
  for ( let u = 0 ; u <= 99 ; u++){ 
  console.log ( i,u);
}
}
