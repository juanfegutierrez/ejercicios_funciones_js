//Funciones declarativas
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

