let old = false;
let young = false;
let eligible = false;

const age = 12;


if (age >= 60) {
             old = true;
             young = false;
             eligible = true;
             console.log("You are  Senior Citizen and Eligible for Visa");
} else if (age >= 20) {
             old = false;
             young = true;
             eligible = true;
             console.log("You are Young and Eligible for Visa");
} else if ( age >= 13) {
	         old = false;
             young = false;
             eligible = false;
             console.log("You are just a Teenage, you are NOT Eligible for Visa");
}  else{
             old = false;
             young = false;
             eligible = false;
            console.log("You are just a Child, you are NOT Eligible for Visa");
}