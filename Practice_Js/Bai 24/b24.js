document.getElementById("check").onclick = function(){
    let num = document.getElementById("number").value ;
        num = Number(num);

    if(num%3 == 0 && num%7 !=0){
        document.getElementById("result").innerHTML = num +" là bội số của 3";
    }
    else if(num%3 != 0 && num%7 ==0){
        document.getElementById("result").innerHTML = num +" là bội số của 7";
    }
    else if(num%3 == 0 && num%7 == 0){
        document.getElementById("result").innerHTML = num +" là bội số của 3 và 7";
    }
    else{
        document.getElementById("result").innerHTML = "Không phải là bội số của 3 và 7";
    }
}