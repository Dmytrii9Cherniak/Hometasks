// - создать массив с 20 числами.

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// -- при помощи метода sort и колбека  отсортировать массив.

// let newArray = array.sort( (a,b) => b + a );
// console.log(newArray);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let array2 = array.sort((a,b) =>  b - a );
// console.log(array2);

// -- при помощи filter получить числа кратные 3

// let array3 = array.filter( value => value % 3 === 0 );
// console.log(array3);

// -- при помощи filter получить числа кратные 10

// let array4 = array.filter( value => value % 10 === 0 );
// console.log(array4);

// -- перебрать (проитерировать) массив при помощи foreach

// let array5 = array.forEach(value => console.log(value));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let array6 = array.map(value => value*3);
// console.log(array6);

//  =======================================================

// - создать массив со словами на 15-20 элементов.

// let task2 = [ ' laptop ' , 'java', 'plugin',  'win' , 'victory' , 'job'  , 'hardwork' , 'book' , 'notebook' ,  'pen' , 'tablet'  ,  'sensor' ,  'keys' , 'aim' ,  'education'  ];

// -- отсортировать его по алфавиту в восходящем порядке.

// let firstWay = task2.sort();
// console.log(firstWay)
//
// або
//
// let secondWay= task2.sort( (a,b) => {
//     if(a.toLowerCase() > b.toLowerCase()) return 1;
//     if(a.toLowerCase() < b.toLowerCase()) return -1;
// })
//
// console.log(secondWay);

// -- отсортировать его по алфавиту  в нисходящем порядке.

/*let firstWayBack = task2.reverse();
console.log(firstWayBack);

або

let secondWayBack = task2.sort((a,b)=> {
    if(a.toLowerCase() > b.toLowerCase()) return -1;
    if(a.toLowerCase() < b.toLowerCase()) return 1;
})

console.log(secondWayBack);*/

// -- отфильтровать слова длиной менее 4х символов

// let letters42 = task2.filter(  value => value.length < 4 ) ;
// console.log(letters42);

// або

// let letter4 = task2.filter(function (letter){
//     return letter.length < 4;
// });
// console.log(letter4)

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let next = task2.map(value => value + '!');
// console.log(next);

//  =======================================================

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :

// let users = [{name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {
//     name: 'kolya',
//     age: 29,
//     status: true
// }, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {
//     name: 'anya',
//     age: 31,
//     status: false
// }, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {
//     name: 'masha',
//     age: 30,
//     status: true
// }, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true}];

// - відсортувати його за  віком (зростання , а потім окремо спадання)

// По зростанню
// users.sort((a,b)  => a.age - b.age);
// console.log(users);
//
// По спаданню
// users.sort((a,b)=> b.age - a.age);
// console.log(users);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// По зростанню

// let nameLength =JSON.parse(JSON.stringify(users))
// let nextTask = nameLength.sort( (a,b) => a.name.length - b.name.length);
// console.log(nextTask);

// По спаданню

// let nameLengthback = JSON.parse(JSON.stringify(users));
// let thisTaskBack = nameLengthback.sort((a,b) => b.name.length - a.name.length);
// console.log(thisTaskBack);


// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// let  array = JSON.parse(JSON.stringify(users));
// let idUsers = users.map((member,index)=> {
//     member.id = index;
//     return member;
// });
// console.log(array);
// console.log(idUsers);

// - відсортувати його за індентифікатором


// let  array = JSON.parse(JSON.stringify(users));
// let idUsers = users.map((member,index)=> {
//     member.id = index;
//     return member;
// });
// console.log(array);
// console.log(idUsers);
//
// idUsers.sort((a, b)=>a.id - b.id);

// -- наисать функцию калькулятора с 2мя числами и колбеком

// function  calc (a,b, callback){
//     return callback (a,b);
// }
// console.log(calc(31,39,(a,b) =>a+b));

// -- наисать функцию калькулятора с 3мя числами и колбеком

// function  calculator (a,b,c, callback) {
//     return callback (a,b,c);
// }
// console.log(calculator(43223342, 525252,2543234,(a,b,c) => ( a * b ) /c  ));