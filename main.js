var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg" , function(img){
        block_image_objet.scaleTowidth(700);
        block_image_objet.scaleToHeight(510);
        block_image_objet.set({
        to:20,
        left:0
        });
        canvas.add(block_image_objet);
    });
}

function playSound(){
	x.play();
}
