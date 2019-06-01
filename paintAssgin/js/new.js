var paintbox = document.getElementById("canvas");
var start = function() {
    paintbox.addEventListener("mousemove", drawOnCanvas);
};
var newColor = document.getElementById("colorPick");

//Draw Line
var drawOnCanvas = function(e) {
        if ((e.buttons & 1) === 0) return; // check mouse down
        // to check if inside boundreis avirm
        var box = paintbox.getBoundingClientRect();
        if (e.clientX - 5 < box.left || e.clientX + 5 > box.right ||
            e.clientY - 5 < box.top || e.clientY + 5 > box.bottom) return;
        var newClick = document.createElement("div");
        newClick.className = "smallDiv";
        newClick.id = "newtest";
        newClick.style.backgroundColor = newColor.value;
        paintbox.appendChild(newClick);
        newClick.style.left = (e.pageX - 5) + "px";
        newClick.style.top = (e.pageY - 5) + "px";
    }
    //rightclick eraser
var erase = function() {
    paintbox.addEventListener("mousemove", eraseclick);
};
var eraseclick = function(e) {
        if ((e.buttons & 3) === 0) return;
        var box = paintbox.getBoundingClientRect();
        if (e.clientX - 5 < box.left || e.clientX + 5 > box.right ||
            e.clientY - 5 < box.top || e.clientY + 5 > box.bottom) return;
        var newClick2 = document.createElement("div");
        newClick2.className = "smallDiv";
        newClick2.style.backgroundColor = "antiquewhite";
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