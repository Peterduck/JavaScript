let toDay =new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let fixDay = days[toDay.getDay()];

    let hour = Number(toDay.getHours());
    if(hour<12){
        hour = hour + " AM";
    }
    else {hour=((hour-12)+" PM")}
    let minutes = toDay.getMinutes();
    let seconds = toDay.getSeconds();

document.getElementById("show").innerHTML = "Today is: "+ fixDay+". Current time is: "+ hour+" :"+minutes+" :"+seconds;

document.getElementById("button").onclick = function(){
    document.getElementById("show").innerHTML = "Today is: "+ fixDay+". Current time is: "+ hour+" : "+minutes+" : "+seconds;
}
