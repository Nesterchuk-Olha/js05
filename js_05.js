

//Confirms
{
const arr = [confirm('Ви жінка?'), confirm('Надворі літо?'), confirm('Ви повнолітній?')];
console.log(arr);
}

//Prompts
{
let arr = [];
arr[0] = prompt('Якої ви статі?');
arr[1] = prompt('Яка пора року зараз?');
arr[2] = prompt('Скільки вам років?');
console.log(arr);
}

//Item access
{
arr = ['a', 'b', 'c', 'd', 'e', 'f'];
let index = prompt('Введіть індекс у масиві');
let a = arr[index];
console.log(a);
}

//Multiply table
{
const arr = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = i * j;
    }
  }
console.log(arr);
}

//Multiply table slice
{
    const arr = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          arr[i][j] = i * j;
        }
      }
    const arr_1 = arr[1].slice(-4);
    const arr_2 = arr[2].slice(-4);
    const arr_3 = arr[3].slice(-4);
    const arr_4 = arr[4].slice(-4);
    newarr = [arr_1, arr_2, arr_3, arr_4]
    console.log(newarr);
}

//IndexOf Word
{
    let str = prompt('Введіть рядок для пошуку слова');
    let word = prompt('Яке слово потрібно знайти?');
    const arr = str.split(' ');
    let result = arr.indexOf(word);
    if (result === -1) {
        console.log("Слово не знайдено");
    } else {
    console.log(result + 1);
    }
}

//Reverse, Reverse 2
{
    const arr = [];
    let elem_1 = prompt('Введіть перший елемент');
    let elem_2 = prompt('Введіть другий елемент');
    let elem_3 = prompt('Введіть третій елемент');
    let elem_4 = prompt('Введіть четвертий елемент');
    let elem_5 = prompt('Введіть п\'ятий елемент');
    arr.push(elem_1, elem_2, elem_3, elem_4, elem_5);
    console.log(arr);
    const arr_2 = [];
    let elem_2_1 = arr.pop();
    let elem_2_2 = arr.pop();
    let elem_2_3 = arr.pop();
    let elem_2_4 = arr.pop();
    let elem_2_5 = arr.pop();
    arr_2.push(elem_2_1, elem_2_2, elem_2_3, elem_2_4, elem_2_5);
    console.log(arr_2);
    let elem_r_1 = arr_2.shift();
    let elem_r_2 = arr_2.shift();
    let elem_r_3 = arr_2.shift();
    let elem_r_4 = arr_2.shift();
    let elem_r_5 = arr_2.shift();
    const arr_3 = [];
    arr_3.unshift(elem_r_5, elem_r_4, elem_r_3, elem_r_2, elem_r_1);
    console.log(arr_3);
}

//Copy 
{
    const arr = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          arr[i][j] = i * j;
        }
      }
    console.log(arr);
    const arr_2 = [...arr];
    console.log(arr_2);
}

//Deep Copy
{
    const arr = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          arr[i][j] = i * j;
        }
      }
    console.log(arr);
    const deepcopy = arr.map(x => x);
    console.log(deepcopy);
}

//Array Equals
//Масиви не можуть бути строго рівні один одному, оскільки вони зберігаються у різних областях пам'яті

//Flat
{
const arr = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = i * j;
    }
  }
console.log(arr);
const arr_2 = [].concat(...arr);
console.log(arr_2);
}

//Destruct
{
let str = prompt('Введіть рядок');
const arr = str.split('');
const [a, , , , b, , , ,c, ...something] = arr;
console.log(a,b,c);
}

//Destruct default
{
let str = prompt('Введіть рядок');
const arr = str.split('');
const [ , a='!' , b='!', c='!', ...something] = arr;
if (a === "") {
    console.log("!");
} else {
console.log(a,b,c);
}
}

//Multipy table rest
{
    const arr = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          arr[i][j] = i * j;
        }
      }
    let [[...rest], [a, ...rest_1], [b, ...rest_2], [c, ...rest_3], [d, ...rest_4] ] = arr;
    const arr_2 = [rest_1, rest_2, rest_3, rest_4];
    console.log(arr_2);
}

