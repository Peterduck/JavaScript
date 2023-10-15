document.getElementById("submitButton").onclick = function() {
    let number = document.getElementById("number").value ; 
    number = Number(number);
    let check = number-13

    if(check> 13){
        document.getElementById("result").innerHTML = "result following requirement = " + (2*check);
    }
    else{document.getElementById("result").innerHTML = "result following requirement= "+ check;
}
}