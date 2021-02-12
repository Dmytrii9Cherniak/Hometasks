// 1 - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let player = { name: 'Erling', age: 20, status: true, };

// let phone = { name: 'honor', year: 2018, processor: 'kirin710', };

// let laptop = { model: 'Zenbook', price: 1500, country: 'China', };

// let tablet = { model: 'Tab S7', price: 'Expensive', country: 'Vietnam' };

// let sofa = { size: 'big', price: 'cheap', shop: undefined };


// 2 - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let car = {
//     name: 'VW PASSAT B8',
//     year: 2014,
//     price : undefined,
//     advantages: {
//         bodytype: 'Estate Car',
//         length: 4767,
//         width: 1832,
//     },
//     engine: ['capacityOfEngine: 1984' , 'horsePower: 190' , 'brandOfengine: CJSA' ]
// };

// let Samsung = {
//     model : 'Note 20',
//     year : 2020,
//     price: 25000,
//         characteristics : {
//             processor: 'Exynos 990 7 mn+',
//             RAM: 8,
//             battetyCapacity: 4300,
//         },
//     other: ['antutuTest: 517699' , 'size:  6,7' , 'display: Amoled' ]
// };

// let club = {
//     name: 'Borussia',
//     year: 1909,
//     yearPlace: 2,
//         information: {
//             leagueWins: 8,
//             sponsor: '1&1 Ionos ',
//             crisisYear: 2015
//         },
//     team: [ 'teamPlayers: 31' ,  'coach: Edin' , 'form: Yellow-Black' ]
// };

// let Ivano_Frankivsk = {
//     yearOfFoundation: 1662,
//     population: 230507,
//     square: '83,73km',
//         other :{
//             placeOfPopulation: 20, university: 'IFNTUNG' , biggestStreet: 'Pasichna'
//         },
//         compositionOfTheBopulation: [ 'Ukrainians: 212577', 'Armenians: undefined' , 'Jews: 256' ]
// };

// let Home = {
//     rooms: 15,
//     population: undefined,
//     status: false,
//         otherInformation:{
//             numberOfApartments: 'Many' , security: true, parkingPlace: 'Present' 
//         },
//         prices: [ 'apartment: undefined', 'parkingPlace: 195041' ,'security: 500'  ]
// }



// 3 - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// console.log('Виводжу всі ключі з 1 завдання');
// for (keys in player){
//     console.log(keys);
// }

// for (keys in phone){
//     console.log(keys);
// }

// for (keys in laptop){
//     console.log(keys);
// }

// for (keys in tablet){
//     console.log(keys);
// }

// for (keys in sofa){
//     console.log(keys);
// }

// console.log('Засовую їх в 1 загальний масив')
// let allKesysTask1 = [];
// for (const allKeys in player){
//     allKesysTask1.push(allKeys);
// }

// for (const allKeys in phone){
//     allKesysTask1.push(allKeys);
// }

// for (const allKeys in laptop){
//     allKesysTask1.push(allKeys);
// }

// for (const allKeys in tablet){
//     allKesysTask1.push(allKeys);
// }

// for (const allKeys in sofa){
//     allKesysTask1.push(allKeys);
// }

// console.log(allKesysTask1);




// console.log('Виводжу всі ключі з завдання 2 ')

// for (keys in car){
//     console.log(keys);
// }

// console.log('-------------------');

// for (keys in Samsung){
//     console.log(keys);
// }

// console.log('-------------------');

// for (keys in club){
//     console.log(keys);
// }

// console.log('-------------------');

// for (keys in Ivano_Frankivsk){
//     console.log(keys);
// }

// console.log('-------------------');

// for (keys in Home){
//     console.log(keys);
// }


// 4 - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// let keysTask1One = Object.keys(player)
// console.log(keysTask1One);

// let keysTask1Two = Object.keys(phone)
// console.log(keysTask1Two);

// let keysTask1Three = Object.keys(laptop)
// console.log(keysTask1Three);

// let keysTask1Four = Object.keys(tablet)
// console.log(keysTask1Four);

// let keysTask1Five = Object.keys(sofa)
// console.log(keysTask1Five);




// let keysTask2One = Object.keys(car)
// console.log(keysTask2One);

// let keysTask2Two = Object.keys(Samsung)
// console.log(keysTask2Two);

// let keysTask2Three = Object.keys(club)
// console.log(keysTask2Three);

// let keysTask2Four = Object.keys(Ivano_Frankivsk)
// console.log(keysTask2Four);

// let keysTask2Five = Object.keys(Home)
// console.log(keysTask2Five);


// 5 - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// let cars = [
//     Bugatti = {  model:'Chiron Super Sport', year: 2019, horsePower: 1600, color: 'blue', },
//     Volkswagen = { model: 'Passat B8', year: 2018, horsePower: 190, color: 'blue', },
//     Honda = { model: 'Accord', year: 2016, horsePower: 186, color: 'grey', },
//     Renault = { model: 'Duster', year: 2018, horsePower: 134, color: 'grey', },
//     Toyota = { model: 'Highlander', year: 2015, horsePower: 188, color: 'white' },
//     Opel = { model: 'Astra', year: 2006, horsePower: 90, color: 'gray', },
//     Chevrolet = { model: 'Corvette ZR1 (C6)', year: 2008, horsePower: 647, color: 'blue', },
//     Ford = { model: 'Mustang Shelby GT500 KR 40th', year: 2008, horsePower: 548, color: 'blue',},
//     Lamborghini = {model: 'Aventador', year: 2017, horsePower: 740, color: 'white', },
//     Mercedes = { model: 'SLS AMG', year: 2010, horsePower: 571, color: 'gray' }
// ];


