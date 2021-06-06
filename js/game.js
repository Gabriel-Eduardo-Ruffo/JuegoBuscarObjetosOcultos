//armar pantalla blur
//armar popup para mostrar mensajes e imagenes de ganar, encontrado objeto y de perder
//armar logica para contador de objetos
//armar logica para que no se repitan los juegos (guardar en localstorage las pantalla jugadas)
//armar seteo de juegos(cantidad de pantallas)(cantidad de objetos a encontrar)(posicion de objetos)


//formato y caracteristica de juego
/*
ejemplo
numJuego = 1;
numObjetos a buscar = 3;
arrayObjetosBuscar = [posX,posY,divRadioClick]------es el div que deveremos poner para que se le pueda hacer click
    setear los divRadioClick para que tengan un estado de clickeados, visibles
lista de imagenes para los fondos normales
lista de imagenes para los fondos con zoom
lista de imagenes para los objetos a buscar
lista de imagenes para los objetos encontrados (para la barra contadora de objetos encontrados)
lista de imagenes para mostrar los mensajes de encontraste algo.
lista de imagenes para mostrar los mensajes de encontraste ganaste.
lista de imagenes para mostrar los mensajes de encontraste perdiste.
*/

window.addEventListener('load', function(){
    console.log('inicio juego');

    //se aprieta el boton jugar
    document.querySelector('#btn_Play').addEventListener('click', ()=>{
        //referencia al script time.js a la funcion startClock para que comience el conteo del reloj
        startClock();
    });





    let imageFind= document.querySelector('#objeto-1');
    imageFind.addEventListener('click',function(e){
        alert('click');
    });
});