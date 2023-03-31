const input = document.getElementById("card")
    for(let i = 1; i < 827; i++){
    const html=`
    <div class="Tarjeta">
    <img class="Pic" src="https://rickandmortyapi.com/api/character/avatar/${i}.jpeg" alt="">
    <h2 class="Name"> Character ${i} </h2>
    <p class="Info"> Esta es mi publicación número ${i}. Esto es una prueba de generación de relleno por medio de funciones y ciclos.
    </div>
    `
    input.innerHTML += html
    }