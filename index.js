/*Funciones declarativas
*/
//Función 1
function saludar(nombre, edad) {
    console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar ("Juan Felipe", 44);

//Función 2

function cronograma (tema, fecha, responsable) {
    console.log(`información ingresada con éxito ${tema} ${fecha} ${responsable}`);
    }
    
    cronograma (`Tema 1`, `09/04/2024`, `Juan Felipe Gutiérrez`);

//Función 3

    function limpieza (Limpieza_de_superficies, Limpieza_de_camilla_y_equipos, Limpieza_de_pisos, Limpieza_de_unidad_sanitaria) {
        console.log(`Limpieza_de_superficies: ${Limpieza_de_superficies} | Limpieza_de_camilla_y_equipos: ${Limpieza_de_camilla_y_equipos} | Limpieza_de_pisos: ${Limpieza_de_pisos} | Limpieza_de_unidad_sanitaria: ${Limpieza_de_unidad_sanitaria}`);
        }
        
    limpieza (`Sí`, `No`, `Sí`, `No`);

    //Función 4
    function infraestructura (
        Mantenimiento_de_aire_acondicionado, 
        Pintar_paredes_internas, 
        Revisión_de_redes_eléctricas, 
        Revisión_de_redes_hidráulicas_y_sanitarias) {
        console.log(
            `| Mantenimiento_de_aire_acondicionado: ${Mantenimiento_de_aire_acondicionado} 
| Pintar_paredes_internas: ${Pintar_paredes_internas} 
| Revisión_de_redes_eléctricas: ${Revisión_de_redes_eléctricas} 
| Revisión_de_redes_hidráulicas_y_sanitarias: ${Revisión_de_redes_hidráulicas_y_sanitarias}`);
        }
        
    infraestructura (`Enero`, `Marzo`, `Mayo`, `Noviembre`);
    
//Función 5
function sumar(x) {
    console.log(10 + x);
}

sumar (44);

//Función 6 **REVISAR OBJETO**
function limpieza (parametros) {
    console.log(`Limpieza_de_superficies: ${parametros.Limpieza_de_superficies} | Limpieza_de_camilla_y_equipos: ${parametros.Limpieza_de_camilla_y_equipos} | Limpieza_de_pisos: ${parametros.Limpieza_de_pisos} | Limpieza_de_unidad_sanitaria: ${parametros.Limpieza_de_unidad_sanitaria}`);

    let parametros = {
        Limpieza_de_superficies: "Sí",
        Limpieza_de_camilla_y_equipos: "No",
        Limpieza_de_pisos: "Tal vez",
        Limpieza_de_unidad_sanitaria: "Quizá",
    };
}  
limpieza ();

//Función 7
function suma(número1, número2){
    let adicion = número1 + número2;
    console.log("sumando!", adicion)
    
}
suma(520, 258)

//Función 8
function pagototal(a, b){
    let pagoCliente = a + b;
    //console.log ("El total es: ", pagoCliente)
    if (pagoCliente = 100){
        console.log("Está al día");
    }
    else { (pagoCliente < 100)

    };
    console.log("Debemos cobrarle más..");
}
pagototal(80, 1)

//Función 9
function limpiezas (a, b, c, d, e, f, g, h, i, j ){
    let suma = (a + b + c + d + e + f + g + h + i + j);
    console.log("limpiezas realizadas= ", suma);
    if (total =10)
    {
    console.log("Cumple");
}
    else (total< 10)
    {
    console.log("No cumple")
}
}
limpiezas (1, 1, 1, 1, 1, 1, 1, 1, 1, 0)

//Función 10
let aseo= {
    lunes: true,
    martes: false,
    miercoles: true,
    jueves: true,
    viernes: true,
    sabado: true,
    domingo: false,
}
function limpiezas (obj){
    const {lunes, martes, miercoles, jueves, viernes} =obj;
    console.log(`El aseo realizado: Lunes: ${lunes}, Martes: ${martes}, Miércoles: ${miercoles}, jueves: ${jueves}, viernes: ${viernes}`);

}
limpiezas (aseo)

/*Funciones anónimas
*/
//Función 1
let saludar= function (nombre, edad) {
    console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar ("Juan Felipe", 44);

//Función 2
let estandar1= function (tema, fecha, responsable) {
    console.log(`información ingresada con éxito ${tema} ${fecha} ${responsable}`);
    }
    
estandar1 (`Tema 1`, `09/04/2024`, `Juan Felipe Gutiérrez`);

//Función 3
let jugueticos={
    juguete01:"Balones",
    juguete02:"Trenes",
    juguete03:"carros",
    juguete04:"Cintas",
    juguete05:"Rascaencías",
    juguete06:"Maracas",
    juguete07:"Tambor",
    juguete08:"Perros",
    juguete09:"Peluches",
    juguete10:"Cuentas",
}
let juguetes= function(jugueticos){
    const{Balones, Trenes, carros, Cintas, Rascaencías, Maracas, Tambor, Perros, Peluches, Cuentas, Estrellas}=jugueticos
    console.log(`Los juguetes de Joaquín son: ${Balones}, ${Trenes}, ${carros}, ${Cintas}, ${Rascaencías}, ${Maracas}, ${Tambor}, ${Perros}, ${Peluches}, ${Cuentas}, ${Estrellas}`)
}
juguetes(jugueticos)

//Función 4
let equipos= function(juguete01, juguete02, juguete03, juguete04, juguete05, juguete06, juguete07, juguete08, juguete09, juguete10){
    console.log(`Los juguetes de Joaquín son: `, juguete01, juguete02, juguete03, juguete04, juguete05, juguete06, juguete07, juguete08, juguete09, juguete10)
}
equipos("Balones, ", "Trenes, ", "carros, ", "Cintas, ", "Rascaencías, ", "Maracas, ", "Tambor, ", "Perros, ", "Peluches, ", "Cuentas, ", "Estrellas.")

//Funciones 5
let matematicas= function(a, b, c, d, e, f, g, h, i, j, k){
    console.log(a + b + c + d + e + f + g + h + i + j +k);
}
matematicas(2, 10, 50, 87, 45, 56, 97, 145, 10247, 5,5778)
    
//Función 6
let cuartos= {
    equipo1: "Real Madrid",
    equipo2: "Paris Sanit German",
    equipo3: "Barcelona",
    equipo4: "Manchester City",
}    
let champiponsFinal= function(obj){
    const {equipo1, equipo2, equipo3, equipo4}= obj
    console.log(`Los equipos de Cuarto de Final son:  ${equipo1}, ${equipo2}, ${equipo3}, ${equipo4}.`)

}

champiponsFinal(cuartos)

//Función 7
let promediogol= function(a, b, c, d, e, f, g, h, i, j, k){
    const promedio = (a + b + c + d + e + f + g + h + i + j +k)/11;
    console.log(promedio)

}
promediogol(3, 0, 2, 1, 4, 0, 0, 1, 3, 2, 1)

//Función 8
let simple= function (x){
    const suma =x / 1;
    console.log("La suma es: ", suma)
}

simple(1)

//Función 9
let elmejorequipo = 2;
    if (promedio >2){
        console.log("ganadores")
    }

promediogol(1, 1, 1, 1, 1, 2, 2, 3, 0, 3)

