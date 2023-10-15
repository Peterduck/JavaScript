let currentDay = new Date();
let date = currentDay.getDay();
if(date<10){
    date = "0"+date; 
}

let month = currentDay.getMonth();
if(month<10){
    month = "0"+month;
}
let year = currentDay.getFullYear();

document.getElementById("display1").innerHTML = month+"-"+date+"-"+year;

document.getElementById("display2").innerHTML= month+"/"+date+"/"+year

document.getElementById("display3").innerHTML = date+"-"+month+"-"+year;

document.getElementById("display3").innerHTML = date+"/"+month+"/"+year;