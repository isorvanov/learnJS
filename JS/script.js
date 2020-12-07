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

'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            console.log('Введенная информация о количестве фильмов не прошла валидацию');
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        return personalMovieDB.count;

    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt(`Сообщите название фильма №${i + 1}?`, ''),
                b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50 && !isNaN(b)) {
                personalMovieDB.movies[a] = b;
                console.log('Данные внесены успешно');
            } else {
                console.log('Данные не внесены, Ошибка');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');

        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else { personalMovieDB.privat = true; }
    },
    writeYourGenres: function () {
        for (let i = 0; i <= 2; i++) {

            let genres = prompt('Ваш любимый жанр под номером ' + (i + 1));
            genres = genres.substr(0, 1).toUpperCase() + genres.substr(1);
            if (isNaN(genres) && genres != '' && genres != null) {
                personalMovieDB.genres[i] = genres;
                personalMovieDB.genres.sort();
            } else {
                console.log('error');
                i--;
            }

        }
        personalMovieDB.genres.forEach((item, i) => {
           console.log(`Любимый жанр ${i + 1} - это ${item}`) ;
        });

       

    }
    

};

/* personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();*/
personalMovieDB.writeYourGenres(); 
/*personalMovieDB.toggleVisibleMyDB();*/
personalMovieDB.showMyDB();
