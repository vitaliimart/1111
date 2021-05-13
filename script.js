
/* 
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
*/

// const numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "");

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };
// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

//-------------------------------------------------------------------------------------------------------------------
let number = 4.6;
console.log(4/4);
console.log(4/0);
console.log(-4/0);
console.log("aaaa"/0);
console.log(0/"aaaa");
console.log("dgfgfg"/"aaaa");
console.log("2"/"2");
console.log("2"/"0");
console.log(""/"2");

const personel ="Alex";
console.log(personel);

// let weddf;
// console.log(weddf);

// const obj = {
// 	name: "Alex",
// 	surname: "Smith",
// 	age: 32,
// 	isMarried: true
// };
// console.log(obj["name"]);
// console.log(obj["age"]);
// console.log(typeof(obj["age"]));
// console.log(typeof(obj["isMarried"]));

const arr = ["plum.png", {a: 1, b: "str", c: true}, 23, [true, false]];
console.log(arr[1]);