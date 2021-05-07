const cats =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const catsCopy = [...cats, name];
    return catsCopy;
}

function prependCat(name) {
    const catsCopy = [name, ...cats];
    return catsCopy;
}

function removeLastCat() {
    const catsCopy = cats.slice(0, cats.length - 1);
    return catsCopy;

}

function removeFirstCat() {
    const catsCopy = cats.slice(1);
    return catsCopy;
}


























// Write your solution here!
/*const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name){
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat(){
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
    return cats.slice(1);
}
*/