
              
function myFunction(p1, p2) {
    return p1 * p2;
}

document.getElementById("multiply").innerHTML = 
myFunction(4, 3);
              
              
function randomLinks() {
    var myInput = new Array();
    myInput[0] = "https://i.redd.it/krsunnhmphw01.gif"
    myInput[1] = "https://i.redd.it/rsb2ywr82io01.gif"
    myInput[2] = "https://i.redd.it/anzu8fukmyty.jpg"
    myInput[3] = "https://i.redd.it/af11dz0tsew01.jpg"
    myInput[4] = "https://i.redd.it/oe5c9v9q4iv01.png"
    myInput[5] = "https://i.imgur.com/QtsyQgX.jpg"
    var rnd = Math.floor(Math.random() * myInput.length);

 document.write('<img class="who" src="' + myInput[rnd] + '">');

}