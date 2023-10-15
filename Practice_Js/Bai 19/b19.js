function check() {
    let a = document.getElementById("box").value ;
    a= Number(a);
    if(a<20){
        document.getElementById("result").innerHTML="Trong khoảng dưới 20";
    }
    else if(a>20 && a<100){
        document.getElementById("result").innerHTML="Trong khoảng [20;100]";

    }
    else if(a>100 && a<400){
        document.getElementById("result").innerHTML="Trong khoảng [100;400]";

    }
    else if(a>400){
        document.getElementById("result").innerHTML="Trong khoảng lớn hơn 400";

    }
}
check();