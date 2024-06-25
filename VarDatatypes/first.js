// let num = prompt("Enter marks:")
// if(num >= 80){
//     console.log("A grage");
// }else if(num >= 70 && num <=79){
//     console.log("B grade");
// }else if(num >=60 && num <= 69){
//     console.log("C grade");
// }else if(num >=50 && num<=59){
//     console.log("D grade");
// }else if(num >=0 && num <= 49){
//     console.log("F grade");
// }else{
//     console.log("Please enter  valid marks");
// }

// for(let i = 0;i<=100;i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// let gameNumber = 15;
// let guessNumber = prompt("Guess the number:");
// while(gameNumber != guessNumber){
//     guessNumber = prompt("Guess the number again:");
// }
// console.log("you win");

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let val of marks){
    
//     sum += val;
   
    
// }
// sum = sum/marks.length;
// console.log(sum);

// let items = [250,646,300,900,50];
// let i = 0;
// for(let val of items){
//     console.log(`value at indes ${i} is: ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`values after 10%  is:${items[i]}`);
//     i++;
// }
// for(let i = 0; i < items.length; i++){
//     console.log(`values at index ${i} is ${items[i]}`);
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;
//     console.log(`values after 10% is ${items[i]}`);
// }
// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// console.log(companies);
// let company = console.log(companies.shift());

// console.log(companies);
// console.log(companies.splice(1,1,"Ola"));
// console.log(companies);

// console.log(companies.push("Amazon"));
// console.log(companies);


// function countVowels(str){
//     let count = 0;
//     for(let char of str){
//         if(char ==="a" || char === "e" || char ==="i" || char === "o" || char === "u"){
//             count++;
//         }
       
//     }
//     console.log(count);
// }
// countVowels("hello world");

// const countVowels = (str) =>{
//     let count = 0;
//     for(let char of str){
//         if(char ==="a" || char === "e" || char ==="i" || char === "o" || char === "u"){
//             count++;
//         }
       
//     }
//     console.log(count);
// }

// countVowels("Hello");

// let arr = [1,2,3,4,5];

// arr.forEach((val) => {
//     console.log(val * val);
// });

// let arr = [88,99,95,86,82,96];


// let score = arr.filter((val)=>{
//     return val > 90;
// })
// console.log(score);

// let n = prompt("Enter a number");

// let arr =[];
// for(let i = 1;i<=n;i++){
//     // arr.push(i);
//     arr[i-1] =i
// }
// console.log(arr);
// let sum = arr.reduce((result,current)=>{
//      return result+current
// })
// console.log(sum);
// let fact = arr.reduce((result,current)=>{
//     return result*current
// })
// console.log(fact);
// let btn = document.createElement("button");
// btn.innerText = "Click me";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";

// document.querySelector("body").prepend(btn);        
let btn1 = document.querySelector("#btn1");
// btn1.onclick = ()=>{
//     console.log("clicked");
//     document.body.style.backgroundColor = "blue";
// } 
let mode = "light";
btn1.addEventListener("click", () => {
    
    if(mode == "light"){
        document.body.style.backgroundColor = "black";
        mode = "dark";
    }else{
        document.body.style.backgroundColor = "white";
        mode = "light";
    }
})