(() => {
    const Utils = {
        settings: {
            backendBaseUrl: 'https://pokeapi.co/api/v2/'
        },
        methods: {
            getFormattedBackendUrl: ({ query, searchType }) => `${Utils.settings.backendBaseUrl}${searchType}/${query}`,

            busqueda: ({ query, searchType = 'pokemon' }) => Utils.methods.fetch({ url: Utils.methods.getFormattedBackendUrl({ query, searchType }), searchType }),

            fetch: async({ url, searchType }) => {
                console.log(url);
                try {
                    const rawResponse = await fetch(url);
                    if (rawResponse.status !== 200) throw new Error(`${searchType} not found`);
                    return rawResponse.json();
                } catch (error) {
                    throw error;
                }
            },

            cadenaEvolutiva: async url => {
                let ArrBusqueda = Utils.methods.ArrBusqueda(url)

                let { evolution_chain } = await Utils.methods.busqueda({ query: ArrBusqueda[0], searchType: ArrBusqueda[1] })
                ArrBusqueda = Utils.methods.ArrBusqueda(evolution_chain.url)

                let { chain } = await Utils.methods.busqueda({ query: ArrBusqueda[0], searchType: ArrBusqueda[1] })

                return Utils.methods.traerCadenaEvolutiva(chain);
            },

            ArrBusqueda: url => url.split("/").slice(5, 7).reverse(),

            traerCadenaEvolutiva: ({ species, is_baby, evolves_to }) => {
                let pila = [];
                pila.push({ name: species.name, is_baby: is_baby });

                while (evolves_to.length > 0) {
                    if (evolves_to.length > 1) {
                        evolves_to.forEach(({ species, is_baby }) => {
                            pila.push({ name: species.name, is_baby: is_baby });
                        });
                    } else {
                        pila.push({ name: evolves_to[0].species.name, is_baby: evolves_to[0].is_baby });
                    }
                    evolves_to = evolves_to[0].evolves_to
                }
                return pila;
            }

        },
    }
    document.Utils = Utils;
})();