// Declaring a variable

var firstName = "Franklin";
let lastName = "Boachie";
let age = 27;
let isMarried = true;
let children = ["Bright", "Simon", "Patrick"];
let other = {
    favoriteColor:"Gold",
    favoriteSport: "Soccer",
    favoriteFruit: "Apple",
};
const fullName = firstName +" "+ lastName;//concatenation
const mySelf = `My name is ${firstName} ${lastName}.`;
console.log(mySelf);

//STRINGS
let sentence = "This is a astory about Franklin Boachie in Blind Spot"
console.log(sentence.length);
console.log(sentence.split("Franklin"));
console.log(sentence.replace("Franklin", "Patrick"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith("T"));
console.log(sentence.endsWith("lin"));

//ARRAY
let days = ["Monday", "Tuesday", "Wednesday", "Thurday"];
console.log(days.length);
days.push("Friday");
console.log(days);
console.log(days.pop());
days[0]= "Sunday";
console.log(days);
console.log[2];


//OBJECT
let person = {
    firstName: "Fraklin",
    lastName: "Boachie",
    age: 27,
};
console.log(person ["firstName"]);
console.log(person.firstName);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));



