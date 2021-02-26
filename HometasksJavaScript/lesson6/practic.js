// 1 -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


// Тег <А>

// function tagA (tag, tagAction, atribut){
//     this.tag = tag;
//     this.tagAction = tagAction;
//     this.atribut = atribut;
// }
// let tag = '<a>';
// let tagAction = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
// let atribut = [
//     {atribut: 'accesskey', atrubutAction: 'Активация ссылки с помощью комбинации клавиш'},
//     {atribut: 'coords', atrubutAction: 'Устанавливает координаты активной области.'},
//     {atribut: 'download' , atrubutAction: 'Предлагает скачать указанный по ссылке файл.'},
// ];
// let a = new tagA (tag, tagAction, atribut);
// console.log(a);

// Тег <div>

// function tagDiv (tag, tagAction, atributs){
//     this.tag = tag;
//     this.tagAction = tagAction;
//     this.atributs = atributs;
// }
// let tag = '<div>';
// let tagAction = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.\n' +
//     '\n' +
//     'Как и при использовании других блочных элементов, содержимое тега <div> всегда начинается с ново';
// let atrubuts = [
//     {atribut: 'align', atributAction: 'Задает выравнивание содержимого'},
//     {atribut: 'title', atributAction: 'Добавляет всплывающую подсказку к содержимому.'},
// ];
// let result = new tagDiv(tag,tagAction,atrubuts);
// console.log(result)

//  Тег <h1>

// function tagH1 (tag, tagAction, atributs) {
//     this.tag = tag;
//     this.tagAction = tagAction;
//     this.atributs = atributs;
// }
// let tag = '<h1>';
// let tagAction = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.';
// let atributs = [
//     {atribut: 'align', atributAction: 'Определяет выравнивание заголовка./'},
// ];
// let h1result = new tagH1(tag, tagAction, atributs);
// console.log(h1result);

//  Тег <span>

// function tagSpan(tag, tagAction, atributs) {
//     this.tag = tag;
//     this.tagAction = tagAction;
//     this.atributs = atributs;
// }
//
// let tag = '<span>';
// let tagAction = 'Тег <span> предназначен для определения строчных элементов документа';
// let atributs = [
//     {atributs: 'Нема атрибутів'}
// ];
// let spanResult = new tagSpan(tag,tagAction, atributs);
// console.log(spanResult);

//  Тег <input>

// function tagInput (tag,tagAction,atributs) {
//     this.tag = tag;
//     this.tagAction = tagAction;
//     this.atributs = atributs;
// }
//
// let tag = '<input>';
// let tagAction = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.';
// let atributs = [
//     {atribut: 'accept', atributAction: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//     {atribut: 'checked', atributAction:'Предварительно активированный переключатель или флажок.'},
//     {atribut: 'disabled', atributAction: 'Блокирует доступ и изменение элемента.'},
// ];
// let inputResult = new tagInput(tag, tagAction, atributs);
// console.log(inputResult);

// Тег <form>

// function tagForm (tag, tagAction, atributs) {
//     this.tag = tag;
//     this.tagAction = tagAction;
//     this.atributs = atributs;
// }
//
// let tag = '<form>';
// let tagAction = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.';
// let atributs = [
//     {atribut: 'name', atributAction: 'Имя формы.'},
//     {atribut: 'novalidate', atributAction: 'Отменяет встроенную проверку данных формы на корректность ввода.'},
//     {atribut: 'target', atributAction: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'},
// ];
// let formResult = new tagForm(tag, tagAction, atributs);
// console.log(formResult);

// Тег <option>
//     function tagOption (tag,tagAction, tagAtributs) {
//     this.tag = tag;
//     this.tagAction = tagAction;
//     this.tagAtributs = tagAtributs;
//     }
//     let tag = '<option>';
//     let tagAction = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
//     let tagArtibuts = [
//         {atribut: 'disabled', atributAction: 'Заблокировать для доступа элемент списка.'},
//         {atribut: 'label', atributAction: 'Указание метки пункта списка.'},
//         {atribut: 'selected', atributAction: 'Заранее устанавливает определенный пункт списка выделенным.'}
//     ];
//     let optionResult = new tagOption(tag, tagAction, tagArtibuts);
//     console.log(optionResult);

// Тег <select>

// function tagSelect (tag,tagAction, tagAtributs) {
//     this.tag = tag;
//     this.tagAction = tagAction;
//     this.tagAtributs = tagAtributs;
// }
// let tag = '<select>';
// let tagAction = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
// let tagArtibuts = [
//     {atribut: 'name', atributAction: 'Имя элемента для отправки на сервер или обращения через скрипты.'},
//     {atribut: 'form', atributAction: 'Связывает список с формой.'},
//     {atribut: 'size', atributAction: 'Количество отображаемых строк списка.'}
// ];
// let selectResult = new tagSelect(tag, tagAction, tagArtibuts);
// console.log(selectResult);

// ==========================================================================================







// 2 -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }




// Тег <a>

