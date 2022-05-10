/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
let add = document.querySelectorAll('.promo__adv img'),
    ganr = document.querySelector('.promo__genre'),
    poster = document.querySelector('.promo__bg'),
    listOfFilms = document.querySelector('.promo__interactive-list'),
    form=document.querySelector('.add'),
    input=form.querySelector('.adding__input');

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        let newFilm=input.value;
        if(newFilm){
            if(newFilm.length>21){
                newFilm=`${newFilm.substring(0,22)}...`;
            }
            movieDB.movies.push(newFilm);
            addFilm(listOfFilms,movieDB.movies);
            e.target.reset();
        }
        
    });

function clearAdd() {
    add.forEach((item) => {
        item.remove();
    });
}

function makeChanges() {
    ganr.textContent = 'Драма';
    poster.style.backgroundImage = "url('img/bg.jpg')";
}

function sortate (film){
    film.sort();
}



function addFilm(film,parent) {
    film.innerHTML = "";
    sortate(movieDB.movies);
    parent.forEach((item, i) => {
        film.innerHTML += `<li class="promo__interactive-item">${i+1} ${item}
        <div class="delete"></div>
    </li>`;
    });

  document.querySelectorAll('.delete').forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        btn.parentElement.remove();
        movieDB.movies.splice(i,1);

        addFilm(listOfFilms,movieDB.movies);
    });
  });
}


clearAdd();
makeChanges();
addFilm(listOfFilms,movieDB.movies);