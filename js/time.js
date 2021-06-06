let settingSeconds = 59;//seteo de los segundos iniciales del juego
let settingMinutes = 1;//seteo de los minutos iniciales del juego

let timeSeconds;
let timeMinutes;

let seconds;
let minutes;
let textSeconds = 00;
let textMinutes = 00;

let timeGame;

window.addEventListener('load', function(){
    timeSeconds = document.querySelector('#timeSeconds');//referencia al tag que muestra los segundos
    timeMinutes = document.querySelector('#timeMinutes');//referencia al tag que muestra los minutos
    init();
});

function init(){
    seconds = settingSeconds ;
    minutes = settingMinutes ;

    if(seconds<10){
        textSeconds = '0'+seconds;
    }else{
        textSeconds = seconds;
    }
    if(minutes<10){
        textMinutes = '0'+minutes;
    }else{
        textMinutes = minutes;
    }
    timeSeconds.innerHTML = textSeconds;
    timeMinutes.innerHTML = textMinutes; 
}

//esta funcion puede ser llamada de otro script para comenzar el conteo del juego
function startClock(){

    clearInterval(timeGame);//detenemos el interval de timeGame

    init();//seteamos las variables iniciales

    timeGame = setInterval(counterSeconds, 1000);//iniciamos el interval de timeGame
    
    function counterSeconds(){
        if(seconds == 0 && minutes == 0)
        {
            //fin del juego
            clearInterval(timeGame);
            //mostramos popup emergente que diga que se termino el juego.
            //luego en aceptar de ese popup, dar opcion de jugar de nuevo o jugar otro????
        }
        if(seconds<0){
            counterMinutes();//actualizamos los minutos
            seconds=59;       
        }
        if(seconds<10){
            textSeconds = '0'+seconds;
        }else{
            textSeconds = seconds;
        }
        timeSeconds.innerHTML = textSeconds;
        seconds--;
    }
    
    function counterMinutes(){
        minutes--;
        if(minutes<0){
            clearInterval(timeGame);
        }
        if(minutes<10){
            textMinutes = '0'+minutes;
        }else{
            textMinutes = minutes;
        }
        timeMinutes.innerHTML = textMinutes;
    }

}