// class tagA {
//     constructor(tag,action,atribut) {
//         this.tag = tag;
//         this.action = action;
//         this.atribut = atribut;
//     }
// }
// let tag = '<a>';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.'
// let atribut = [
//     {atribut: 'accesskey', atrubutAction: 'Активация ссылки с помощью комбинации клавиш'},
//     {atribut: 'coords', atrubutAction: 'Устанавливает координаты активной области.'},
//     {atribut: 'download' , atrubutAction: 'Предлагает скачать указанный по ссылке файл.'},
// ]
// let result = new tagA(tag,action,atribut);
// console.log(result);

// Тег <div>

// class tagDiv {
//     constructor(tag,action,atribut) {
//         this.tag = tag;
//         this.action = action;
//         this.atribut = atribut;
//     }
// }
// let tag = '<div>';
// let action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
// let atribut = [
//     {atribut: 'align', atrubutAction: 'Задает выравнивание содержимого тега <div>.'},
//     {atribut: 'title', atrubutAction: 'Добавляет всплывающую подсказку к содержимому.'},
// ]
// let result = new tagDiv(tag,action,atribut);
// console.log(result);

// Тег <h1>

// class tagH1 {
//     constructor(tag,action,atribut) {
//         this.tag = tag;
//         this.action = action;
//         this.atribut = atribut;
//     }
// }
// let tag = '<h1>';
// let action = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.';
// let atribut = [
//     {atribut: 'align', atrubutAction: 'Определяет выравнивание заголовка.'},
// ]
// let result = new tagH1(tag,action,atribut);
// console.log(result);

// Тег <span>

// class tagSpan {
//     constructor(tag,action,atribut) {
//         this.tag = tag;
//         this.action = action;
//         this.atribut = atribut;
//     }
// }
// let tag = '<span>';
// let action = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
// let atribut = [
//     {atribut: 'Нема атрибутів'}
// ]
// let result = new tagSpan(tag,action,atribut);
// console.log(result);

// Тег <input>

// class tagInput {
//     constructor(tag,action,atribut) {
//         this.tag = tag;
//         this.action = action;
//         this.atribut = atribut;
//     }
// }
// let tag = '<input>';
// let action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.';
// let atribut = [
//     {atribut: 'Нема атрибутів'}
// ]
// let result = new tagInput(tag,action,atribut);
// console.log(result);

// Тег <form>

// class tagForm {
//     constructor(tag,action,atribut) {
//         this.tag = tag;
//         this.action = action;
//         this.atribut = atribut;
//     }
// }
// let tag = '<form>';
// let action = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.';
// let atribut = [
//     {atribut: 'target', atrubutAction: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'},
//     {atribut: 'method', atrubutAction: 'Метод протокола HTTP.'},
//     {atribut: 'name' , atrubutAction: 'Имя формы.'},
// ]
// let result = new tagForm(tag,action,atribut);
// console.log(result);

// Тег <option>

// class tagOption {
//     constructor(tag,action,atribut) {
//         this.tag = tag;
//         this.action = action;
//         this.atribut = atribut;
//     }
// }
// let tag = '<option>';
// let action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
// let atribut = [
//     {atribut: 'disabled', atrubutAction: 'Заблокировать для доступа элемент списка.'},
//     {atribut: 'label', atrubutAction: 'Указание метки пункта списка.'},
//     {atribut: 'value' , atrubutAction: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
// ]
// let result = new tagOption(tag,action,atribut);
// console.log(result);

// Тег <select>

// class tagSelect {
//     constructor(tag,action,atribut) {
//         this.tag = tag;
//         this.action = action;
//         this.atribut = atribut;
//     }
// }
// let tag = '<select>';
// let action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
// let atribut = [
//     {atribut: 'name', atrubutAction: 'Имя элемента для отправки на сервер или обращения через скрипты.'},
//     {atribut: 'form', atrubutAction: 'Связывает список с формой.'},
//     {atribut: 'disabled' , atrubutAction: 'Блокирует доступ и изменение элемента'},
// ]
// let result = new tagSelect(tag,action,atribut);
// console.log(result);

// ==========================================================================================






// 3 - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. Додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {
//     model: 'Passat B8',
//     manufacturer: 'Germany',
//     year: 2020,
//     topspeed: 210,
//     engine: 1.4,
//     collaborator: ' Undefined ',
//     driver: function () {
//         console.log(`Їдемо з швидкістю ${this.topspeed} на годину`);1
//     },
//
//     info: function (){
//         console.log(`
//             model: ${this.model},
//             manufacturer: ${this.manufacturer},
//             year: ${this.year} ,
//             topspeed: ${this.topspeed},
//             engine: ${this.engine},
//             collaborator: ${this.collabolator},
//         `);
//     },
//
//     increaseMaxSpeed: function (newSpeed){
//         this.topspeed += newSpeed;
//     },
//
//     changeYear: function (newValue) {
//         this.year = newValue;
//     },
//     addDriver: function (driver) {
//         this.collaborator = driver;
//     }
// }
//
// car.changeYear(2025);
// car.increaseMaxSpeed(240);
// car.driver();
// car.info();

// =======================================================================================

