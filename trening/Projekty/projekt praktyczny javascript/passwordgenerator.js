const characterAmountRange = document.getElementById('numberrange');
const characterAmountNumber = document.getElementById('number');

const includeUppercaseElement = document.getElementById('uppercase');
const inculdeLowercaseElement = document.getElementById('lowercase');
const includeNumbersElement = document.getElementById('includeNumbers');
const inculdeSpecialSignsElement = document.getElementById('special');

const form = document.getElementById('passwordGeneratorForm');
const passwordDisplay = document.getElementById('passwordDisplay');

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(123, 126));

characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);

form.addEventListener('submit', e => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const inculdeLowercase = inculdeLowercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const inculdeSpecialSigns = inculdeSpecialSignsElement.checked;
    const password = generatePassword(characterAmount, includeUppercase, inculdeLowercase, includeNumbers, inculdeSpecialSigns);
    passwordDisplay.innerText = password;

});

function generatePassword(characterAmount, includeUppercase, inculdeLowercase, includeNumbers, inculdeSpecialSigns) {
    let generatePassword = '';
    let charTab = [];
    let numberOfTypes = includeUppercase + inculdeLowercase + includeNumbers + inculdeSpecialSigns;
    if(includeUppercase) {
        charTab = charTab.concat(UPPERCASE_CHAR_CODES);
        generatePassword += getCharacterFromTab(UPPERCASE_CHAR_CODES);
    }
    if(inculdeLowercase) {
        charTab = charTab.concat(LOWERCASE_CHAR_CODES);
        generatePassword += getCharacterFromTab(LOWERCASE_CHAR_CODES);
    }
    if(includeNumbers) {
        charTab = charTab.concat(NUMBER_CHAR_CODES);
        generatePassword += getCharacterFromTab(NUMBER_CHAR_CODES);
    }
    if(inculdeSpecialSigns) {
        charTab = charTab.concat(SYMBOL_CHAR_CODES);
        generatePassword += getCharacterFromTab(SYMBOL_CHAR_CODES);
    }

    for (let i = 0; i < characterAmount - numberOfTypes; i++) {
        generatePassword += getCharacterFromTab(charTab);
    }

    return generatePassword;
}

function getCharacterFromTab(tab) {
    var charCodeIndex = getRndInteger(0, tab.length - 1);
    var charCode = tab[charCodeIndex];
    return String.fromCharCode(charCode);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}



function syncCharacterAmount(e) {
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}
/*
function copyPassword(){

    document.getElementById("displayPassword").select();
    document.execCommand("Copy")
    alert("Password copied to clipboard!");
}
*/