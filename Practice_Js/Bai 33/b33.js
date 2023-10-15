document.getElementById("submitButton").onclick = function(){
    let num = document.getElementById("textBox").value ; 
        num = Number(num);
    
    if(num>=40 && num<=60){
        document.getElementById("result").innerHTML = num+ " nằm trong khoảng [40;60]";
    }
    else if(num>=70 && num<=100){
        document.getElementById("result").innerHTML = num + " nằm trong khoảng từ [70;100]"
    }
    else {
        document.getElementById("result").innerHTML = num+ " không thuộc trong khoảng [40;60] và [70;100]";

    }
}