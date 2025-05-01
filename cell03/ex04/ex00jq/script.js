
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function change() {
  $("body").css("background-color", getRandomColor());
}

$(document).ready(function() {
  $("#changeColorBtn").click(change);
});

