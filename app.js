// // Data types and variable declaration

// const name = "Osinachi";
// console.log(name);
// console.log(typeof(name));

// let age = 20;
// console.log(age);
// console.log(typeof(age));

// const isMarried = true;
// console.log(isMarried);
// console.log(typeof(isMarried));

// let accountNumber;
// console.log(accountNumber);
// console.log(typeof(accountNumber));

// const accountBalance = null;
// console.log(accountBalance);
// console.log(typeof(accountBalance));

// const students = ["John", "Doe", "Smith"];
// console.log(students);
// console.log(typeof(students));

// const car = {
//     name:"volvo",
//     color:"grey",
//     mileage:2000,
//     isNew: false,
//     owner: undefined
// }
// console.log(car);
// console.log(typeof(car));




// ************* Naming convention ******************

/**
 * Rules in naming convention
 * don't start with a number
 * don't start with a symbol except the dollar sign "$" or underscore "_" like the examples below;
 * */

// accepted naming convention

// let accountBalance = 60; // camel case
// let account_balance = 50; // snake case
// let ACCOUNT_BALANCE = 40; // Pascal case
// let $accountBalance = 30;
// let _accountBalance = 20;
// let accountBalance1 = 10;






// // Operators

// const previousBalance = 2;
// const deposit = 3;
// console.log(previousBalance + deposit);

// const currentBalance = 5;
// const withdrawal = 2;

// console.log(currentBalance - withdrawal);

// console.log(10 / 2);
// console.log(4 * 3);
// console.log(5 % 2);
// const value = 45;
// console.log(5 == 4);
// console.log(5 === "5");


// String methods

// let firstName = "John";
// let lastName = 'Doe';
// let middleName = `Smith`;
// let space = " ";

// console.log(firstName);
// console.log(lastName);
// console.log(middleName);

// conncartenation

// console.log(firstName + " " + lastName + " " + middleName);
// console.log(`${firstName} ${lastName} ${middleName}`);

// console.log(firstName.length);
// console.log(firstName[1]);
// console.log(firstName.charAt(2));

// console.log(firstName.toUpperCase());
// console.log(lastName.toLowerCase());

// console.log(firstName.startsWith("j"));
// console.log(firstName.endsWith("n"));

// console.log(firstName.includes("o"));

// console.log(firstName.indexOf("h"));

// let sentence = "I Love Yams";
// console.log(sentence.replace("Yams", "Plantains"));

// let sentenceWhiteSpace = " I Love Yams ";

// console.log(sentenceWhiteSpace);
// console.log(sentenceWhiteSpace.trim());


// let firstName = "Smith";
// let lastName = "Doe";

// function addTwoVals(){
//     let val1 = 1;
//     let val2 = 2;
//     console.log(val1 + val2);
// }

// addTwoVals();

// const addTwoNums = () => {
//     let val1 = 4;
//     let val2 = 2;
//     console.log(val1 + val2);
// }

// addTwoNums();

// const concartNames = () => {
//     console.log(`${firstName} ${lastName}`);
// }

// concartNames();

// const concartNameVal = (maidenName, middleName) => {
//     console.log(`${maidenName} ${middleName}`);
// }

// concartNameVal("Rose", "Emmanuel");
// concartNameVal("Daniela", "Owen");

// const calcBMI = (mass, height) => {
//     let bmi = mass / (height * height);
//     console.log(bmi);
// }

// calcBMI(75,5);
// calcBMI(100,2);
// calcBMI(50,1.5);



// CONTROL FLOW EXPRESSION

// let gender = "No identity";

// if(gender == "male") {
//     console.log("Welcome Mr")
// } else if(gender == "female") {
//     console.log("welcome Mrs")
// } else {
//     console.log("not recognized");
// }

// let numberVal = 2;

// switch(numberVal){
//     case 2:
//         console.log("correct");
//         break;
//     case 10:
//         console.log("not correct");
//         break;
//     default:
//         console.log("default value");
// }

// let arrNames = ["Michael", "Gabriel", "Israel", "Raphael"];

// for(let i = 0; i < arrNames.length; i = i + 1){
//     console.log(arrNames[i]);
// }



// push, pop, shift, unshift, splice, map, filter, find;


// let arrNames = ["Michael", "Gabriel", "Israel", "Raphael"];

// console.log(arrNames);

// arrNames.push("Daniel");

// console.log(arrNames);

// arrNames.pop();

// console.log(arrNames);

// arrNames.shift();

// console.log(arrNames);

// arrNames.unshift("Paul");

// console.log(arrNames);

// arrNames.splice(1, 2);

// console.log(arrNames);

// arrNames.push("Peter");

// console.log(arrNames);


// // arrNames.map(name => console.log(name + "son"));


// let newArrNames = ['Michael', 'Gabriel', 'Israel', 'Raphael', 'Daniel', "Jacob"];

// let res = newArrNames.filter(name => name.endsWith("l"));

// console.log(res);



// const counterDiv = document.getElementById('counter');  
// const decrementButton = document.getElementById('decrement');
// const incrementButton = document.getElementById('increment');

// decrementButton.className = "decrementStyle";
// incrementButton.className = "incrementStyle";

// let count = 0;

// counterDiv.textContent = count;

// const updateCount = () => {
//     counterDiv.textContent = count;
// }

// incrementButton.addEventListener('click', ()=> {
//     count = count + 1;
//     updateCount();
// })

// decrementButton.addEventListener('click', ()=> {
//     if(count > 0) count = count - 1;
//     updateCount();
// })


const wrapper = document.getElementById("wrapper");
wrapper.className = "wrapper";

const card = document.createElement("div");
card.className = "card";

const img = document.createElement("img");
img.src = "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
img.style.height = "100px";

const title = document.createElement("h3");
title.textContent = "Polo";

const price = document.createElement("h5");
price.textContent = "$40";
price.style.color = "green";

const description = document.createElement("p");
description.textContent = "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches)";
description.style.color = "grey";

const submitButton = document.createElement("button");
submitButton.textContent = "open";
submitButton.style.background = "orange";

card.appendChild(img);
card.appendChild(title);
card.appendChild(price);
card.appendChild(description);
card.appendChild(submitButton);

wrapper.appendChild(card);












































































