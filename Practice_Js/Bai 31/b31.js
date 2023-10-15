document.getElementById("submitButton").onclick = function(){
    let numA = document.getElementById("aBox").value ; 
        numA = Number(numA);

    let numB = document.getElementById("bBox").value ; 
        numB = Number(numB);

    let numC = document.getElementById("cBox").value ; 
        numC = Number(numC);

    let arrayNum = [numA,numB,numC]; 
    for(let i = 0; i <arrayNum.length;i++ ){
        let fakenum = numA;
        if(fakenum<=arrayNum[i]){
            fakenum = arrayNum[i];
            document.getElementById("result").innerHTML = "Số lớn nhất là: "+fakenum;
        }
}
}