//Your name
//Period
//Date

/*Provide a description about what this program does here*/

/*Write code to manipulate the elements on your index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text and an music. */

//creates background
var bg = document.getElementById("4");
bg.style.width = "0px";
bg.style.height = "0px";
bg.style.borderWidth = "200px"
bg.style.borderStyle = "solid"
bg.style.borderColor = "RGB(240, 240, 255)"
bg.style.borderRadius = "10%"
bg.style.position = "absolute"
bg.style.left = "35%"
bg.style.top = "5%"


// creates and styles the face shape
var santaface = document.getElementById("1");
santaface.style.width = "0px";
santaface.style.height = "0px";
santaface.style.borderWidth = "100px"
santaface.style.borderStyle = "solid"
santaface.style.borderColor = "RGB(255, 236, 169)"
santaface.style.borderRadius = "50%"
santaface.style.position = "absolute"
santaface.style.left = "42%"
santaface.style.top = "30%"


// creates the triangle for the hat
var hat = document.getElementById("2")
hat.style.borderBottom = "100px"
hat.style.borderLeft = "120px"
hat.style.borderRight = "120px"
hat.style.width = "0px"
hat.style.height = "0px";
hat.style.borderStyle = "solid"
hat.style.borderColor = "transparent";  
hat.style.borderBottomColor = "RGB(255, 0, 0)"
hat.style.position = "absolute"
hat.style.left = "40.5%"
hat.style.top = "15%"


// adds pompom
var pompom = document.getElementById("3");
pompom.style.width = "0px";
pompom.style.height = "0px";
pompom.style.borderWidth = "20px"
pompom.style.borderStyle = "solid"
pompom.style.borderColor = "RGB(255, 255, 255)"
pompom.style.borderRadius = "100%"
pompom.style.position = "absolute"
pompom.style.left = "47.8%"
pompom.style.top = "10%"


//creates and styles left eye
var leye = document.getElementById("6");
leye.style.width = "0px";
leye.style.height = "0px";
leye.style.borderWidth = "10px"
leye.style.borderStyle = "solid"
leye.style.borderColor = "RGB(0, 0, 0)"
leye.style.borderRadius = "100%"
leye.style.position = "absolute"
leye.style.left = "50%"
leye.style.top = "40%"


//creates and styles right eye
var reye = document.getElementById("7");
reye.style.width = "0px";
reye.style.height = "0px";
reye.style.borderWidth = "10px"
reye.style.borderStyle = "solid"
reye.style.borderColor = "RGB(0, 0, 0)"
reye.style.borderRadius = "100%"
reye.style.position = "absolute"
reye.style.left = "44%"
reye.style.top = "40%"

//creates circle for mouth
var mouth = document.getElementById("8");
mouth.style.width = "0px";
mouth.style.height = "0px";
mouth.style.borderWidth = "50px"
mouth.style.borderStyle = "solid"
mouth.style.borderColor = "RGB(0, 0, 0)"
mouth.style.borderRadius = "50%"
mouth.style.position = "absolute"
mouth.style.left = "45%"
mouth.style.top = "44%"

//covers half of mouth to make semicircle
var mouthcover = document.getElementById("9");
mouthcover.style.width = "0px";
mouthcover.style.height = "0px";
mouthcover.style.borderWidth = "50px"
mouthcover.style.borderStyle = "solid"
mouthcover.style.borderColor = "RGB(255, 236, 169)"
mouthcover.style.borderRadius = "10%"
mouthcover.style.position = "absolute"
mouthcover.style.left = "45%"
mouthcover.style.top = "40%"

//creates and styles nose
var nose = document.getElementById("10")
nose.style.borderBottom = "10px"
nose.style.borderLeft = "10px"
nose.style.borderRight = "10px"
nose.style.width = "0px"
nose.style.height = "0px";
nose.style.borderStyle = "solid"
nose.style.borderColor = "transparent";  
nose.style.borderBottomColor = "RGB(0, 255, 0)"
nose.style.position = "absolute"
nose.style.left = "47.5%"
nose.style.top = "48%"