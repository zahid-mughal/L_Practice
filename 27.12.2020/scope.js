let myName;
function setVal(name){
 myName = name;
}
function check(){
    if(true){
    var note = "var keyword create global variable, also in function";
}
console.log(note);
}

setVal("zahid");
console.log("My First Name is "+myName);
console.log("My First Name is ",myName);
check();
