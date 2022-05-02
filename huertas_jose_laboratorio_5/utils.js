(() => {

    const Utils = {

        methods: {

            fibonacci: (num) => {
                let val1 = 0;
                let val2 = 1;
                let resultado = [];
                for (let i = 1; i <= num; i++) {
                    //document.write(val1);
                    resultado.push(val1);

                    nextval = val1 + val2;
                    val1 = val2;
                    val2 = nextval;

                }
                return resultado;
            }
        }
    }
    document.Utils = Utils;
})();