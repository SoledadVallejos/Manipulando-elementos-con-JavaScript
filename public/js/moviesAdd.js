console.log('moviesAdd success');



let h1 = document.querySelector('.moviesAddTitulo')
let formulario = document.querySelector('#formulario');
let article = document.querySelector('article');
h1.innerHTML = 'AGREGAR PELÍCULA';
h1.classList.add('titulo');
article.classList.add('fondoTransparente');
formulario.classList.add('fondoCRUD');