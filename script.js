
/*----------------------------------------------------------------------------------------------------------
PRACTICE - PART 1

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос: 
"Сколько фильмов Вы уже посмотрели?"

2) Создать объект personalMovieDB и в него поместить такие свойства:
count - сюда передается ответ на первый вопрос;
movies - в это свойство поместить пустой объект;
actors - тоже поместить пустой объект;
genres - суда поместить пустой массив;
privat - в это свойство поместиь boolean (логическое) значение false;

3) Задайте пользователю по два раза вопросы:
"Один из последних просмотренных фильмов?"
"На сколько оцените его?"

Ответы стоит посместить в отдельные переменные 
Записать ответы в объект movies в формате:
movies: {
	"logan": "8.1"
}
Проверить выполнение кода через console.log
---------------------------------------------------------------------------------------------------------------
*/
/*
"use strict";
const numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
*/

/*--------------------------------------------------------------------------------------------------------------
PRACTICE - PART 2

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки, отменить ответ или ввести 
название фильма длиннее, чем 50 символов. Если это происходит - возвращаем пользователя к вопросам опять.
(К любой строке можно обратиться как str.length - и получить её длину)

3) При помощи условий проверить personalMovieDB.count и 
если он меньше 10 - вывести сообщение "Просмотрено довольно мало фильмов",
если от 10 до 30 - "Вы классический зритель",
если больше 30 - "Вы киноман",
если не подошло ни к одному варианту - "Произошла ошибка".

4) Потренироваться и переписать цикл ещё двумя способами.
------------------------------------------------------------------------------------------------------------------
*/
// "use strict";
// const numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "");

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// for (let i = 0; i < 2; i++) {
// 	const a = prompt("Один из последних просмотренных фильмов?", ""),
//          b = prompt("На сколько оцените его?", "");
	
// 	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log("Success");
// 	} else {
// 		console.log("Error");
// 		i--;
// 	}
// }

// if (personalMovieDB.count < 10) {
// 	console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
// 	console.log("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
// 	console.log("Вы киноман");
// } else {
// 	console.log("Произошла ошибка");
// }
// console.log(personalMovieDB);

/*-------------------------------------------------------------------------------------------------------------------
PRACTICE - PART 3
1) Первую часть задания повторить по уроку
то есть, автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
*/
// "use strict";

// let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

// 	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
// 	}
// }

