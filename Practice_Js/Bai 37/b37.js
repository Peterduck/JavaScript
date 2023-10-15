document.getElementById("submitButton").onclick = function(){
    let txt = document.getElementById("box").value ; 
    if(txt.length <3) {
        document.getElementById("result").innerHTML = "result is: "+ txt.toUpperCase();
    }
    else {
        document.getElementById("result").innerHTML = "result is: "+ txt;

    }
}