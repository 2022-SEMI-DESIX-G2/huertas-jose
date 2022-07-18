((utils) => {
  const App = {
    htmlElements: {
      busquedaPokemonFormId: document.querySelector(
        "#busqueda-pokemon-form-id"
      ),
      cardInputBuscadorPokemonId: document.querySelector(
        "#card-input-buscador-pokemon-id"
      ),
      card2ArticleCompletoId: document.querySelector(
        "#card2-container-completo"
      ),
      cardButtonBuscarId: document.querySelector("#card-button-buscar-id"),
      cardButtonResetId: document.querySelector("#card-button-reset-id"),
      checkboxSpritesPoke: document.querySelector("#card-check-box1"),
      checkboxUbicacionPoke: document.querySelector("#card-check-box2"),
      checkboxEvolucionesPoke: document.querySelector("#card-check-box3"),

      svgEye:
        ' <svg width="14" height="14"</svg> viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.975 2.475C12.675 2.175 12.15 2.175 11.775 2.475L9.975 4.275C9.1828 3.98092 8.34501 3.8286 7.5 3.825C4.65 3.9 2.1 5.4 0.75 7.875C0.9 8.175 1.125 8.475 1.35 8.775C1.95 9.6 2.7 10.275 3.525 10.8L2.25 12.075C1.95 12.375 1.875 12.9 2.25 13.275C2.55 13.575 3.075 13.65 3.45 13.275L12.975 3.675C13.275 3.3 13.275 2.775 12.975 2.475ZM5.025 9.225L4.05 10.2C3.15 9.675 2.325 8.925 1.725 8.025C2.625 6.75 3.825 5.85 5.25 5.4C4.275 6.45 4.2 8.1 5.025 9.225ZM7.575 6.75C7.2 6.375 7.275 5.775 7.65 5.4C8.025 5.1 8.55 5.1 8.925 5.4L7.575 6.75ZM13.725 7.125C13.35 6.6 12.9 6.075 12.375 5.7L11.625 6.45C12.225 6.9 12.75 7.425 13.2 8.1C11.925 10.05 9.75 11.25 7.425 11.25H6.825L6.075 12C6.6 11.925 7.05 12 7.5 12C9.975 12 12.3 10.8 13.725 8.775C13.95 8.475 14.1 8.175 14.325 7.875C14.1 7.65 13.95 7.35 13.725 7.125ZM10.5 7.5L7.5 10.5C9.15 10.5 10.5 9.15 10.5 7.5Z" fill="black"/></svg>',
      svgBaby:
        ' <svg width="25" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2934 6.25109C12.9241 5.38371 12.3475 4.62026 11.6142 4.02774C10.881 3.43522 10.0135 3.03176 9.08788 2.85278L9.924 1.515L9.076 0.985001L7.97272 2.75025C6.8489 2.75546 5.75123 3.08981 4.81533 3.71198C3.87943 4.33415 3.14632 5.21687 2.70656 6.25109C2.11752 6.26229 1.55638 6.50415 1.14377 6.92468C0.731151 7.34522 0.5 7.91085 0.5 8.5C0.5 9.08915 0.731151 9.65479 1.14377 10.0753C1.55638 10.4959 2.11752 10.7377 2.70656 10.7489C3.14819 11.7874 3.88552 12.673 4.82675 13.2955C5.76798 13.9181 6.87153 14.25 8 14.25C9.12848 14.25 10.232 13.9181 11.1733 13.2955C12.1145 12.673 12.8518 11.7874 13.2934 10.7489C13.8825 10.7377 14.4436 10.4959 14.8562 10.0753C15.2689 9.65479 15.5 9.08915 15.5 8.5C15.5 7.91085 15.2689 7.34522 14.8562 6.92468C14.4436 6.50415 13.8825 6.26229 13.2934 6.25109ZM14.1419 9.37531C13.9132 9.60923 13.6015 9.74353 13.2744 9.74909L12.6268 9.76141L12.3733 10.3575C12.0085 11.2155 11.3993 11.9472 10.6217 12.4616C9.84411 12.976 8.93236 13.2503 8.00002 13.2503C7.06767 13.2503 6.15593 12.976 5.37831 12.4616C4.6007 11.9472 3.99157 11.2155 3.62678 10.3575L3.37322 9.76141L2.72556 9.74909C2.39833 9.74297 2.08657 9.60868 1.85732 9.37509C1.62806 9.14151 1.49963 8.82729 1.49963 8.5C1.49963 8.17271 1.62806 7.85849 1.85732 7.62491C2.08657 7.39132 2.39833 7.25703 2.72556 7.25091L3.37322 7.23859L3.62678 6.64253C3.99158 5.78452 4.60071 5.05278 5.37832 4.53842C6.15594 4.02405 7.06768 3.7498 8.00002 3.7498C8.93235 3.7498 9.8441 4.02405 10.6217 4.53842C11.3993 5.05278 12.0085 5.78452 12.3733 6.64253L12.6268 7.23859L13.2744 7.25091C13.5185 7.25552 13.7559 7.33154 13.9572 7.46958C14.1585 7.60762 14.315 7.80163 14.4073 8.02762C14.4996 8.25362 14.5236 8.5017 14.4765 8.74122C14.4293 8.98073 14.313 9.20118 14.1419 9.37531Z" fill="black"/><path d="M5.25 7.25H6.5V8.5H5.25V7.25ZM9.5 7.25H10.75V8.5H9.5V7.25ZM8 12C8.3283 12 8.65339 11.9353 8.95671 11.8097C9.26002 11.6841 9.53562 11.4999 9.76777 11.2678C9.99991 11.0356 10.1841 10.76 10.3097 10.4567C10.4353 10.1534 10.5 9.8283 10.5 9.5H5.5C5.5 9.8283 5.56466 10.1534 5.6903 10.4567C5.81594 10.76 6.00009 11.0356 6.23223 11.2678C6.70107 11.7366 7.33696 12 8 12Z" fill="black"/></svg>',
    },
    init: () => {
      App.htmlElements.busquedaPokemonFormId.addEventListener(
        "submit",
        App.handlers.pokemonFinderFormOnSubmit
      );
      App.htmlElements.cardButtonResetId.addEventListener(
        "click",
        App.handlers.pokemonFinderCleanButtonOnClick
      );
    },
    handlers: {
      pokemonFinderFormOnSubmit: async (e) => {
        e.preventDefault();

        const query = App.htmlElements.cardInputBuscadorPokemonId.value;
        const checkboxSprites = App.htmlElements.checkboxSpritesPoke.checked;
        const checkboxLocation = App.htmlElements.checkboxUbicacionPoke.checked;
        const checkboxEvoChain =App.htmlElements.checkboxEvolucionesPoke.checked;
        query.toUpperCase();
        //query.toUpperCase();
        console.log(query);
        try {
          /*App.htmlElements.cardButtonResetId.className += " reset-limpiar"*/

          const { data } = await utils.methods.busqueda({ query });

         
            data.checkboxSprites = checkboxSprites;

            data.checkboxUbicacion = checkboxLocation;

            data.checkboxEvoluciones = checkboxEvoChain;

          console.log(data);

          const renderedTemplate = App.templates.render({ data });
          App.htmlElements.card2ArticleCompletoId.innerHTML = renderedTemplate;
        } catch (error) {
          console.log(error);
          App.htmlElements.card2ArticleCompletoId.innerHTML = `<article class="card2">
                    <center>
                        <h3>${error}</h3>
                    </center>
                </article>`;
        }
      },
      pokemonFinderCleanButtonOnClick: () => {
        App.htmlElements.cardInputBuscadorPokemonId.value = "";
        App.htmlElements.CardSelectPorPokemonPorHabilidadId.value = "default";
        App.htmlElements.card2ArticleCompletoId.innerHTML = "";
        App.htmlElements.cardButtonResetId.classList.remove("reset-limpiar");
      },
    },
    templates: {
      render: ({ searchType = "pokemon", data }) => {
        const renderMap = {
          pokemon: App.templates.pokemonCard,
        };

        return renderMap[searchType]? renderMap[searchType](data): App.templates.errorCard();
      },
      errorCard: () => `<h1>There was an error</h1>`,
      pokemonCard: ({
        id,
        name,
        weight,
        height,
        sprites,
        location_areas,
        abilities,
        evos_chain,
        checkboxSprites,
        checkboxUbicacion,
        checkboxEvoluciones,
      }) => {
        const { back_default, front_default } = sprites;

        //Set Abilities and evolves chain

        const abilitiesList = abilities.map(
          ({ ability, is_hidden }) =>
            `<li>${ability.name} ${
              is_hidden ? App.htmlElements.svgEye : ""
            }</li>`
        );

        const evolvesList = evos_chain.map(
          ({ name, is_baby }) =>
            `<li>${name}  ${is_baby ? App.htmlElements.svgBaby : ""}</li>`
        );

        console.log({ back_default, front_default });
        console.log({ abilitiesList });

        const listaUbicacion = location_areas.map(
          ({ location_area, version_details }) => {
            let counter = 0;

            const { encounter_details } = version_details[counter];

            const location = location_area.name;

            const chance = encounter_details[counter].max_level;

            const version = version_details[counter].version.name;
            console.log(version);
            //version = version.name

            counter++;

            return `<tr><td>${location}</td><td>${chance}%</td><td>${version}</td></tr>`;
          }
        );

        return `<img class="card2-img-poke-bola1" src="/img/pokebola.png" alt="">
                <img class="card2-img-poke-bola2" src="/img/pokebola.png" alt="">
                <img class="card2-img-poke-bola3" src="/img/pokebola.png" alt="">
                <img class="card2-img-poke-bola4" src="/img/pokebola.png" alt="">
              
              
              
              <div class="card2-pokemon-name-id-move">
              <img class="card2-pokemon-img-container" src="${front_default}" alt="">
              <h2 class="card2-pokemon-name-id">${name} (${id})</h2>
              </div>
              
              <div class="card2-generales-del-pokemon">
              
              <div class="card2-title-generales-del-pokemon-move">
                <h2 class="card2-title-generales-del-pokemon"> Generales del Pokémon </h2>
              </div>
              
              </div>
              
              <div class="card2-contenedor1">
              
              <div class="card2-title-abilities-move">
                <h2 class="card2-title-abilities"> Abilities</h2>
                <ul class="card2-list-abilities">
                  ${abilitiesList.join("")}
                 </ul>
              </div>
              <div class="card2-title-weight-heigth-move">
                <h2 class="card2-title-weight-heigth"> Weight / Height</h2>
                <span class="card2-span1"> ${weight}/${height}</span>
              </div>
              
              </div>
              
              ${
                checkboxSprites
                  ? App.templates.spriteCard(front_default, back_default)
                  : ""
              }
              ${
                checkboxUbicacion
                  ? App.templates.UbicacionCard(listaUbicacion)
                  : ""
              }
              ${
                checkboxEvoluciones
                  ? App.templates.EvolucionCard(evolvesList)
                  : ""
              }
              `;
      },

      spriteCard: (front_default, back_default) => {
        return `<div class="card2-sprites-del-pokemon">
              
              <div class="card2-title-sprites-del-pokemon-move">
                <h2 class="card2-title-sprites-del-pokemon"> Sprites del Pokémon</h2>
              </div>
              
              </div>
              
              <div class="card2-contenedor2">
              
              
              
              <div class="card2-pokemon-front-move">
                <h2 class="card2-pokemon-front-title">
                  FRONT
                </h2>
              
                <img class="card2-img-front-select" src="${front_default}" alt="">
              </div>
              
              <div class="card2-pokemon-back-move">
                <H2 class="card2-pokemon-back-title">
                  BACK
                </H2>
              
                <img class="card2-img-back-select" src="${back_default}" alt="">
              </div>
              
              </div>`;
      },

      UbicacionCard: (listaUbicacion) => {
        return `<div class="card2-ubicacion-del-pokemon">
              
              <div class="card2-title-ubicacion-del-pokemon-move">
                <h2 class="card2-title-ubicacion-del-pokemon"> Ubicación del Pokémon</h2>
              </div>
              
              </div>
              
              <div class="card2-contenedor3">
              
                <div>
                  <table>
                    <tr>
                      <th>Lugar</th>
                      <th>Oportunidad Maxima</th>
                      <th>Version</th>
                    </tr>
                    ${listaUbicacion.join("")}
                  
                  </table>
                </div>
              
              </div>`;
      },

      EvolucionCard: (evolvesList) => {
        return `<div class="card2-evoluciones-del-pokemon">
              
              <div class="card2-title-evoluciones-del-pokemon-move">
                <h2 class="card2-title-evoluciones-del-pokemon"> Evoluciones del Pokémon </h2>
              </div>
              
              </div>
              
              <div class="card2-contenedor4">
              
                <div>
                  <h2 class="card2-title-poke-evolutions">
                    Pokémon-Evolutions
                  </h2>
                  <ul class="card2-title-poke-evolutions-ul">
                    ${evolvesList.join("")}
                  </ul>
                </div>
              </div>`;
      },
    },
  };

  App.init();
})(document.Utils);
