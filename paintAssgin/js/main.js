// function onMouseMove(ev) {
//     var x, y;
//     // Get the mouse position.
//     if (ev.layerX >= 0) {
//         // Firefox
//         x = ev.layerX - 50;
//         y = ev.layerY - 5;
//     } else if (ev.offsetX >= 0) {
//         // Opera
//         x = ev.offsetX - 50;
//         y = ev.offsetY - 5;
//     }
//     if (!started) {
//         started = true;
//         context.beginPath();
//         context.moveTo(x, y);
//     } else {
//         context.lineTo(x, y);
//         context.stroke();
//     }
//     $('#stats').text(x + ', ' + y);
// }

// function drawLine(x) {
//     x.style.background = "#235421";
// }

// function drawmyTable(x, y) {
//     var ground = document.getElementById("html");
//     var p = "<table border=0 cellspacing=0 cellpadding=0  ";
//     for (var i = 0; i < x; i++) {
//         p += "<tr>";
//         for (var j = 0; j < y; j++) {
//             p += "<td onMouseOver='drawLine(this);'></td>";
//         }
//         p += "</tr>";
//     }
//     p += "</table>";
//     ground.innerHTML += "" + p + "";
// }

// in the body OnLoad="drawmyTable(50,50);
// and id html


var paint = {};

var blockPaint = document.createElement("div");
blockPaint.appendChild