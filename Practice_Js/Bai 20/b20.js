document.getElementById("checkaBox").onclick = function(){
    let a = document.getElementById("aBox").value ; 
        a = Number(a);
    
        if(a>=0){
            document.getElementById("resulta").innerHTML="a là số dương";
        }
        else{
            document.getElementById("resulta").innerHTML="a là số âm";
        }
}

document.getElementById("checkbBox").onclick = function(){
    let b = document.getElementById("bBox").value ; 
        b = Number(b);
    
        if(b>=0){
            document.getElementById("resultb").innerHTML="b là số dương";
        }
        else{
            document.getElementById("resultb").innerHTML="b là số âm";
        }
}