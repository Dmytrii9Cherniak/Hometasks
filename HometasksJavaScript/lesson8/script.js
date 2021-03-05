//   1 - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// Лише закривається

// document.getElementById('hide').onclick = function (){
//     document.getElementById('text').hidden = true;
// }

//  Закривається і відкривається (Варіант 1)

// document.getElementById('hide').onclick = function() {
//     document.getElementById('text').hidden = !document.getElementById('text').hidden;
// }

// Закривається і відкривається (Варіант 2  разом робили)

// let btn = document.querySelector('#hide');
// let text = document.querySelector('#text');
//
// btn.onclick = () => {
//     text.classList.toggle(  'active');
// }


//   2 - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// document.getElementById('task2').onclick = function () {
//      document.getElementById('task2').hidden = true;
//  }

//   3 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let pressing = document.getElementById('press');
// pressing.onclick = function checkAge () {
//     let check = document.getElementById('age');
//     let myAge = check.value;
//     if(myAge < 18 && myAge > 0){
//         alert('You are so young for this site');
//     }
//         if (myAge >= 18 && myAge < 100 ){
//             alert('Welcome to our site');
//         }
//     if (myAge <=0 || myAge >= 100){
//         alert('Wrong age');
//     }
// }

// if (!Number.isNaN(myAge)) {
//     alert("Wrong");
// }


//   4- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let task4 = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// ];
//
// let block = document.getElementById('comments');
// task4.forEach(task => {
//     let div = document.createElement('div');
//     let h5 = document.createElement('h5');
//     let p = document.createElement('p');
//     let knopka = document.createElement('button');
//
//     knopka.innerText = 'Сховати елемент';
//     h5.innerText = task.title;
//     p.innerText = task.body;
//
//     knopka.onclick = () => {
//         p.hidden
//             ?p.hidden = false
//             :p.hidden = true
//     }
//
//     div.appendChild(h5);
//     div.appendChild(p);
//     div.appendChild(knopka);
//
//     block.appendChild(div);
// })



//   5  - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

//     let badWords = [ 'дуже погане слово', 'нецензурне слово', 'образливе слово', 'заїдливе слово', 'обсценне слово'];
//     let button = document.getElementById('task5');
//     let inputs = document.getElementById('myText');
//
// button.onclick = () => {
//     if (badWords.includes(inputs.value.toLowerCase())) {
//         alert('Аяйяй, так говорити не можна');
//     }
// };