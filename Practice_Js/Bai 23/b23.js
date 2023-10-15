document.getElementById("process").onclick = function(){
    let textBox = document.getElementById("aBox").value ;
    if(textBox.length > 1){
        let startChar = textBox.charAt(0);
        let finalChar = textBox.charAt(textBox.length-1);
        document.getElementById("result").innerHTML = "Chuỗi đã fix: "+ finalChar +textBox.slice(1,textBox.length-1)+startChar;
        
    }
}