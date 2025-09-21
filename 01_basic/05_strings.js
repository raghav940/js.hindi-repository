const name = "raghav";
const repoCount = 50;
// console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('Raghav-Dadhich');

console.log(gameName[0]);
console.log(gameName.__proto__); 
console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0, 4);
console.log(newString);


const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Raghav  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://raghav.com/raghav%20dadhich";
console.log(url.replace('%20', '-'));
console.log(url.includes('anuj'));

console.log(gameName.split('-'));

