document.getElementById("submitButton").onclick = function(){
    let numA = document.getElementById("aBox").value ; 
        numA = Number(numA);
    
    let numB = document.getElementById("bBox").value ;
        numB = Number(numB);
    
    if((numA>=40 && numA<=60)&&(numB>=40 && numB<=60)){
        if(numA>numB){
            document.getElementById("result").innerHTML = numA + " là số lớn nhất";
        }
        else {
            document.getElementById("result").innerHTML = numB + " là số lớn nhất";
        }
    }
    else {
        document.getElementById("result").innerHTML = "Không đúng yêu cầu. Vui lòng nhập lại"
    }
}