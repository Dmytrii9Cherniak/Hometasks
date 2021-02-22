// 1 - створити функцію яка виводить масив

// let array = [ 1, 2, 3, 4, 5 ];
// function getarray (array) {
//     console.log(array);
//     for (let myArray of array){
//         console.log(myArray);
//     }
// }
// getarray(array);

// 2 - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function anyNumbers (length, min, max){
//     let array = [];
//     for(let b = 0; b < length; b++){
//         array.push(Math.random() * (max - min) + min)
//     }
//     return array;
// }

// let massiv = anyNumbers(91,51,91);
// console.log(massiv);

// 3 - створити функцію яка приймає три числа та виводить та повертає найменше.

// function getmindigit (a,b,c){
//     let min;
//     if ( a < b && a < c) min = a;
//     if ( b < a && b < c) min = b;
//     if ( c < a && c < b) min = c;
//     return min;
// }
// let min = getmindigit (483482348, 42888238, 59329302);
// console.log(min);

// 4 - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function getmaxdigit (x,w,z){
//     let max;
//     if ( x > w && x > z) max = x;
//     if ( w > x && w > z) max = w;
//     if ( z > x && z > w) max = z;
//     return max;
// }
// let max = getmaxdigit (94398543829, 4023958429, 4829210);
// console.log(max);

// 5 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function getmydigits () {
//     let min = arguments[0];
//     let max = arguments[0];
//     for ( let number of arguments ){
//         if ( number > max ) max = number;
//         if ( number < min ) min = number;
//     }
//     console.log(max);
//     return min;
// }
// let min =  getmydigits(5432,5211,5214,5145,5814);
// console.log('------------------------------------');
// console.log(min);

// 6 - створити функцію яка виводить масив

// let digits = [19,32,11,9,7];
// function getnumbers (digits){
//     for(let numberofdigits of digits){
//         console.log(numberofdigits);
//     }
//     console.log(digits);
// }
// getnumbers(digits);

// 7 - створити функцію яка повертає найбільше число з масиву

// let digits1 = [19,32,11,9,7];
// function getbigdigit (){
//     let big = digits1[0];
//     for (let mydigit of digits1){
//         if (big < mydigit) big = mydigit;
//     }
//     return big;
// }
// let number = getbigdigit();
// console.log(number);

// 8 - створити функцію яка повертає найменше число з масиву

// let digits2 = [19,32,11,9,7];
// function getSmallDigit (){
//     let small = digits2[0];
//     for (let mySmallDigit of digits2){
//         if ( mySmallDigit < small ) small = mySmallDigit;
//     }
//     return small;
// }
// let smallNumber = getSmallDigit();
// console.log(smallNumber);

// 9 - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function medium (massiv){
//     let s = 0;
//     for ( let elements of massiv ){
//         s += elements;
//     }
//     return massiv;
// }
// let medium1 = medium([1,2,3,4]);
// console.log(medium1);

// 10 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function medium (massiv){
//     let s = 0;
//     for ( let elements of massiv ){
//         s += elements;
//     }
//     return s/massiv.length;
// }
// let medium1 = medium([1,2,3,4]);
// console.log(medium1);

// 11 - Створити функцію яка приймає масив будь яких об'єктів, та повертає значення кількості об'єктів в масиві

// let object = [
//     {
//       "postId": 1,
//       "id": 1,
//       "name": "id labore ex et quam laborum",
//       "email": "Eliseo@gardner.biz",
//       "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//     },
//     {
//       "postId": 1,
//       "id": 2,
//       "name": "quo vero reiciendis velit similique earum",
//       "email": "Jayne_Kuhic@sydney.com",
//       "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//     },
//     {
//       "postId": 1,
//       "id": 3,
//       "name": "odio adipisci rerum aut animi",
//       "email": "Nikita@garfield.biz",
//       "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
//     },
//     {
//       "postId": 1,
//       "id": 4,
//       "name": "alias odio sit",
//       "email": "Lew@alysha.tv",
//       "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
//     },
//     {
//       "postId": 1,
//       "id": 5,
//       "name": "vero eaque aliquid doloribus et culpa",
//       "email": "Hayden@althea.biz",
//       "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
//     }
//   ];

//   function getObject (obj){
//       let c = 0;
//       for (let one of obj){
//           if (typeof one === 'object'){
//               c++;
//           }
//       }
//       return c;
//   }

