/*
* p5.mapper
* Video on quad surface
* Click to start video
* 
* Jenna deBoisblanc
* jdeboi.com
* 11/16/2021
* 
*/

// Natalie 
// Kathryn --- test test 
// Evi
// Daniel
//mapping object variable
let pMapper;   

//mapping surface variables
let quadMapOne;
let quadMapThree;
let tMovement = -3500;

    // Daniel
let quadMapGlitter;

//variable for the image
let img;
let imgTrain;

   // Daniel
let imgGlitter;


//variable for video

// variable to see if video is playing or not
// we need this bc we dont want our video to show anywhere else but inside a masking surface




// variable for font (you can ignore this)

let trainMove = -400;


// preloads our assets and sets the video to hide 
//calls from our assets folder
function preload() {
    img = loadImage("assets/KatherineConceptArtMagenta.jpeg");
    
    
    imgTrain = loadImage("assets/train.png");

    // Daniel
    imgGlitter = loadImage("assets/IntelPentilliumIII.png");

    
    
    // we need this bc we dont want our video to show anywhere else but inside a masking surface
}

function setup() {
    //creates our canvas - 3D renderer and responsive
    createCanvas(windowWidth, windowHeight, WEBGL);
    //brings in font

    //the mapping object
    //if you see "this", it refers to whatever we're assigning
    pMapper = createProjectionMapper(this);   

    //these help to crop and edit images projected
    //creates the 4 point map
    
    
    quadMapConcept = pMapper.createQuadMap(img.width,img.height);
    quadMapTrain = pMapper.createQuadMap(600, 600);

    // Daniel
    quadMapGlitter = pMapper.createQuadMap(img.width, img.height);
   


    //loads in the saved map
    pMapper.load("maps/map.json");

}


function draw() {
    //black background
    background(0);

    //the frame rate at the top left
    displayFrameRate();
    



    // quadMapThree.clear();
    // quadMapThree.translate(trainMove, 0);
    // quadMapThree.rect(-400, 150, 100, 50);
    // quadMapThree.rect(-500, 350, 100, 50);
    // quadMapThree.rect(-600, 350, 100, 50);
    // quadMapThree.rect(-700, 350, 100, 50);
    quadMapTrain.clear();
    quadMapTrain.translate(-quadMapTrain.width / 2, -quadMapTrain.height /2);   
    quadMapTrain.image(imgTrain, tMovement, -700);
    
    // Daniel
    quadMapGlitter.image(imgGlitter, -500, -500);

    tMovement+= 20;

    
    
    
    
    
    if(tMovement > 600){
       tMovement = -5000;
        //sets concept art to quadmap
       quadMapConcept.image(img, 100, 100);
    }
}





//!!!!!!!!!!!!!!!!!!!!!!!//
//!library functions do not touch!//
//!!!!!!!!!!!!!!!!!!!!!!!//
function keyPressed() {
    switch (key) {
        case 'c':
            pMapper.toggleCalibration();
            break;
        case 'f':
            let fs = fullscreen();
            document.getElementById("header").style.display = "none";
            fullscreen(!fs);
            break;
        case 'l':
            pMapper.load("maps/map.json");
            break;

        case 's':
            pMapper.save("map.json");
            break;
    }
}

function mousePressed() {
    isPlaying = true;
    // video.loop();
    pMapper.onClick();
}

function mouseDragged() {
    pMapper.onDrag();
}

function mouseReleased() {
    pMapper.onRelease();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function displayFrameRate() {
    fill(255);
    noStroke();
    text(round(frameRate()), -width / 2 + 20, -height / 2 + 20);
}