document.getElementById("checkButton").onclick = function(){
    let num = document.getElementById("check").value ; 
        num = Number(num);
    
    if(num>=50 && num<=99){
        document.getElementById("result").innerHTML = true;
    }
    else {
        document.getElementById("result").innerHTML = false;

    }
}