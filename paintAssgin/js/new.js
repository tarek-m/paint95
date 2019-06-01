var paintbox = document.getElementById("canvas");
var start = function() {
    paintbox.addEventListener("mousemove", drawOnCanvas);
};
var newColor = document.getElementById("colorPick");
//draw black
var drawOnCanvas = function(e) {
        if ((e.buttons & 1) === 0) return; // check mouse down
        // to check if inside boundreis avirm

        var box = paintbox.getBoundingClientRect();
        if (e.clientX - 5 < box.left || e.clientX + 5 > box.right ||
            e.clientY - 5 < box.top || e.clientY + 5 > box.bottom) return;
        var newClick = document.createElement("div");
        newClick.className = "smallDiv";
        newClick.style.backgroundColor = newColor.value;
        paintbox.appendChild(newClick);
        newClick.style.left = (e.pageX - 5) + "px";
        newClick.style.top = (e.pageY - 5) + "px";

    }
    //draw white
var erase = function() {
    paintbox.addEventListener("mousemove", eraseclick);
};


var eraseclick = function(e) {
        if ((e.buttons & 3) === 0) return;

        var box = paintbox.getBoundingClientRect();
        if (e.clientX - 5 < box.left || e.clientX + 5 > box.right ||
            e.clientY - 5 < box.top || e.clientY + 5 > box.bottom) return;
        var newClick2 = document.createElement("div");
        newClick2.className = "smallDiv2"; // Don't create duplicate ID; put CSS in class
        newClick2.style.backgroundColor = "white";
        paintbox.appendChild(newClick2);
        newClick2.style.left = (e.pageX - 5) + "px";
        newClick2.style.top = (e.pageY - 5) + "px";

    }
    //size 
function submittest() {
    var newHeight = document.getElementById("inputheight");
    var newWidth = document.getElementById("inputwidth");

    paintbox.style.height = newHeight.value + "px";
    paintbox.style.width = newWidth.value + "px";
}



erase();
start();
// var paintbox = document.getElementById("canvas");
// var start = function() {
//     paintbox.addEventListener("mousemove", drawOnCanvas);
//     paintbox.removeEventListener("mouseup", drawOnCanvas);
// };
// var newColor = document.getElementById("colorPick");
// var drawOnCanvas = function() {
//         var newClick = document.createElement("div");
//         newClick.setAttribute("id", "smallDiv");
//         newClick.style.backgroundColor = newColor.value;
//         newClick.style.width = "10px";
//         newClick.style.height = "10px";
//         newClick.style.position = "absolute";
//         paintbox.appendChild(newClick);
//         var x = event.clientX;
//         var y = event.clientY;
//         var coords = x + y;
//         document.getElementById("smallDiv").innerHTML = coords;
//         newClick.style.left = x + "px";
//         newClick.style.top = y + "px";
//     }
// e.pageX - e.target.offsetLeft + "px";
// var draw = function() {
//     if (e.which === 1) {
//         drawOnCanvas();
//     }
// }


// paintbox.addEventListener("mousedown", drawOnCanvas());

// if (drawLine === true) {
//     newClick.addEventListener('mousemove', drawOnCanvas);
// }



start();
//stop from going out side
//mouse  down then move  and up to stop 
//boolean draw true false
//tehn attrivute
//drawOnCanvas();
// x = e.clientX - rect.left;
//  y = e.clientY - rect.top;
// shape1.addEventListener("click", drawCircle);
// shape2.addEventListener("click", drawTriangle);

// function drawTriangle() {
//     var shape1 = document.getElementById("circleShape");
//     var shape2 = document.getElementById("triangleShape");

//     newClick.style.backgroundColor = "Red";
// }