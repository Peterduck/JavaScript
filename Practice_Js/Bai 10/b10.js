

document.getElementById("multiple").onclick = function(){
    var a = document.getElementById("aBox").value ;
    a = Number(a);
    var b = document.getElementById("bBox").value ;
    b = Number(b);
    let multiple = a*b;
    document.getElementById("result").innerHTML="Kết quả của phép nhân a và b là: "+ multiple;
}

document.getElementById("devide").onclick = function(){
    var a = document.getElementById("aBox").value ;
    a = Number(a);
    var b = document.getElementById("bBox").value ;
    b = Number(b);
    if(a==0 ||b==0){
        document.getElementById("result").innerHTML="Không thể chia cho 0";
    }
    else {
    let devide = a/b;
    document.getElementById("result").innerHTML="Kết quả của a chia b là: "+ devide;
}
}
