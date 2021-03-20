// - Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

// new Promise(resolve => {
//     setTimeout(()=>{
//         resolve('H');
//     },600);
// })
//
//     .then(value => {
//         console.log(value);
//         return new Promise(resolve => {
//             setTimeout(()=> {
//                 resolve('e');
//             },100);
//         })
//     })
//
// .then(value => {
//     console.log(value);
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('l');
//         },300);
//     })
// })
//
// .then(value => {
//     console.log(value);
//     return new  Promise(resolve => {
//         setTimeout(()=>{
//             resolve('l');
//         },700);
//     })
// })
//
// .then(value => {
//     console.log(value);
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('o');
//         },100);
//     })
// })
//
// .then(value => {
//     console.log(value);
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve(' ');
//         }, 100);
//     })
// })
//
// .then(value => {
//     console.log(value);
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('W');
//         },6000);
//     })
// })
//
// .then (value => {
//     console.log(value);
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('o');
//         },100);
//     })
// })
//
// .then (value => {
//     console.log(value);
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('r');
//         },300);
//     })
// })
//
// .then(value => {
//     console.log(value);
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve ('l');
//         },700);
//     })
// })
//
// .then (value => {
//     console.log(value);
//     return new Promise (resolve => {
//         setTimeout(()=>{
//             resolve('d');
//         },100);
//     })
// })
//
// .then(value => {
//     console.log(value);
// })


// -за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
//     За допомогою document.createElement вивести їх в браузер.
//     Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).

// let block = document.createElement('div');
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         for (let user of users){
//             let div = document.createElement('div');
//             div.innerText = `${user.id} ${user.name} ${user.email}`
//             block.appendChild(div);
//             document.body.appendChild(block);
//         }
//     })

// - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts.
//     За допомогою document.createElement вивести їх в браузер.
//     Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

// let div = document.createElement('div');
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         for (let post of posts){
//             let paragraph = document.createElement('p')
//             paragraph.innerText = `${post.userId} ${post.id} ${post.title} ${post.body}`;
//             div.appendChild(paragraph);
//             document.body.appendChild(div);
//         }
//     })

// - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments.
//     За допомогою document.createElement вивести їх в браузер.
//     Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

// let div = document.createElement('div');
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(comments => {
//         for (let comment of comments){
//             let pshka = document.createElement('p')
//             pshka.innerText = `${comment.postId} ${comment.id} ${comment.name} ${comment.email} ${comment.body}`
//             div.appendChild(pshka)
//             document.body.appendChild(div);
//         }
//     })

// -при помощи fetch (как в примере) получить от jsonplaceholder все posts.
//     Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments.
//     Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.
//     Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту

// let div = document.createElement('div');
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//          for (let post of posts){
//              post.comments = [];
//              fetch('https://jsonplaceholder.typicode.com/comments')
//                  .then(response => response.json())
//                  .then(comments => {
//                      for (let comment of comments){
//                          if (post.id === comment.postId){
//                              post.comments.push(comment);
//                          }
//                      }
//                      let h1 = document.createElement('h1')
//                      let ul = document.createElement('ul')
//                      let li = document.createElement('li')
//
//                      h1.innerText = `${post.id}`
//
//                      for (let comment of post.comments){
//                          li.innerText = `${comment.body}`
//                      }
//
//                      ul.appendChild(li)
//
//                      div.appendChild(h1)
//                      div.appendChild(ul)
//
//                      document.body.appendChild(div)
//                  })
//          }
//     });


function Product (title,price,categories) {
    this.title = title;
    this.price = price;
    this.categories = categories;
}

let product = new Product('milk' ,22,{a: 80, b:110})

// // Практичне завдання 05.03.2021 - на  промісах створити свій розпорядок дня
// new Promise(resolve => {
//     setTimeout(()=>{
//         resolve('Прокидання о 8:00');
//     },5500)
// })
//
//     .then(value => {
//         console.log(value);
//         return new Promise(resolve => {
//             setTimeout(() =>{
//                 resolve('Сніданок приблизно в 8:15 - 8:20');
//             },15000)
//         })
//     })
//     .then(value => {
//         console.log(value);
//         return new Promise(resolve => {
//             setTimeout(()=>{
//                 resolve('Відвідування пар університету в залежності від графіку пар (2 години )')
//             },7500)
//         })
//     })
//
//     .then(value => {
//         console.log(value);
//         return new Promise(resolve => {
//             setTimeout(()=>{
//                 resolve('Тренування в залі (Година - 1:30)')
//             },6500)
//         })
//     })
//
//     .then(value => {
//         console.log(value);
//         return new  Promise(resolve => {
//             setTimeout(()=>{
//                 resolve('Повернення додому разом із обідом')
//             },6500)
//         })
//     })
//
//     .then(value => {
//         console.log(value);
//         return new Promise(resolve => {
//             setTimeout(()=>{
//                 resolve('Вивчення матеріалу курсів разом із занотуванням і виконанням дз')
//             },9500)
//         })
//     })
//
//     .then(value => {
//         console.log(value);
//         return new Promise(resolve => {
//             setTimeout(()=>{
//                 resolve ('Відвідування лекцій / практики')
//             }, 7500)
//         })
//     })
//
//     .then(value => {
//         console.log(value);
//         return new Promise(resolve => {
//             setTimeout(()=>{
//                 resolve('Повторення матеріалу')
//             },4500)
//         })
//     })
//
//     .then(value => {
//         console.log(value);
//         return new Promise(resolve => {
//             setTimeout(()=>{
//                 resolve('Вечеря')
//             },5500)
//         })
//     })
//
//     .then(value => {
//         console.log(value);
//         return new Promise(resolve => {
//             setTimeout(()=>{
//                 resolve('Перегляд поєдинків / футбол / снукер')
//             }, 3650)
//         })
//     })
//
//     .then(value => {
//         console.log(value);
//         return new Promise(resolve => {
//             setTimeout(()=>{
//                 resolve('Сон')
//             },1150)
//         })
//     })
//
//     .then(value => {
//         console.log(value);
//     })