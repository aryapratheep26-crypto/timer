var bill=document.getElementById("billAmount");

var tip=document.getElementById("tipPercentage");
var total=document.getElementById("totalTip");
var btnn=document.getElementById("btn");
var resultEl=document.getElementById("result");
function Calculate() {
    var b=parseInt(bill.value);
    var t=parseInt(tip.value);
    var totalTip=(b*t)/100;
    resultEl.innerText= "Total: " + totalTip + "$";
}
btnn.addEventListener("click",Calculate);