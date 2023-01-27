let paises2 = ["Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia"];
        // console.log(paises2.length);
        // console.log(paises2);
        for (let index = 0; index < paises2.length; index++){
            const pais = paises2[index];
            // console.log(pais);
            // console.log(`<p>${pais}</p>`);
            // let nuevoIndex = index +1;
            // console.log(`${nuevoIndex}. ${pais}`);
        }
        let nuevoIndex = 0;
        paises2.forEach(pais => {
            nuevoIndex = nuevoIndex + 1;
            // console.log(`${nuevoIndex} ${pais}`);
        });

        // for y foreach NO MODIFICAN EL ARREGLO
        // .MAP CREA UN UEVO ARREGLO
        let nuevoArreglo = paises2.map(pais => {
            console.log(pais);
            return pais.toUpperCase();
        });
        // console.log('nuevoArreglo: ', nuevoArreglo);
        // console.log('paises2: ', paises2);

        let edades = [11,10,19, 25, 35, 40, 15, 55, 34];
        // retornar un nuevo arreglo con las edades que cumplen la mayoria de edad que es 18

        let edadesValidas = edades.map(edad =>{
            if (edad >= 18){
                return edad;
            }else{
                return edad + 1;
            }
        });
        // console.log("edades: ", edades);
        // console.log(edadesValidas);

        let mayoriaEdad =edades.filter(edad =>{
            if (edad >= 18){
                return edad;
            }
        });
        // console.log("Mayoria de edad: ", mayoriaEdad);
        let mayoriaEdad1 =edades.find(edad =>{
            if (edad >= 18){
                return edad;
            }
        });
         console.log("Mayoria de edad: ", mayoriaEdad1);


         let filtroEspecial =edades.filter(edad =>{
            if (edad >= 18 && edad <= 35){
                return edad;
            }
        });
         console.log("filtroEspecial: ", filtroEspecial);

         let sumaEdades = edades.reduce((valorAnterior, valorActual)=>{
            return valorActual + valorAnterior;
         });
         console.log(sumaEdades);