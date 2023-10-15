document.getElementById("count").onclick = function(){
    let a = document.getElementById("aBox").value ; 
        a = Number(a);

    let b = document.getElementById("bBox").value ;
        b = Number(b);
    let result;
    if(a==b){
        result = a*3;
        document.getElementById("result").innerHTML ="kết quả là:"+ result;
    }
    else{
        result = a+b;
        document.getElementById("result").innerHTML ="kết quả là:"+result;
    }
}