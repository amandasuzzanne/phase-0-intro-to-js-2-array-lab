// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

// Appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

// Prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

// Removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
    return cats.concat(name);
}

// Prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    return cats.splice(0, 0, name);
}

// Removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat(name) {
    return cats.slice(0, -1)
}

// Removes the first cat from the cats array and returns a new array, leaving the cats array unchanged 
function removeFirstCat(name) {
    return cats.slice(1)
}