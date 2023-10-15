document.getElementById("check").onclick = function() { 
    for(let year =2014; year<=2050; year++){
        let date = new Date(year,0,1);
        if(date.getDay()===0){
            document.getElementById("result").innerHTML= year +" có ngày 1 tháng 1 là chủ nhật";

        }
    }
}