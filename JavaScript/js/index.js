"use strict"

// Chat

// const canliYardimToggle = document.querySelector('.canli-yardim-toggle');
// const canliYardimRow = document.querySelector('.canli-yardim-row');
// const trash = document.querySelector('.trash');
// const close = document.querySelector('.close');
// const send = document.querySelector('.send');
// const messageBox = document.querySelector('.message-box');
// const userInput = document.querySelector('input');

// userInput.onkeyup = function(e)
// {
//     if(e.keyCode === 13)
//     {
//         proccess();
//     }
// }

// canliYardimToggle.onclick = function()
// {
//     canliYardimRow.classList.remove('d-none');
//     canliYardimToggle.classList.add('d-none');
// }
// close.onclick = function()
// {
//     canliYardimRow.classList.add('d-none');
//     canliYardimToggle.classList.remove('d-none');
// }
// send.onclick = function()
// {
//     proccess();
//     userInput.focus();
// }

// function proccess()
// {
//     const userText = userInput.value.trim();
//     if(userText !== '')
//     {
//         const userMessage = document.createElement('li');
//         const img = document.createElement('img');
//         if(userText[0] === userText[0].toUpperCase())
//         {
//             userMessage.className = 'list-group-item text-right bg-transparent text-white my-1';
//             userMessage.innerText = userText;
//             img.src = 'images/user.jpg';
//             img.className = 'ml-3';
//             userMessage.appendChild(img);
//         }
//         else
//         {
//             userMessage.className = 'list-group-item bg-transparent text-white my-1';
//             const span = document.createElement('span');
//             span.innerText = userText;
//             img.src = 'images/operator.jpg';
//             img.className = 'mr-3';
//             userMessage.appendChild(span);
//             userMessage.insertBefore(img, span);
//         }
//         messageBox.appendChild(userMessage);
//         userInput.value = '';
//         userMessage.onclick = function()
//         {
//             this.classList.toggle('li-hover');
//             if(this.classList.contains('li-hover'))
//             {
//                 trash.classList.remove('d-none');
//                 trash.onclick = function()
//                 {
//                     let deleteLi = document.querySelectorAll('.li-hover');
//                     for(let i = 0; i < deleteLi.length; i++)
//                     {
//                         deleteLi[i].className = 'd-none';
//                     }
//                     this.classList.add('d-none');
//                 }
//             }
//             let deleteLi = document.querySelector('.li-hover');
//             if(deleteLi == undefined)
//             {
//                 trash.classList.add('d-none');
//             }
//         }
//         messageBox.scrollTo(0, messageBox.scrollHeight);
//     }
// }

// Tasks

let arr = [1, 5, 9, 10, 14, 15];
let arr2 = [];
let arr3 = ['samir@gmail.com', 'kamal@mail.ru', 'bakhtiyar@code.edu.az', 'reshad@hotmail.ru', 'elchin@code.edu.az'];

// 1-ci Task

// 1-ci variant

// function filter(arr, callBackFunc)
// {
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(callBackFunc(arr[i]))
//         {
//             arr2.push(arr[i]);
//         }
//     }
//     return arr2;
// }
// console.log(filter(arr, n => n % 5 === 0));

 // 2-ci variant

// arr.filter(n => n % 5 === 0 ? arr2.push(n): null);
// console.log(arr2);


// 2-ci Task
// 1-ci variant

// function map(arr, callBackFunc)
// {
//     for(let i = 0; i < arr.length; i++)
//     {
//             arr2.push(callBackFunc(arr[i]));
//     }
//     return arr2;
// }
// map(arr, n => n * 2);
// console.log(arr2);

//2-ci variant

// console.log(arr.map(n => n * 2));

// 3-cu Task
// 1-ci variant

// function reduce(arr, callBackFilter, callBackReduce)
// {
//     let total = 0;
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(callBackFilter(arr[i]))
//         {
//             total = callBackReduce(total, arr[i]);
//         }
//     }
//     return total;
// }
// console.log(reduce(arr, (arr, n => n % 2 === 0), (total, item) => total + item));

// 2-ci variant

// console.log(arr.
//     filter(n => n % 2 ===  0).
//     reduce((acc, cur) => acc + cur));

// 4-cu Task

// 1-ci variant

// function find(arr, callBackFunc)
// {
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(callBackFunc(arr[i]))
//         {
//             return arr[i];
//         }
//     }
// }
// console.log(find(arr3, n => n.indexOf('code.edu.az') !== -1));

// 2-ci variant
// console.log(arr3.find(n => n.indexOf('code.edu.az') !== -1));
