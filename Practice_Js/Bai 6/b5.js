document.getElementById("submitButton").onclick = function() {
    let year = document.getElementById("year").value;
    year = Number(year);

    if((year%100!=0 && year%4==0) || (year%100==0 && year%400==0)){
        document.getElementById("result").innerHTML=year+" là nhăm nhuần";
    }
}