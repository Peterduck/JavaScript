document.getElementById("check").onclick = function(){
    let a = document.getElementById("aBox").value ; 
        a = Number(a);
    let b = document.getElementById("bBox").value ; 
        b = Number(b);
    let sum = a+b;
    let check
    if(a==50 || b==50 || sum==50){
        check = true;
        document.getElementById("result").innerHTML =check; 
    }
    else {
        check = false;
    document.getElementById("result").innerHTML =check;
    }
    
}