// 4 -  Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function car (model, manufacturer, year, topSpeed, engine , shofer) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.topSpeed = topSpeed;
//     this.engine = engine;
//     this.shofer = shofer;
//
//     this.driver = function () {
//         console.log(`Їдемо зі швидкістю ${this.topSpeed} на годину`);
//     };
//
//    this.info = function (){
//         console.log(`
//         model: ${this.model};
//         manufacturer: ${this.manufacturer};
//         year: ${this.year};
//         engine: ${this.engine};
//         shofer: ${this.shofer};
//         `);
//     },
//
//     this.increaseMaxSpeed = function (newSpeed){
//             this.topSpeed += newSpeed;
//     },
//
//     this.changeYear = function (newValue){
//        this.year = newValue;
//     },
//
//        this.addDriver = function (driver){
//        this.shofer = driver;
//        }
// };
//
// let result = new car(
//     'Renault Duster',
//     'France',
//     2015,
//     181,
//     2.0,
//     'Sebastian Loeb');
// result.info();
// result.driver();
// result.increaseMaxSpeed()

// =======================================================================================

//  5 - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class car{
//     constructor(model,manufacturer,year,topSpeed,engine,shofer) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.topSpeed = topSpeed;
//         this.engine = engine;
//         this.shofer = shofer;
//     }
//     driver(){
//         console.log(`Їдемо зі швидкістю ${this.topSpeed} на годину`)
//     }
//     info (){
//         console.log(`
//                 model: ${this.model};
//                 manufacturer: ${this.manufacturer};
//                 year: ${this.year};
//                 engine: ${this.engine};
//                 topSpeed: ${this.topSpeed};
//                 shofer: ${this.shofer};
//         `);
//     }
//
//     increaseMaxSpeed (newSpeed) {
//         this.topSpeed += newSpeed;
//     }
//
//     changeYear (newValue){
//         this.year = newValue;
//     }
//
//     addDriver(driver){
//         this.shofer = driver;
//     }
// }
//
// let task5 = new car(
//     'Jetta',
//     'Germany',
//     '2015',
//     180,
//     1.6,
//     'Jeremy Clarkson',
//     );
// task5.info();
// task5.driver();

//  6  -  створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class popeluchka {
//     constructor(name, age , sizeFoot) {
//         this.name = name;
//         this.age = age;
//         this.sizeFoot = sizeFoot;
//     }}
// class princ extends popeluchka {
//     constructor(name,age ,sizeFoot  ,shoesSize) {
//         super(name, age);
//         this.shoesSize = shoesSize;
//     }
//     findPopeluchka(array){
//         let find = null;
//         for (let item of array){
//             if (item.sizeFoot === this.shoesSize){
//                 find = item;
//             }
//         }      if (find){
//             console.log('My Popeluchka name is '  + find.name );
//         }else {
//             console.log('i didint find my popeluchka');
//         }
//     }
// }
// let popelushka1 = new popeluchka('Julia' ,18,31);
// let popelushka2 = new popeluchka('Lesia' , 19, 29);
// let popelushka3 = new popeluchka('Diana', 21,30);
// let popelushka4 = new popeluchka('Olexandra',  17, 28);
// let popelushka5 = new popeluchka('Viktoria' , 19,33);
// let popelushka6 = new popeluchka( 'Maria,',21, 34);
// let popelushka7 = new popeluchka('Nadia',23,35);
// let popelushka8 = new popeluchka('Khrystina' , 17, 36);
// let popelushka9 = new popeluchka('Liza', 19,39);
// let popelushka10 =  new popeluchka('Marta', 21,41);
// let allPopeluchka = [popelushka1,popelushka2,popelushka3,popelushka4,popelushka5,popelushka6,popelushka7,popelushka8,popelushka9,popelushka10];
// let prince = new princ('Vasya' , 19, 21,35);
// prince.findPopeluchka(allPopeluchka)
// ==============================================



//  7  -  створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function popeluchka (name,age,footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }

// function prince (name,age,shoesSize){
//     this.name = name;
//     this.age = age;
//     this.shoesSize = shoesSize;
// }

// this.findPop = function (array){
//     let find = null;
//     find = array.find(task7 => task7.footSize === this.shoesSize);
//     find
//     ?console.log('My popelushka name is' + find.name): console.log('I did not find my popelushka');
// }

// let popelushka1 = new popeluchka('Julia' ,18,31);
// let popelushka2 = new popeluchka('Lesia' , 19, 29);
// let popelushka3 = new popeluchka('Diana', 21,30);
// let popelushka4 = new popeluchka('Olexandra',  17, 28);
// let popelushka5 = new popeluchka('Viktoria' , 19,33);
// let popelushka6 = new popeluchka( 'Maria,',21, 34);
// let popelushka7 = new popeluchka('Nadia',23,35);
// let popelushka8 = new popeluchka('Khrystina' , 17, 36);
// let popelushka9 = new popeluchka('Liza', 19,39);
// let popelushka10 =  new popeluchka('Marta', 21,41);
// let allPopeluchka = [popelushka1,popelushka2,popelushka3,popelushka4,popelushka5,popelushka6,popelushka7,popelushka8,popelushka9,popelushka10];
// let prc = new prince('Vasya' , 19, 21,35);
// prince.find(allPopeluchka);

// ==============================================