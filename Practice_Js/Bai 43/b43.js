document.getElementById("submitButton").onclick = function(){
    let num1 = document.getElementById("aBox").value ; 
    let num2 = document.getElementById("bBox").value ;
    let num3 = document.getElementById("cBox").value ; 

    if((num1.charAt(num1.length-1)==num2.charAt(num2.length-1))&&(num1.charAt(num1.length-1)==num3.charAt(num3.length-1))){
        document.getElementById("result").innerHTML = "Ba số đều có số tận cùng giống nhau";
    }
    else if((num1.charAt(num1.length-1)!=num2.charAt(num2.length-1))&&(num1.charAt(num1.length-1)!=num3.charAt(num3.length-1))){
        document.getElementById("result").innerHTML = "Ba số đều có số tận cùng khác nhau"
    }
    else {
        document.getElementById("result").innerHTML ="Có hai số thỏa yêu cầu "
    }
}