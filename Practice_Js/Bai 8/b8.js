let random = Math.floor(Math.random()*10)+1;
 document.getElementById("checkRandom").onclick = function() {
    let number = document.getElementById("numberBox").value ;
    number = Number(number);

    if(number==random){
        document.getElementById("result").innerHTML="Làm tốt lắm";
    }
    else{
        document.getElementById("result").innerHTML="Không khớp";
    }
 }