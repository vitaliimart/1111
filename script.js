
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
"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalMovie() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count > 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}

detectPersonalMovie();

function showMyDB(hidden) {
	if(!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
	for ( let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1]= prompt(`Ваш любимый жанр под номером ${i}`,);
	}
	
}
writeYourGenres ();
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
