document.getElementById("check").onclick = function(){
    let textBox = document.getElementById("textBox").value ; 
    if(textBox.startsWith("Java")){
        document.getElementById("result").innerHTML = true;
    }
    else{
        document.getElementById("result").innerHTML = false;

    }
}