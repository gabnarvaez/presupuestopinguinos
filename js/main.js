const gastosPinguinos = [];

let categoriasPinguinos = ['EMPERADOR', 'AUSTRALIANO', 'ARGENTINO', 'AFRICANO'];

let disponible = 2000; // Hola Yanina, el presupuesto es en USD, por eso tan bajo. 

alert("¡Bienvenido al registro de gastos de Pinguinos de Peluche!\n\nPor favor, recuerda que solo puedes ingresar 4 tipos de pinguinos: Emperador, Australiano, Argentino y Africano.\nEl límite de gasto es de $2000 USD.");

let categoriaIngresada;
do {
    categoriaIngresada = prompt("Ingrese el tipo de pinguino de peluche que desea comprar:\n(Para salir, escriba SALIR)").toUpperCase().trim();
    if (categoriasPinguinos.includes(categoriaIngresada)) {
        let montoGasto;
        do {
            montoGasto = parseInt(prompt(`Ingrese el precio del pinguino de peluche ${categoriaIngresada}:`));
            if (montoGasto > disponible) {
                alert(`¡El precio del pinguino de peluche ${categoriaIngresada} supera tu límite de gasto!\nTu límite de gasto es de $2000 USD.`);
            }
        } while (isNaN(montoGasto) || montoGasto > disponible);
        disponible -= montoGasto;
        let gastoPinguino = {
            categoria: categoriaIngresada,
            precio: montoGasto
        };
        gastosPinguinos.push(gastoPinguino);
        alert(`Has registrado la compra de un pinguino de peluche ${categoriaIngresada} por $${montoGasto} USD.\nTe quedan disponibles $${disponible} USD.`);
    } else if (categoriaIngresada !== "SALIR") {
        alert("¡Tipo de pinguino de peluche no válido! Por favor, ingrese uno de los tipos permitidos: Emperador, Australiano, Argentino o Africano.");
    }
} while (categoriaIngresada !== "SALIR");

const calcularTotalGastosPinguinos = () => {
    let totalGastosPinguinos = gastosPinguinos.reduce((total, gasto) => total + gasto.precio, 0);
    return totalGastosPinguinos;
}

const calcularPromedioGastosPinguinos = () => {
    const totalGastosPinguinos = calcularTotalGastosPinguinos();
    const promedio = totalGastosPinguinos / gastosPinguinos.length;
    return promedio.toFixed(2);
}

console.log("Registro de gastos de Pinguinos de Peluche: ", gastosPinguinos);
console.log("Total de gastos: $", calcularTotalGastosPinguinos());
console.log("Promedio de gastos: $", calcularPromedioGastosPinguinos());

categoriasPinguinos.forEach((categoria) => {
    const gastosCategoria = gastosPinguinos.filter((gasto) => categoria === gasto.categoria);
    const sumaCategoria = gastosCategoria.reduce((total, gasto) => total + gasto.precio, 0);
    console.log(`Total de gastos en pinguinos ${categoria}: $${sumaCategoria}`);
});
