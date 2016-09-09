console.log("Linked.");

// Dramatis Personae
var hobbits = [
    'Frodo Baggins',
    'Samwise \'Sam\' Gamgee',
    'Meriadoc \'Merry\' Brandybuck',
    'Peregrin \'Pippin\' Took'
];

var buddies = [
    'Gandalf the Grey',
    'Legolas',
    'Gimli',
    'Strider',
    'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1
function makeMiddleEarth() {
    // create a section tag with an id of middle-earth
    // inside, add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    var landsSection = document.createElement("SECTION");
    landsSection.setAttribute("id", "middle-earth");

    for (var i = 0; i < lands.length; i++) {
        landsSection.innerHTML += "<article> <h1>" + lands[i] + "</h1>" + "</article>";
    }
    body.appendChild(landsSection);
}
makeMiddleEarth();


// Part 2
function makeHobbits() {
    // display an unordered list of hobbits in the shire (which is the second article tag on the page)
    // give each hobbit a class of hobbit
    var theShire = body.getElementsByTagName("article")[0];
    var hobbitList = document.createElement("UL");
    for (var i = 0; i < hobbits.length; i++) {
        hobbitList.innerHTML += "<li>" + hobbits[i] + "</li>";
    }
    theShire.appendChild(hobbitList);
}
makeHobbits();


// Part 3
function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    // give the div a class of 'magic-imbued-jewelry'
    // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    // add the ring as a child of Frodo
    theRing = document.createElement("DIV");
    theRing.setAttribute("id", "the-ring");
    theRing.setAttribute("class", "magic-imbued-jewelry");
    theRing.addEventListener("click", nazgulScreech);
    theShire = body.getElementsByTagName("article")[0];
    frodo = theShire.getElementsByTagName("li")[0];
    frodo.appendChild(theRing);
}
keepItSecretKeepItSafe();


// Part 4
function makeBuddies() {
    // create an aside tag
    // attach an unordered list of the 'buddies' in the aside
    // insert your aside as a child element of rivendell
    var myAside = document.createElement("ASIDE");
    var buddiesList = document.createElement("UL");

    for (var i = 0; i < buddies.length; i++) {
        buddiesList.innerHTML += "<li> " + buddies[i] + "</ul>";
    }
    myAside.appendChild(buddiesList);
    body.appendChild(myAside);
}
makeBuddies();


// Part 5
function beautifulStranger() {
    // change the 'Strider' textnode to 'Aragorn'
    var strider = document.getElementsByTagName("li")[7];
    strider.textContent = "Aragorn";
}
beautifulStranger();

// Part 6
function leaveTheShire() {
    // assemble the hobbits and move them to Rivendell
    var theHobbits = document.getElementsByTagName("ul")[0];
    var Rivendell = document.getElementsByTagName("article")[1];
    Rivendell.appendChild(theHobbits);
}
leaveTheShire();


// Part 7
function forgeTheFellowShip() {
    // create a new div called 'the-fellowship' within rivendell
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var theFellows = document.createElement("DIV");
    var Rivendell = document.getElementsByTagName("article")[1];
    var theHobbits = document.getElementsByTagName("ul")[0];
    var theBuddies = document.getElementsByTagName("ul")[1];

    theFellows.setAttribute("id", "the-fellowship");

    theFellows.appendChild(theHobbits);
    theFellows.appendChild(theBuddies);

    Rivendell.appendChild(theFellows);
}
forgeTheFellowShip();


// Part 8
function theBalrog() {
    // change the 'Gandalf' textNode to 'Gandalf the White'
    // apply style to the element
    // make the background 'white', add a grey border
    var gandalf = document.getElementsByTagName("li")[4];
    gandalf.textContent = "Gandalf the White";
    gandalf.style.backgroundColor = "white";
    gandalf.style.border = "2px solid grey";
}
theBalrog();


// Part 9
function hornOfGondor() {
    // pop up an alert that the horn of gondor has been blown
    // Boromir's been killed by the Uruk-hai!
    // put a linethrough on boromir's name
    // Remove Boromir from the Fellowship
    alert("The Horn of Gondor has been blown!");
    var boromir = document.getElementsByTagName("li")[8];
    var theShire = document.getElementsByTagName("article")[0];

    boromir.style.textDecoration = "line-through";
    boromir.setAttribute("id","boromir");
    theShire.appendChild(boromir);
}
hornOfGondor();


// Part 10
function itsDangerousToGoAlone() {
    // take Frodo and Sam out of the fellowship and move them to Mordor
    // add a div with an id of 'mount-doom' to Mordor
    var frodo = document.getElementsByTagName("li")[1];
    var sam = document.getElementsByTagName("li")[2];
    var mordor = document.getElementsByTagName("article")[2];
    var mountDoom = document.createElement("DIV");
    mountDoom.setAttribute("id", "mount-doom");

    mordor.appendChild(frodo);
    mordor.appendChild(sam);
    mordor.appendChild(mountDoom);
}
itsDangerousToGoAlone();


// Part 11
function weWantsIt() {
    // Create a div with an id of 'gollum' and add it to Mordor
    // Remove the ring from Frodo and give it to Gollum
    // Move Gollum into Mount Doom
    var mordor = document.getElementsByTagName("article")[2];
    var theRing = document.getElementById("the-ring");
    var gollum = document.createElement("DIV");
    var mountDoom = document.getElementById("mount-doom");

    gollum.setAttribute("id", "gollum");
    gollum.appendChild(theRing);

    mountDoom.appendChild(gollum);
}
weWantsIt();

//remove method
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}


// Part 12
function thereAndBackAgain() {
    // remove Gollum and the Ring from the document
    // remove all the baddies from the document
    // Move all the hobbits back to the shire
    var theShire = body.getElementsByTagName("article")[0];
    var theBuddies = body.getElementsByTagName("ul")[1];
    var theHobbits = [body.getElementsByTagName("li")[1],
      theHobbits = body.getElementsByTagName("li")[2],
      theHobbits = body.getElementsByTagName("li")[7],
      theHobbits = body.getElementsByTagName("li")[8]];

    document.getElementById("gollum").remove();
    document.getElementById("boromir").remove();
    theBuddies.remove();

    theHobbits.forEach(function(hobbit){theShire.appendChild(hobbit)});
}
thereAndBackAgain();
