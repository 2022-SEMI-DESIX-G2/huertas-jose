((Utils) => {
    const App = {
        htmlElements: {

            num : document.querySelector('#num') ,

            tarjetacontador : document.querySelector('#tarjeta') , 
            
            formulario:document.querySelector('#formulario') , 
        },
        init: () => {
            App.htmlElements.formulario.addEventListener("submit", App.handlers.submitFormulario);
            App.htmlElements.tarjetacontador.addEventListener("click", App.handlers.borrar)
        },
        utils: {
            ...Utils.methods,
        },
        templates: {

            tarjeta : (cartas) => {
                clicktarjeta = '<div class="tarjetiex">' + '<div class="contenido_tarjeta">' + '<h3 class="numero">' + cartas + '</h3>' + '</div>' + '</div>';
                return clicktarjeta

            }
        },
        handlers:{
            submitFormulario: (event) => {
                event.preventDefault();
                cartas = App.utils.fibonacci(App.htmlElements.num.value);
                cartas.forEach(element => {
                    tarjeta = App.templates.tarjeta(element)
                    App.htmlElements.tarjetacontador.innerHTML += tarjeta;
                });
            },
            borrar: (event) => {
                if(event.target.className == "numero"){
                    if (window.confirm("Desea confirmar la eliminacion de la tarjeta?")) {
                        event.target.parentElement.parentElement.remove();
                    }
                }
            }
        }
    };
    App.init();
})(document.Utils);