
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function change() {
  $("body").css("background-color", getRandomColor());
}

// เรียกใช้ change เมื่อคลิกปุ่ม
$(document).ready(function() {
  $("#changeColorBtn").click(change);
});