//For Alert
{
  const names = ["John", "Paul", "George", "Ringo"];
  for (const name of names) {
    alert(`${name}`);
  }
}

//For Select Option
{
const currencies = ["USD", "EUR", "GBP", "UAH"]
let   str = "<select>"
for (const currency of currencies){
  str+= `<option>${currency}</option>`;
}
str+= "</select>";
document.write(str);
}

//For Table Horizontal
{
const names = ["John", "Paul", "George", "Ringo"]
let   str = "<table>"
for (const name of names){
  str+= `<td>${name}</td>`;
}
str+= "</table>";
document.write(str);
}

//For Table Vertical
const names = ["John", "Paul", "George", "Ringo"]
let   str = "<table>"
for (const name of names){
  str+= `<tr><td>${name}</td></tr>`;
}
str+= "</table>";
document.write(str);

//For Table Letters
{
const currencies = ["USD", "EUR", "GBP", "UAH"];
let   str = "<table>";
for (const currency of currencies) { 
  str += "<tr>";
  console.log(currency);
for (const letter of currency) { 
  str += `<td>${letter}</td>`;
  console.log(letter);
}
str += "</tr>";
}
str += "</table>";
document.write(str);
}

//For Multiply Table 
{
  const arr = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] = i * j;
  }
}

let str = "<table>";
for (let i = 0; i < arr.length; i++) {
  const rowColor = i % 2 === 0 ? "lightgray" : "white";
  str += `<tr style="background-color: ${rowColor};">`;
  for (const number of arr[i]) {
    str += `<td>${number}</td>`;
  }
  str += "</tr>";
}
str += "</table>";
document.write(str);
}

//Function Capitalize

{
  const capitalize = str => {
    let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return result;
}
console.log(capitalize("cANBerRa"));
}

//Map Capitalize
{
let str = prompt('Введіть рядок');
const arr = str.split(' ');
const capitalize = str => {
  let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return result;
}
const arr_2 = arr.map(x => capitalize(x));
const str_2 = arr_2.join(' ');
console.log(str_2);
}

//Filter Lexics
{
const arr_0 = ["неприпустимі", "слова", "масив"];
let str = prompt('Введіть рядок');
const arr = str.split(' ');
const arr_2 = arr.filter(x => !arr_0.includes(x));
const str_2 = arr_2.join(' ');
console.log(str_2);
}

//Beep Lexics
{
const arr_0 = ["неприпустимі", "слова", "масив"];
let str = prompt('Введіть рядок');
const arr = str.split(' ');
const arr_2 = arr.map(x => arr_0.includes(x) ? "BEEP" : x);
const str_2 = arr_2.join(' ');
console.log(str_2);
}

//Reduce HTML
{
const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<select>";
str += currencies.reduce((a, b) => a + `<option>${b}</option>`, "");
str += "</select>";
document.write(str);
}

//For Brackets Hell Check
const line = prompt();
const bracketsStack = [];
let i = 0;
for (const character of line) {
  if (character === '(' || character === '{' || character === '[') {
    bracketsStack.push(character); // додати в стек відкриваючу дужку
  } else if (character === ')' || character === '}' || character === ']') {
    const lastOpeningBracket = bracketsStack.pop(); // видалити останню відкриваючу дужку зі стека

    // перевірити відповідність закриваючої дужки останній відкриваючій дужці
    if (
      (character === ')' && lastOpeningBracket !== '(') ||
      (character === '}' && lastOpeningBracket !== '{') ||
      (character === ']' && lastOpeningBracket !== '[')
    ) {
      console.log("Помилка: непарні дужки");
      break;
    }
  }

  i++; // індекс поточної літери
}

if (bracketsStack.length === 0) {
  console.log("Правильний рядок дужок");
} else {
  console.log("Помилка: непарні дужки");
}