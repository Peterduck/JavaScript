document.getElementById("submitButton").onclick = function(){
    let numA = document.getElementById("aBox").value;
        numA = Number(numA);

    let numB = document.getElementById("bBox").value;
        numB = Number(numB);
    
    if(numA==8 && numB==8){
        document.getElementById("result").innerHTML ="Cả hai số bằng 8";
    }
    else if(numA ==8 && numB!=8){
        document.getElementById("result").innerHTML ="Số thứ nhất bằng 8";

    }
    else if(numA !=8 && numB ==8){
        document.getElementById("result").innerHTML ="Số thứ hai bằng 8";

    }
    else if((numA+numB)==8){
        document.getElementById("result").innerHTML ="Tổng hai bằng 8";

    }
}