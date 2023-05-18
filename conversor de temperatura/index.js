function converterTemperatura() {
    var inputTemp = document.getElementById("inputTemp");
    var selectFrom = document.getElementById("selectFrom");
    var selectTo = document.getElementById("selectTo");
    var resultado = document.getElementById("resultado");

    var temp = parseFloat(inputTemp.value);
    var from = selectFrom.value;
    var to = selectTo.value;

    var convertedTemp;

    if (from === "celsius") {
        if (to === "fahrenheit") {
            convertedTemp = (temp * 9/5) + 32;
        } else if (to === "kelvin") {
            convertedTemp = temp + 273.15;
        } else {
            convertedTemp = temp;
        }
    } else if (from === "fahrenheit") {
        if (to === "celsius") {
            convertedTemp = (temp - 32) * 5/9;
        } else if (to === "kelvin") {
            convertedTemp = (temp -32) * 5/9 + 273.15;
        } else {
            convertedTemp = temp;
        }
    } else if (from === "kelvin") {
        if (to === "celsius") {
            convertedTemp = temp - 273.15;
        } else if (to === "fahrenheit") {
            convertedTemp = (temp - 273.15) * 9/5 + 32; 
        } else {
            convertedTemp = temp;
        }    
}

resultado.innerHTML = convertedTemp.toFixed(2);
}