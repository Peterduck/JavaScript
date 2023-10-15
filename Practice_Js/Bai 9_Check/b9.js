document.getElementById("check").onclick = function(){
    // Lấy ngày hiện tại
const today = new Date();
// Lấy ngày Giáng sinh trong năm hiện tại
const christmas = new Date(today.getFullYear(), 11, 25); // Tháng 11 tương ứng với tháng 12
// Tính số miligiây còn lại giữa hai ngày
const timeDiff = christmas.getTime() - today.getTime();
// Chuyển số miligiây thành số ngày
const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
document.getElementById("result").innerHTML="Số ngày còn lại trước Giáng sinh: " + daysLeft + " ngày";
}