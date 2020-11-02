function writeLetter(letter) {
    var abc = document.getElementById('result');
    abc.innerText = letter;
}
function readLetter() {
    var abc = document.getElementById('result');
    return abc.innerText;
}
function button(x) {
    var prevLetter = readLetter();
    var letter = prevLetter + x;
    writeLetter(letter);
}
function sortButton(sortResult){
    var result = readLetter();
    var sortResult = result.split('').sort();
    var element = document.getElementById('result');
    element.innerText = join(sortResult);
}

function join(tab){
    let a = "";

    for(i=0; i<tab.length; i++){
        a += tab[i];

    }
    return a ;

}
