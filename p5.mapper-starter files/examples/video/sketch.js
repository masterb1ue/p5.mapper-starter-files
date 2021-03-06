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
// Daniel
//mapping object variable
let pMapper;   

//mapping surface variables
let quadMapOne;
let quadMapThree;
let tMovement = -3500;

//kathyrn
let gateway2000;
let devo2001;
let quadMapGateway;
let quadMapDevo2001;

//jorge
let img;
let imgTrain;


let proj4;
let proj3;
let lorlips;
let seventy;

let quadMaplips;

   // Daniel
let imgGlitter;
    // Daniel
let quadMapGlitter;

//evi
let toyota;
let quadMapToyota;
let building;
let quadMapBuilding;




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


    proj4 = loadImage("assets/proj4.jpg");

    proj3 = loadImage("assets/proj3.jpg");

    lorlips = loadImage("assets/lorlips.PNG");

    seventy = loadImage("assets/seventy.PNG");


    // Daniel
    imgGlitter = loadImage("assets/IntelPentilliumIII.png");

    gateway2000 = loadImage("assets/gateway2000.jpg");

    devo2001 = loadImage("assets/devo2001.jpg");

    //evi
    toyota = loadImage("assets/toyotaecho.jpg");
    building = loadImage("assets/building.JPG");

    
    
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
    
    //jorge 
    quadMapConcept = pMapper.createQuadMap(img.width,img.height);
    quadMapTrain = pMapper.createQuadMap(600, 600);

    // Daniel
    quadMapGlitter = pMapper.createQuadMap(imgGlitter.width, imgGlitter.height);


    //kathryn 
    quadMapGateway = pMapper.createQuadMap(gateway2000.width, gateway2000.height);
    quadMapDevo2001 = pMapper.createQuadMap(devo2001.width, devo2001.height);

    //natalie
    quadMaplips = pMapper.createQuadMap(lorlips.width, lorlips.height);
    quadMapproj3 = pMapper.createQuadMap(proj3.width, proj3.height);

    //evi
    quadMapToyota = pMapper.createQuadMap(600, 600);
    quadMapBuilding = pMapper.createQuadMap(600, 600);

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

    //jorge
    quadMapTrain.clear();
    quadMapTrain.translate(-quadMapTrain.width / 2, -quadMapTrain.height /2);   
    quadMapTrain.image(imgTrain, tMovement, -700);
    quadMapConcept.image(img, -500, -500);
    
    // Daniel
    quadMapGlitter.image(imgGlitter, -500, -500);

    //kathryn
    quadMapDevo2001.image(devo2001, -750, -520);
    quadMapGateway.image(gateway2000, -700, -500);

    tMovement+= 20;

    //natalie
    quadMaplips.image(lorlips, -500,-500);
    quadMapproj3.image(proj3, -700,-700);

    //evi
    quadMapBuilding.image(building, 0, 0);
    quadMapToyota.image(toyota, 0, 0);
    
    
    
    
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