document.getElementById("check").onclick = function(){
    let numA = document.getElementById("aBox").value ;
        numA = Number(numA);
    
    let numB = document.getElementById("bBox").value ; 
        numB = Number(numB);
    
    let sum = numA + numB;
    if(sum>=50 && sum<=80){
        document.getElementById("result").innerHTML = "Tổng nằm trong [50;80] nên trả về: 65";
    }
    else{
        document.getElementById("result").innerHTML = "Tổng nằm ngoài [50;80] nên trả về: 80";

    }
}   