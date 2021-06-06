let settingSeconds = 59;
let settingMinutes = 1;

let seconds;
let minutes;
let textSeconds = 00;
let textMinutes = 00;

let timeGame;

init();

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
    document.querySelector('#timeSeconds').innerHTML = textSeconds;
    document.querySelector('#timeMinutes').innerHTML = textMinutes; 
}

document.querySelector('#btn_Play').addEventListener('click', ()=>{

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
        document.querySelector('#timeSeconds').innerHTML = textSeconds;
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
        document.querySelector('#timeMinutes').innerHTML = textMinutes;
    }

});