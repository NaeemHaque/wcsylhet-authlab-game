function Logo(x, type) {
    this.selectedImage =  !type ?
        img[Math.floor(Math.random() * img.length)] :
        loadImage('images/boom-1.gif');

    this.origin = x; // from what point to oscillate

    this.position = createVector(0, 0);
    this.serpentine = random(3) + 3; // serpentine distance

    this.type = type; // false = ant, true = bee
    this.squashed = false; // bug state

    this.radius = 50; // size of bug
}

let img  =[];
let boom;

function preload() {
    console.log('on preload')
    for (let i = 1; i < 8; i++) {
        img.push(loadImage('images/' + i + '.png'))
    }
}

/**
 * draws the insect based upon type
 */
Logo.prototype.draw = function() {
    //stroke(255);
    //strokeWeight(3);
    //fill(this.type ? "#00FFFF" : "#FF4444");
    //ellipse(this.position.x, this.position.y, this.radius);



    //var img = loadImage('images/abcd.png')


    image(this.selectedImage, this.position.x - (this.radius/2), this.position.y - (this.radius /2), this.radius, this.radius)



    console.log(img)

    //drawImage(img, 10, 10);
};

/**
 * forces bugs along their path
 */
Logo.prototype.update = function() {
    this.position.y += speed;
    this.position.x = cos(this.position.y * (0.005 * this.serpentine) + this.serpentine * 10) * (width / this.serpentine) + this.origin;
}

/**
 * returns whether or not x & y are within the bug
 */
Logo.prototype.squashedBy = function(x, y) {
    var d = dist(x, y, this.position.x, this.position.y);
    return (d < this.radius);
};