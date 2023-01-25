console.log("Entro index.js");

// let nombre = "Emmanuel";
// console.log(`Hola mi nombre es ${nombre}`);
// let nombre2 = "Pedro";
// console.log(`Hola mi nombre es ${nombre2}`);

function saludarMensaje(name){
    let apellido = "Martinez";
    return`Hola mi nombre es ${name} ${apellido}, buenos dias`;
}
console.log(saludarMensaje("Jesus"));
console.log(saludarMensaje("Pedro"));

let nombres = [
    "Jesus",
    "Pedro",
    "Emmanuel",
    "Adriana",
    "Andres"
];
console.log(nombres);
console.log([2]);

let numeros = [
    1,
    2,
    3,
    4,
    5
];
// console.log(numeros);
// console.log(`La cantidad de elementos presentes en nombres es:  ${nombres.length}`);
// console.log(`La cantidad de elementos presentes en numeros es:  ${numeros.length}`);

let paises = ["Afghanistan",
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
        console.log(paises);
        paises.push("Mexico");
        console.log(paises);
        // paises.pop();
        // paises.unshift("Canada");
        // paises.shift();
        // paises.splice(10, 1);
        // paises.splice(10, 5);
        // paises.splice(0, 3);
        // paises.splice(20, 3);
        paises.splice(0, 3, "Test");
        console.log(paises);

        // console.warn("Esto es un wairning");
        // console.error("Esto es un error");
        // console.table(paises);