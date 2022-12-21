let stepb = document.getElementById('stepbl');
let stepbrdr = document.getElementById('stepbrdr');

stepbl.onmouseover = function () {
  stepbrdr.style.borderBottom = '3px solid white';
}

stepbl.onmouseout = function () {
  stepbrdr.style.borderBottom = '3px solid black';
}