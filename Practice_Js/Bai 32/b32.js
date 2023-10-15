document.getElementById("submitButton").onclick = function(){
    let numA = document.getElementById("aBox").value ;
        numA = Number(numA);
    
    let numB = document.getElementById("bBox").value ;
        numB = Number(numB);
    
    let hieuCuaA = 100 - numA;
    let hieuCuaB = 100 - numB;
    if(((hieuCuaA > 0 && hieuCuaB > 0)|| (hieuCuaA < 0 && hieuCuaB < 0)) && (hieuCuaA>hieuCuaB)){
        document.getElementById("result").innerHTML = "Giá trị gần 100 nhất là: " + numB;
    }
    else if (((hieuCuaA > 0 && hieuCuaB > 0)|| (hieuCuaA < 0 && hieuCuaB < 0))  && (hieuCuaA<hieuCuaB)){
        document.getElementById("result").innerHTML = "Giá trị gần 100 nhất là: " + numA;

    }
    else if(((hieuCuaA > 0 && hieuCuaB < 0)|| (hieuCuaA < 0 && hieuCuaB > 0)) && (Math.abs(hieuCuaA)>Math.abs(hieuCuaB))){
        document.getElementById("result").innerHTML = "Giá trị gần 100 nhất là: " + numB;

    }
    else if(((hieuCuaA > 0 && hieuCuaB < 0)|| (hieuCuaA < 0 && hieuCuaB > 0)) && (Math.abs(hieuCuaA)<Math.abs(hieuCuaB))){
        document.getElementById("result").innerHTML = "Giá trị gần 100 nhất là: " + numA;

    }
}