document.getElementById("check").onclick = function(){
    let num1 = document.getElementById("aBox").value ; 
        num1 = Number(num1);
    let num2 = document.getElementById("bBox").value ; 
        num2 = Number(num2);
    let num3 = document.getElementById("cBox").value ; 
        num3 = Number(num3);
    if(num1>=20||num2>=20||num3>=20){
        document.getElementById("result").innerHTML = true;
    }
    else {
        document.getElementById("result").innerHTML = false;
    }
}