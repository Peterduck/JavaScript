document.getElementById("submitButton").onclick = function(){
    let num1 = document.getElementById("aBox").value ;
        num1 = Number(num1);
    
    let num2 = document.getElementById("bBox").value ;
        num2 = Number(num2);

    if((num1 %7 ==0 || num1 %11 ==0 )||(num2 %7 == 0 || num2 %11 ==0)){
        document.getElementById("result").innerHTML = true;
    }
    else {
        document.getElementById("result").innerHTML = false; 
    }
}