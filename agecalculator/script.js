var data = document.getElementById("dte");
var btn = document.getElementById("age");
var res = document.getElementById("result");

function calculate() {
  var birth = data.value;
  if (birth === " ") {
    alert("please enter the data");
    res.textContent = " ";
    return;
  }
  var age = getage(birth);
  res.textContent = "your age is: " + age;
}
function getage(birth) 
{
  var currentDate = new Date();
  var birthday = new Date(birth);
  if (isNaN(birthday.getTime())) {
    return "Invalid date";
  }
  var age = currentDate.getFullYear() - birthday.getFullYear();
  var month = currentDate.getMonth() - birthday.getMonth();
  if (month < 0 || (month === 0 && currentDate.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
}
btn.addEventListener("click", calculate);