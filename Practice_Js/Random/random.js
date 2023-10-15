
document.getElementById("button").onclick = function() {
    let random = Math.floor(Math.random()*6)+1; // xúc sắc không có số 0 
    document.getElementById("result").innerHTML="result is: "+random;
}
