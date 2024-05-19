
function simuladorPrestamo() {
    // Usuario Selecciona monto
    var monto = parseFloat(prompt("Ingrese el monto a solicitar: "));
    if (isNaN(monto)) {
        alert("Por favor, ingrese un valor numérico ");
        return;
    }
    // Usuario Selecciona Cuotas
    var cuotas = parseInt(prompt("Elija la cantidad de cuotas: 6 / 12 / 24 / 36 / 72"));
    if (isNaN(cuotas)) {
        alert("Por favor, ingrese un valor numérico ");
        return;
    }
    // Interes
    var interes;
    switch(cuotas) {
        case 6:
            interes = 1.25;
            break;
        case 12:
            interes = 1.5;
            break;
        case 24:
            interes = 3;
            break;
        case 36:
            interes = 4.5;
            break;
        case 72:
            interes = 6;
            break;
        default:
            alert("Cantidad de cuotas invalida, Solicitar 6 / 12 / 24 / 36 / 72 ");
            return; 
    }

    // Monto a Pagar
    var totalPagar = monto * interes;

    // Valor de Cuotas
    var montoCuota = totalPagar / cuotas;

    // alerta con resultados
    alert("Monto del préstamo: $" + monto.toFixed(2) +
        "\nNúmero de cuotas: " + cuotas +
        "\nTasa de interés : " + interes*100 + "%" +
        "\n\nMonto total a pagar: $" + totalPagar.toFixed(2) +
        "\nMonto de cada cuota: $" + montoCuota.toFixed(2));
}


simuladorPrestamo();