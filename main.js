var canvas = new fabric.Canvas('mycanvas');

block_width = 30;
block_height = 30;

player_x = 10;
player_y = 10;

player_object = "";
block_object = "";

function player_update() {
    fabric.Image.fromURL("thor.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {

    fabric.Image.fromURL(get_image, function (Img) {
        block_object = Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);

        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", make);

function make(e) {

    key = e.keyCode;
    console.log(key);
    if (key == '37') {
        left();
        console.log('left');
    }

    if (key == '38') {
        up();
        console.log('up');
    }

    if (key == '39') {
        right();
        console.log(key);
    }

    if (key == '40') {
        down();
        console.log(key);
    }

    if (key == '70') {
        new_image("iface.png");
        console.log('face');
    }

    if (key == '76') {
        new_image("spider left.png");
        console.log("left hand")
    }

   
    if (key == '82') {
        new_image("thor right.png");
        console.log("right hand")
    }

    if (key == '72') {
        new_image("hulk_legs.png");
        console.log("legs")
    }

    if (key == '66') {
        new_image("ibody.png");
        console.log("body")
    }
if(e.shiftKey && key == '80'){
console.log("shift and p key pressed together")
block_width=block_width+10;
block_height=block_height+10;
document.getElementById("width").innerHTML=block_width;
    document.getElementById("height").innerHTML=block_height;
}

if(e.shiftKey && key == '77'){
    console.log("shift and m key pressed together")
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("width").innerHTML=block_width;
    document.getElementById("height").innerHTML=block_height;
}
}
