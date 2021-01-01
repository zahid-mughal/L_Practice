let fName = "Muhammad";
let lName = "Zahid";
let greet = "Hello "+fName +" "+ lName;
let greet2 = `Hello ${fName} ${lName}`;

console.log("Greeting one ",greet);
console.log("Greeting two ",greet2);
function fullName(fName,lName){
 return `${fName} ${lName}`;
}
console.log(fullName("Muhammad","zahid"));