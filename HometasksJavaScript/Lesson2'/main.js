// Cтворити масив з: 5 числових значень , з 5 стічкових значень , з 5 значень стрічкового, числового та булевого типу та вивести його в консоль

let str = [ 1, 3, 9, 11, 19 ];
console.log(str);

let rts = [ ' Hello ', ' Borussia ', ' Okten ', ' Web ', ' =) ' ];
console.log(rts);

let tsr = [ 1, 3, 9, 11, 19 ];
console.log(tsr);

let bvb = [ ' Hello ', ' Borussia ', ' Okten ', ' Web ', ' =) ' ];
console.log(bvb);

let drt = [ true, false, false, true, true ];
console.log(drt);

console.log('--------------------');

// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let myArray = [];

myArray[0] = 1, 2, 3;
myArray[3] = ' I am an Array ';
myArray[5] =  true;

console.log(myArray);

console.log('--------------------');

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for ( i = 0; i < 9; i++){
    document.write(' <div> Hello </div> <br>')
}


//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for ( i = 0; i < 11; i++) {
    document.write('<div> Borussia '+1909+' Dortmund </div> <br>')
}

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let w = 0;
while ( w < 20 ) {
    document.write(`<div> HomeWork </div> <br>`);
    w++;
}

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let d = 0;
while ( d < 20 ) {
    document.write(`<div> Place ${2} </div> <br>`);
    d++;
}

//Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let carrier = [ 1, 3, 5, 7, 9, 11, 13, 15, 19, 21 ];
for (let j = 0; j < carrier.length; j++) {
    console.log(carrier[j]);
}

console.log('--------------------');

//Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let rog = [ ' One ' , ' three ' , ' five ', ' seven ' , ' nine ' , ' eleven ' , ' five ', ' seven ' , ' nine ' , ' eleven ' ];
for (let j = 0; j < rog.length; j++) {
    console.log(rog[j]);
}

console.log('--------------------');

//Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let gor = [ 'Hello' , 'Okten', 'Web', 9 , 11, 7 , true, false, true, undefined ];
for (let j = 0; j < gor.length; j++){
    console.log(gor[j]);
}

console.log('--------------------');

//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


let ten = [ undefined, 9, 11, 19, true, false, true, 'Hello' , 'The best'];

for(let i = 0; i < ten.length; i++)
if (typeof ten[i] === 'boolean'){
    console.log(ten[i])
}   else {
    if (typeof ten[i] === 'number'){
        console.log(ten[i])
    } else {
     if (typeof ten[i] === 'string'){
         console.log(ten[i])
     }
        }
}

console.log('--------------------');

//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let grey = [];

grey[3] = 'Hello';
grey[1] = true;
grey[5] = 1,9,11;

for (let i = 0; i < grey; i++){
    console.log(i);
}

console.log('--------------------');

//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(' Крок : ', i);
    document.write('Крок :' , i , '<br>' , '<br>');
}

console.log('--------------------');

//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(' Крок : ', i);
    document.write('Крок :' , i , '<br>' , '<br>');
}

console.log('--------------------');

//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i=i+2) {
    console.log(' Крок : ', i);
    document.write('Крок :' , i , '<br>');
}

console.log('--------------------');

//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i%2 === 0){
    console.log(' Парні : ', i);
    document.write('Парні :' , i , '<br>' , '<br>');
    }
}

console.log('--------------------');

//Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i%2 === 1){
    console.log(' Непарні: ', i);
    document.write('Непарні :' , i , '<br>');
    }
}

console.log('--------------------');

//Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

const Counter = 59;

let seconds = 0;
let minutes = 0; 
    for(let i = 0; i <= 59 && minutes !== 2; i++){
        console.log('Minutes:', minutes++);
for (let i = 0; i <= Counter; i++){
    console.log('Seconds:' , seconds++);
}
seconds=0;
}

console.log('----------------------')

//Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

const Clocks = 59;

let hrs = 0;
let mnt = 0;
let sec = 0;

for ( let i = 0; i<=23 && hrs !==2 && mnt !== 20; i++ ) {
    console.log('Hours:' , hrs++);
    for (let i = 0; i<= Clocks && hrs !== 2 && mnt !==20; i++ ){
        console.log('Minutes',  mnt++);
        for (let i = 0; i <= Clocks; i++){
            console.log('Seconds', sec++)
        }
        sec = 0;
    }
    mnt = 0;
}
