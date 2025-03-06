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

const imageWrapper = document.createElement("div");
imageWrapper.className = "img-wrapper";

const image = document.createElement("img");
image.src = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";

const contentWrapper = document.createElement("div");
contentWrapper.className = "content-wrapper";

const titleBlock = document.createElement("div");
titleBlock.className = "title-block";

const title = document.createElement("span");
title.title = "title"
title.textContent = "Hand Bag";

const des = document.createElement("p");
des.className = "des";
des.textContent = "Nice female Hand bag";

const price = document.createElement("h3");
price.className = "price";
price.textContent = "$40";

const button = document.createElement("button");
button.className = "buy-now";
button.textContent = "open";

card.appendChild(imageWrapper);
card.appendChild(contentWrapper);
imageWrapper.appendChild(image);
contentWrapper.appendChild(titleBlock);
card.appendChild(button);

titleBlock.appendChild(title);
contentWrapper.appendChild(price);
contentWrapper.appendChild(des);


wrapper.append(card);














































































