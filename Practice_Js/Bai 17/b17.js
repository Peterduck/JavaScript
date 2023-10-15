document.getElementById("count").onclick = function() {
    let a = document.getElementById("box").value ;
        a = Number(a);

    let delta = a -19;
    if(delta > 19){
        document.getElementById("result").innerHTML = "Kết quả là: "+ 3*delta;
    }
    else{
        document.getElementById("result").innerHTML = "Kết quả là: "+ delta;

    }
}