document.getElementById("submitButton").onclick = function(){
    let a = document.getElementById("aBox").value ; 
        a = Number(a);
    
    let b = document.getElementById("bBox").value ;
        b = Number(b);
    
    if(a==15 || b== 15 ||(a+b)==15){
        document.getElementById("result").innerHTML = true;
    }
    else {
        document.getElementById("result").innerHTML = false;
    }
}