//   const number = getObject (object);
//   console.log(number);

//  12 - Створити функцію яка приймає масив будь яких об'ектів, та повертає загальну кількість полів в них

// function getfield (field){
//     let f = 0;
//     for (let pole of field){
//         if (typeof pole === 'object'){
//             for (let key in pole){
//                 f++;
//             }
//         }
//     }
//     return f;
// }

// const myField = getfield(object);
// console.log(myField);

// 13 - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// function addArray (array1, array2){
//     let emptyArray = [];
//     for (let i = 0; i < array1.length; i++){
//         emptyArray.push(array1[i] + array2[i]);
//     }
//     return emptyArray;
// }

// const result = addArray([1,2,3,4],[2,3,4,5]);
// console.log(result);

// 14 - приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let massiv = [1,2,3,4,5];

// function changedElement(arr,index){
//     let array = [...arr];
//     if(index < array.length-1){
//         let changing = array[index];
//         array[index] = array[index+1];
//         array[index+1] = changing;
//     }
//     return array;
// }
// let result = changedElement(massiv,2);
// console.log(massiv);
// console.log(result);

// 15 - створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.

// function transfer (massiv1){
//     let b = [];
//     let z = [];
//     for (let numbers of massiv1){
//         if (numbers === 0){
//             b.push(0);
//         } else{
//             z.push(numbers);
//         }
//     }
//     return z.concat(b);
// }
//  let result = transfer([1,3,5,7,0,6,6,2,5]);
//  console.log(result);

// 16 - Створити функцію яка : Додає в боді блок з текстом "Hello owu" і додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function createTag ( text, typeoftag ){
//     let tag = document.createElement(typeoftag);
//     tag.innerText = text || "Hello Okten";
//     document.body.appendChild(tag);
// }
// createTag(null, 'div');

// 17 - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

// let cars = [
//     {
//         name: 'Aston-Martin',
//         color: 'Grey',
//     },

//     {
//         name: 'Mercedes CLK GTR',
//         color: 'Grey',
//     },

//     {
//         name: 'Ford GT',
//         color: 'Red',
//     }
// ];
// function carsValues (myTransport, idTag){
//    let block = document.getElementById(idTag);
//    let ul = document.createElement('ul');
//    for (let p = 0; p < myTransport.length; p++){
//        let values = myTransport[p];
//        let li = document.createElement('li');
//        li.innerHTML = `${p+1} ${values.name}`;
//        ul.appendChild(li);
//    }
//    block.appendChild(ul);
// }
// carsValues(cars, 'cars');

// 18 - Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок


// let cars = [
//     {
//         name: 'Aston-Martin DB9',
//         color: 'Grey',
//         country: 'UK',
//         price: 350000,
//     },

//     {
//         name: 'Mercedes CLK GTR',
//         color: 'Grey',
//         country: 'Germany',
//         price: 1500000,
//     },

//     {
//         name: 'Ford GT',
//         color: 'Red',
//         country: 'USA',
//         price: 500000,
//     },
// ];

// function getElementsOfTask18Array (arrayElement,tag) {
//     let block = document.getElementsByTagName(tag)

//     for (let i = 0 ; i < arrayElement.length; i++) {
//         let part = arrayElement[i];
//         let div = document.createElement('div');
//         let name = document.createElement('h3');
//         let color = document.createElement('h4');
//         let country = document.createElement('h5');
//         let price = document.createElement('h6');

//         name.innerHTML = `${part.name}`;
//         color.innerHTML = `${part.color}`;
//         country.innerHTML = `${part.country}`;
//         price.innerHTML = `${part.price}`;

//         div.appendChild(name);
//         div.appendChild(color);
//         div.appendChild(country);
//         div.appendChild(price);

//         block[0].appendChild(div);
//     }
// }
// getElementsOfTask18Array(cars,"body");

// 19 - функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

// function connectArray(array1, array2){
//     let us = JSON.parse(JSON.stringify(array1));
//     let cit = JSON.parse(JSON.stringify(array2));

//     for (let city of cit){
//         for (let user of us){
//             if(city.user_id === user.id){
//                 user.adress = city;
//             }
//         }
//     }
//     return us;
// }
// let result = connectArray(usersWithId,citiesWithId);
// console.log(result);