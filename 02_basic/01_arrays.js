const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ['shaktiman', 'naagraj', 'doga', 'nagraj', 'doga'];

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr[1]);
myArr.push(6);
myArr.push(7);
myArr.push(8);
myArr.pop();
console.log(myArr);
 
myArr.unshift(9);
myArr.shift();

console.log(myArr.includes(9));
console.log(myArr.indexOf(4));
const newArr = myArr.join();
console.log(typeof newArr);
console.log(myArr);

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);
const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C ", myArr);
