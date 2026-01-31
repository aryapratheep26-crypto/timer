var c=document.getElementById("celsius");
var f=document.getElementById("fahrenheit");
var k=document.getElementById("kelvin");
c.addEventListener("input",calculate);
f.addEventListener("input",calculate);
k.addEventListener("input",calculate);
function calculate(event){
    var current = parseFloat(event.target.value);
    switch (event.target.id) {
        case"celsius":
        f.value=(current*9/5+32).toFixed(2);
        k.value=(current+273.15).toFixed(2);
        break;
        case"fahrenheit":
        c.value=((current-32)*5/9).toFixed(2);
        k.value=((current-32)*5/9+273.15).toFixed(2);
        break;
        case"kelvin":
        c.value=(current-273.15).toFixed(2);
        f.value=((current-273.15)*9/5+32).toFixed(2);
        break;
        default:
            break;
    }

}