// start();

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {
// 		const a = prompt("Один из последних просмотренных фильмов?", ""),
// 				b = prompt("На сколько оцените его?", "");
		
// 		if (a != null && b != null && a != "" && b != "" && a.length < 50) {
// 			personalMovieDB.movies[a] = b;
// 			console.log("Success");
// 		} else {
// 			console.log("Error");
// 			i--;
// 		}
// 	}
// }

// rememberMyFilms();

// function detectPersonalMovie() {
// 	if (personalMovieDB.count < 10) {
// 		console.log("Просмотрено довольно мало фильмов");
// 	} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
// 		console.log("Вы классический зритель");
// 	} else if (personalMovieDB.count > 30) {
// 		console.log("Вы киноман");
// 	} else {
// 		console.log("Произошла ошибка");
// 	}
// }

// detectPersonalMovie();

// function showMyDB(hidden) {
// 	if(!hidden) {
// 		console.log(personalMovieDB);
// 	}
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres () {
// 	for ( let i = 1; i <= 3; i++) {
// 		personalMovieDB.genres[i - 1]= prompt(`Ваш любимый жанр под номером ${i}`,);
// 	}
	
// }
// writeYourGenres ();
//-------------------------------------------------------------------------------------------------------------------
// "use strict";

// const str = "test";
// const arr = [1, 2, 4];
// // console.log(str[2]);
// // console.log(arr[1]);
// // console.log(str.length);
// // console.log(arr.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruits = "Some_fruit";
// console.log(fruits.indexOf("f"));

// const logg = "Hello_worldishche";
// // console.log(logg.length);
// console.log(logg.slice(6, 13));
// // console.log(logg.slice(-5));
// console.log(logg.substring(6, 14));
// console.log(logg.substr(6, 2));

// const num = 12.95;
// console.log(Math.round(num));

// const test = "15.49px";
// console.log(parseInt(test));
// console.log(parseFloat(test));
// function first () {
// 	setTimeout(function() {
// 		console.log("1");
// 	},	500);
// }

// function second () {
// 	console.log("2");
// }

// first();
// second();

// function learnJJ(lang, callback) {
// 	console.log(`Я учу: ${lang}`);
// 	callback();
// }

// function done() {
// 	console.log("Я прошёл первый урок");
// }

// learnJJ("JavaScript", done);

// const options = {
// 	name: "test",
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: "black",
// 		bg: "red"
// 	},
// 	makeTest: function() {
// 		console.log("Some text");
// 	}
// };
// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(options.name);
// delete options.name;
// console.log(options);
// console.log(options['colors']['border']);
// let counter = 0;
// for (let key in options) {
// 	if (typeof(options[key]) === 'object') {
// 		for (let i in options[key]){
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 			// counter++;
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		counter++;
// 	}
// }

// console.log(counter);
// console.log(Object.keys(options));
// console.log(Object.keys(options).length);
// "use strict";

// const arr = [2, 13, 8, 26, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
// 	return a - b;
// }

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(value);
// }

// console.log(arr.length);
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// for (let value of arr) {
// 	console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");

// products.sort();

// console.log(products);

// console.log(products.join("; "));

// "use strict";

// let a = 5,
//     b = a;
// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
// 	a: 5,
// 	b: 1
// };

// const copy = obj;
// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
// 	let objCopy = {};

// 	let key;
// 	for(key in mainObj) {
// 		objCopy[key] = mainObj[key];
// 	}
// 	return objCopy;
// }

// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y: 4
// 	}
// };

// // const newNumbers = copy(numbers);

// // newNumbers.a = 10;
// // newNumbers.c.x = 10;

// // console.log(numbers);
// // console.log(newNumbers);

// const add = {
// 	d: 17,
// 	e: 20
// };

// console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();

// newArray[1] = "acdc";
// console.log(newArray);
// console.log(oldArray);

// const video = ["youtube", "vimeo", "rutube"],
//       blogs = ["wordpress", "Livejournal", "blogger"],
// 		internet = [...video, ...blogs, "vk", "facebook"];

// console.log(internet);

// function log(a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
// 	one: 1,
// 	two: 2
// };

// const newObjj = {...q};

// console.log(newObjj);

// "use strict";

// const str = "sometext";
// const strObj = new String();

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
// 	health: 400,
// 	armor: 100,
// 	sayHello: function() {
// 		console.log("Hello, world");
// 	}
// };

// const john = {
// 	health: 100
// };

// john.__proto__ = soldier;
// Object.setPrototypeOf(john, soldier);
// const john = Object.create(soldier);

// john.sayHello();

// console.log(john);
// console.log(john.armor);

// Практика №4
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

/*
"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
	
		while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Один из последних просмотренных фильмов?", ""),
					b = prompt("На сколько оцените его?", "");
			
			if (a != null && b != null && a != "" && b != "" && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log("Success");
			} else {
				console.log("Error");
				i--;
			}
		}
	},
	detectPersonalMovie: function() {
		if (personalMovieDB.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
			console.log("Вы классический зритель");
		} else if (personalMovieDB.count > 30) {
			console.log("Вы киноман");
		} else {
			console.log("Произошла ошибка");
		}
	},
	showMyDB: function(hidden) {
		if(!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function(){
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		}else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function() {
		for ( let i = 1; i < 2; i++) {
			// let genre = prompt(`Ваш любимый жанр под номером ${i}`);
			
			// if (genre == '' || genre == null) {
			// 	console.log("Вы ввели некорректные данные или не ввели их вовсе");
			// 	i--;
			// } else {
			// 	personalMovieDB.genres[i - 1]= genre;
			// }
			let genres = prompt(`Введите Ваши любимые жанры через запятую`);
			
			if (genres == '' || genres == null) {
				console.log("Вы ввели некорректные данные или не ввели их вовсе");
				i--;
			} else {
				personalMovieDB.genres= genres.split(', ');
				personalMovieDB.genres.sort();
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	}
};
*/
"use strict";

// To String
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));
console.log(String(null));
// 2)
console.log(typeof(5 + ''));
console.log(typeof(null + ''));
console.log(typeof(undefined + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number

//1)
console.log(typeof(Number("4")));
//2)
console.log(typeof(+"four"));
// 3)
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt('Hello', '');

// To boolean
// 0, '', null, undefined, NaN - false
// все остальное - true

//1)
let switcher = null;

if (switcher) {
	console.log('working...');
}

switcher = 1;
if (switcher) {
	console.log('working...');
}

//2)
console.log(typeof(Boolean("4")));

//3)
console.log(typeof(!!"444"));

console.log(typeof("444"));

console.log(typeof(!"444"));

console.log(typeof(! 444));
