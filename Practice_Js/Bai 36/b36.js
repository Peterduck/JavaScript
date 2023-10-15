document.getElementById("submitButton").onclick = function(){
    let numA = document.getElementById("aBox").value ; 
    let numB = document.getElementById("bBox").value ; 
    let numC = document.getElementById("cBox").value ; 
    if (numA.charAt(numA.length) == numB.charAt(numB.length) == numC.charAt(numC.length)){
        document.getElementById("result").innerHTML = true;
    }
    else{
        document.getElementById("result").innerHTML = true;

    }
}