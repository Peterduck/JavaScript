document.getElementById("submitButton").onclick = function(){
    let a = document.getElementById("aBox").value ;
        a = Number(a);

    let b = document.getElementById("bBox").value ;
        b = Number(b);

    let c = document.getElementById("cBox").value ;
        c = Number(c);

    if((a>=50 && a<=99) || (b>=50 && b<=99) || (c>=50 && c<=99)){
        document.getElementById("result").innerHTML = true;
    }
    else {
        document.getElementById("result").innerHTML = false;
    }
}