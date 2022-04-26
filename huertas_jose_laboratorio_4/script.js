function calcular() {

    let num;
    let val1=0;
    let val2=1;
    let nextval;
    let tarjeta_contador;

    num = document.getElementById('num').value;
    tarjeta_contador = document.getElementById("tarjeta");
    tarjeta_contador.innerHTML = '';

    for (let i = 1; i <= num; i++) {
        console.log(val1);
        //document.write(val1);
        let valfinal = val1;
        nextval = val1 + val2;
        val1 = val2;
        val2 = nextval;
        var clicktarjeta;
        clicktarjeta = '<div class="tarjetiex" id="tarjetiex_2' + i + '" onclick="borrar(' + i + ')">' +'<div class="contenido_tarjeta">' +'<h3 class="numero">' + valfinal + '</h3>' +'</div>' +'</div>';

    tarjeta.innerHTML += clicktarjeta;


    }
}

function borrar(fibona) {

    if (window.confirm("Desea confirmar la eliminacion de la tarjeta?")) {

        document.getElementById('tarjetiex_2' + fibona).outerHTML = '';
    } 
        return false;
}