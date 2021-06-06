window.onload = function(){

    //creamos variables para mover la imagen
    let lupaX=0;
    let lupaY=0;
    //referencia al div que contiene la imagen
    let lupa = document.querySelector('#lupa');
    //referencia del div que contiene la imagen ampliada
    let imgZoomDiv = document.querySelector(".large");
    //referencia del div que contiene la imagen original
    let imgDiv = document.querySelector(".small");
    //referencia a la imagen del juego
    let imageGame= document.querySelector('#img_Game');
  
    let native_width = 0;
    let native_height = 0;

    //Si se mueve el mouse sobre el div magnify
    document.addEventListener("mousemove",function(e){

        //cuando entramos a la imagen.
        if(!native_width && !native_height)
        {
            //creamos el objeto imagen base. imagen original.
            var image_object = new Image();
            image_object.src = $(".small").attr("src");//le pasamos la direccion donde esta la imagen
            console.log(document.querySelector(".small").src);
            console.log($(".small").attr("src"));

            native_width = image_object.width;
            native_height = image_object.height;
        }else{          
            lupaX = e.pageX;
            lupaY = e.pageY;
            lupa.style.left = lupaX -35 +'px';
            lupa.style.top = lupaY - 185 +'px'; 
            //coordenadas X Y y el offset de la imagen ampliada
            var mx = e.pageX - imageGame.getBoundingClientRect().left;
            var my = e.pageY - imageGame.getBoundingClientRect().top;

            //Verificica que este dentro de la imagen para mostrar o no la lupa
            if(mx < imageGame.getBoundingClientRect().width-5 && my < imageGame.getBoundingClientRect().height-5 && mx > 5 && my > 5)
            {
                document.getElementById('body').style.cursor = 'none';//ocultamos
                lupa.style.display = 'block';//mostramos la lupa
                imgZoomDiv.style.display = 'block';
            }else{
                document.getElementById('body').style.cursor = '';//mostramos
                lupa.style.display = 'none';//ocultamos la lupa
                imgZoomDiv.style.display = 'none';
            }

            //Si esta visible el contenedor large....Se muestra la imagen ampliada
            if($(".large").is(":visible"))
            {
                //La imagen ampliada se tiene que mover para emular el efecto de lupa.
                //Se toma de referencia la imagen original (no ampliada)
                //se calcula su tamanio y se le resta el tamanio de la imagen ampliada. 
                //El 1.5 es la velocidad que tendra de movimiento la lupa con respecto a la imagen ampliada.
                //$(".large").width())+50) se le suma 50 por que es un ajuste manual que hice para que coincida con todo lo que arme
                var rx = (Math.round(((mx/$(".small").width()*native_width)*1.5) - ($(".large").width())+50)*-1);
                var ry = (Math.round(((my/$(".small").height()*native_height)*1.5) - ($(".large").height())+50)*-1);
                var bgp = rx + "px " + ry + "px";

                //posicion el centro de la lupa (vidrio) con el puntero
                var px = mx - $(".large").width()/2;
                var py = my - $(".large").height()/2;
                
                //Se muestra la imagen y se va ajustando la posicion de la imagen de fondo (se mueve la imagen ampliada emulando el zoom de la lupa)
                $(".large").css({left: px, top: py, backgroundPosition: bgp});
            }
        }
    });

    let imageFind= document.querySelector('#objeto-1');
    imageFind.addEventListener('click',function(e){
        alert('click');
    });

};