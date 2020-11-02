function writeResult(result) {
    var resultElement = document.getElementById('output-value');
    resultElement.innerText = result;
}

function readResult() {
    var resultElement = document.getElementById('output-value');
    return resultElement.innerText;
}

function button(x) {
    var prevResult = readResult();
    var lastChar = getLastChar();
    if (x == 0 && prevResult == "0") {
        return;
    } 
    else if (prevResult == "0") {
        prevResult = "";
    }
    else if (Number.isInteger(x) == false && lastChar == x){
        return;
    }



    var result = prevResult + x;
    writeResult(result);
}

function summary() {
    var expression = document.getElementById('output-value').innerText;
    var result = eval(expression);
    writeResult(result);
}

function getLastChar() {
    var prevResult = readResult();
    return prevResult[prevResult.length - 1];
}

function backspace(){
    var  result = readResult();
    var len = result.length-1;
    var newresult = result.substring(0,len);
    writeResult(newresult);
}