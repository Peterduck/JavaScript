document.getElementById("submitButton").onclick = function(){
    let num1 = document.getElementById("aBox").value ;
        num1 = Number(num1);
    
    let num2 = document.getElementById("bBox").value ;
        num2 = Number(num2);

    let num3 = document.getElementById("cBox").value ;
        num3 = Number(num3);

    if((num1 == num2) && (num1== num3) ){
        document.getElementById("result").innerHTML = "kết quả: 30";
    }
    else if(((num1==num2)&&(num1!=num3))|| ((num1==num3)&&(num1!=num2))||((num2==num3)&&(num2!=num3))){
        document.getElementById("result").innerHTML = "kết quả: 40";
    }
    else {
        document.getElementById("result").innerHTML = "kết quả: 20";
    }
}