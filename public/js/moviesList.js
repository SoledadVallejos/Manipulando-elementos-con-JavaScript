console.log('moviesList success');

let body = document.querySelector('body');
let h1 = document.querySelector('.moviesListTitulo');

const response = confirm('¿Querés moverte al lado oscuro?');

if (response) {
    body.style.backgroundColor = '#7f7f7f'
    body.classList.add('fondoMoviesList');
}


h1.innerHTML = 'LISTADO DE PELÍCULAS';

h1.style.color = 'white';
h1.style.backgroundColor = 'teal';
h1.style.padding = '20px';