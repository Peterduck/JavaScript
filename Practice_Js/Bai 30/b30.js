document.getElementById("process").onclick = function(){
    let textBox = document.getElementById("box").value ; 
    if(textBox.indexOf("Script")==5){
        document.getElementById("result").innerHTML = textBox.replace("Script","");
    }
    else {
        document.getElementById("result").innerHTML = textBox;

    }
}