var color = document.getElementById("color").value;
var con = document.getElementsById("con");
con.style.backgroundColor = color + " !important";
localStorage.setItem("color", color);