// 6 - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let cities = [
//     { name: 'Lviv' , population: 721307, country: 'Ukraine' },
//     { name: 'Dortmund', population: 585813, country: 'Germany' },
//     { name: 'Amsterdam', population: 821752, country: 'Netherlands' },
//     { name: 'Paris', population: 2148000, country: 'France' },
//     { name: 'Cairo', population: 9540000, country: 'Egypt'},
// ];

// 7 - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

    // let carsTask7 = [
    //     { car: 'Volvo', model: 'FM13' , year: 2020, horsePower: 500,  color: 'grey', driver: { name: 'Roman', age: 23, state: 'male', experience: '2 years' } },
    //     { car: 'Scania', model: 'S730 A8X4YZ', year: 2020, horsePower: 640, color: 'gray' , driver: { name: 'Andriy', age: 41, state: 'male', experience: '11 years' } },
    //     { car: 'Renault', model: 'Magnum', year: 2020, horsePower: 520, color: 'black' , driver: { name: 'Taras', age: 21, state: 'male', experience: '0 years' } },
    //     { car: 'Mercedes', model : 'SLT', year: 2020, horsePower: 620, color: 'blue' , driver: { name: 'Julia', age: 25, state: 'female', experience: '3 years' }},
    //     { car: 'Iveco', model: 'Stralis', year: 2020, horsePower: 560, color: 'black' , driver: { name: 'Vlad', age: 35, state: 'male', experience: '10 years' }},
    // ];

// 8 - проитерировать каждый массив из задания 5,6,7 при помощи while.

    // let b=0;
    // while (b<cars.length){
    //     console.log(cars[b]);
    //     b++;
    // }

    // let c=0;
    // while (c<cities.length){
    //     console.log(cities[c]);
    //     c++;
    // }

    // let l=0;
    // while(l<carsTask7.length){
    //     console.log(carsTask7[l]);
    //     l++;
    // }

// 9 - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let i = 0; i < cars.length;i++){
//     console.log(cars[i]);
// }

// for (let b = 0; b < cities.length; b++){
//     console.log(cities[b]);
// }

// for (let n = 0; n < carsTask7.length; n++){
//     console.log(carsTask7[n]);
// }

// 10 - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for ( let car of cars){
//     console.log(car);
// }

// for ( let city of cities){
//     console.log(city);
// }

// for ( let carTask of carsTask7){
//     console.log(carTask);
// }

// 11 - взять объекты из задания 1 и превратить каждый в json.

// let jsonTask1One = JSON.stringify(player);
// let jsonTask1Two = JSON.stringify(phone);
// let jsonTask1Three = JSON.stringify(laptop);
// let jsonTask1Four = JSON.stringify(tablet);
// let jsonTask1Five = JSON.stringify(sofa);

// console.log(jsonTask1One);
// console.log(jsonTask1Two);
// console.log(jsonTask1Three);
// console.log(jsonTask1Five);
// console.log(jsonTask1Five);

// 12 - взять json из задания 11 и превратить их обратно в объекты.

// let JsonToObject1 = JSON.parse(jsonTask1One);
// let JsonToObject2 = JSON.parse(jsonTask1Two);
// let JsonToObject3 = JSON.parse(jsonTask1Three);
// let JsonToObject4 = JSON.parse(jsonTask1Four);
// let JsonToObject5 = JSON.parse(jsonTask1Five);

// console.log(JsonToObject1);
// console.log(JsonToObject2);
// console.log(JsonToObject3);
// console.log(JsonToObject4);
// console.log(JsonToObject5);


// 13 - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// for ( let o = 0; o < cars.length; o++){
//    let car = JSON.stringify(cars);
//    console.log(car)
// }f
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// for ( let g = 0; g < cities.length; g++){
//     let city = JSON.stringify(cities);
//     console.log(city);
// }
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let newEmptyArray = [];
// for ( let z = 0; z < carsTask7.length; z++ ){
//     let car7 = JSON.stringify(carsTask7);
//     console.log(car7);
//     newEmptyArray.push(car7);
// }
// console.log(newEmptyArray);

// 14 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

//  let users = [
//         {name: 'Oleg' , age: 29, status: true, skills: ['java' , 'html/css' , 'php' ],},
//         {name: 'Yevhen', age: 25, status: false, skills: ['C++' , 'Java,' , 'Node.js'],},
//         {name: 'Nestor', age: 33, status: false, skills: ['python', 'html/css,' , 'react'],},
//  ];

//  for (let user of users){
//      console.log(user);
//      for (let skill of user.skills){
//          console.log(skill);
//      }
//  }

// 15 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

let AllUsers = [];
let usersTask15 = [
    {name: 'Viktor' , age: 33, status: true, skills: ['C++' , 'Java,' , 'React'],},
    {name: 'Vasil', age: 27, status: true, skills: ['java' , 'html/css' , 'Node.Js' ],},
    {name: 'Oles', age: 21, status: true, skills: ['python', 'html/css,' , 'React'],},
];

for (let user1 of usersTask15){
    console.log(user1);
    for (let skill of user1.skills){
        console.log(skill);
        AllUsers.push(skill);
    }
}

console.log(AllUsers);