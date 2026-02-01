var t=document.getElementById("tim");
var s=document.getElementById("start"); 
var r=document.getElementById("reset");
var st=document.getElementById("stop");
var total=1500;
function updateTimer(){
    var minutes=Math.floor(total/60);
    var second=total%60;
    var time=minutes.toString().padStart(2,"0")+":"+second.toString().padStart(2,"0");
    t.textContent=time;
}
function start(){
     interval=setInterval(()=>{
        total--;
        updateTimer();
        if(total==0){
            clearInterval(interval);
            alert("Time's up!");
        
        }
    },1000);
}
function stop(){
    clearInterval(interval);
}
function reset(){
    clearInterval(interval);
    total=1500;
    updateTimer();
}

updateTimer();