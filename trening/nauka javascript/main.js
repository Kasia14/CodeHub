/*console.log(419*179);
console.log(11*241);
console.log(101**2);
console.log(501/4);
console.log(2+2*2);
console.log(0.1+0.2);
console.log(0.1**5);
console.log(0.7**2); 

let a = 1
{
    let a = 2;
    console.log(a);
}

console.log(a); 

let a = 1;
const b = 2;
console.log(a, b);
a = 3;
console.log(a, b); 

let a = 1;
let b = a + 1;
let c  = b + 1;
console.log(a, b, c); 

const liczba1 = 31;
const liczba2 = 99;

console.log(liczba1+liczba2);

const liczba1=45;
const liczba2= 29;
console.log(liczba1-liczba2);

const liczba1 = 63;
const liczba2= 52;
console.log (liczba1*liczba2);

let a = 22;
let b= a/2 + 1 -1 ;
console.log(a-b);

const a = 6;
{
    let a = 4;
    console.log(a);
        a = 22;
}
console.log(a);

var a = 14;
{
    console.log(a);
    a = 24;
}
console.log(a);
{
        a = 2;
}

const tekst ='Poczatek';
console.log(tekst + ' i koniec');

let a = 1;
let name = 'Newton';
let b = false;
let b;
console.log(b);

const a = 1;
console.log(a === 1);


const a = 1;
console.log(a == true);

const a = 1;
const b = 2;
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true 

let a = 1;
console.log(++a); 
console.log(a++); 
console.log(a);

const wzrostAnny = 174;
const wzrostJana = 186;
console.log(`Wyższego wzrostu jest ${wzrostAnny > wzrostJana ? 'Anna' : 'Jan'}`);

const pet = {
    name: "Reks"
};
console.log(pet.name);
delete pet.name;
console.log(pet.name);

const tekst = ['To', 'jest', 'tablica', 'danych', 'typu', 'string'];
console.log(...tekst);

function przyklad(...argumenty) {
    console.log(argumenty);
}
const a = [1, 2, 3];
przyklad(a);

class TestowaKlasa {};
const a = new TestowaKlasa();
typeof a;

console.log(98&2);
console.log(2&3^~4);

const populationOfLocationA = 250000;
const populationOfLocationB = 375000;
let toPrint = '';
if (populationOfLocationA > populationOfLocationB) {
    toPrint = 'Location A is bigger';
} else {
    toPrint = 'Location B is bigger';
}
console.log(toPrint);

const populationOfLocationA = 250000;
const populationOfLocationB = 375000;
console.log (`Location ${populationOfLocationA > populationOfLocationB ? `A` : `B`} is bigger`);

const age = 41;
const result = age >= 18 ? 'You are adult' : 'You are less than 18 years old';
console.log(age); 
const age = 41;
let YourAge = '';
if (age>=18) {
    YourAge = 'You are adult';
} else {
    YourAge = 'You are less than 18 years old';
}
console.log(YourAge);

for (let i = 0; i<10; i++) {
    console.log ('Wykonanie pętli ${i}');
}

for (let i = 2; i <=10; i+=2) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log ('Wykonanie pętli ${i}');
i++;
}

const a = false;
while (a) {
    console.log ('Wnętrze')
}
console.log('Po przejściu z pętli');

do {
    console.log("hej");

} while (false);

const animals = ['Żubr', 'Bóbr', 'Łoś', 'Lis', 'Wilk', 'Kuna', 'Koń', 'Wydra', 'Ryjówka', 'Zając'];
for (const animal of animals) {
    console.log(animal);
}

const obj = {a:1, b: 2, c: 3};

for (const key in obj) {
    console.log(key);
}
for (let i = 0; i <10; i++){
    console.log(i);
    if (i % 2 === 0) {
        break;
    }
    
}



for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

for (let i = 0; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

for (let i=0; i<=100; i++)
{
    if (i % 3 == 0)
    console.log ("Fizz");
    if (i % 5 == 0)
    console.log ("Buzz");   
    else if (i % 3 !=0 || i % 5 != 0)
    console.log(i);
} 






//SITO ALGORYTM Zadklarowanie tablicy i wypelnienie true
let A = [];
for(i = 0; i < 100; ++i)
{
    A[i] = true;
}

//Wykreslenie liczb wedlug sita
let n = 100;
for (i=2; i*i<n; ++i) {
    if(A[i] == true){
        for(j = 2*i; j < n; j+=i){
            A[j] = false;
        }
    }
}

for(i=2; i< A.length; i++)
{
    if(A[i] == true)
    console.log(i)
}


function sum(a, b) {
    return a + b;
}
console.log (sum(3,5))


function sum(a, b, callback) {
    const result = a + b;
    callback(result);
}

function display( toDisplay) {
    console.log('Wynik to:' + toDisplay);
}

sum (9, 12, display);


(function() {
    console.log("Wnętrze funkcji");
}) ();


(function(val){
    console.log(val);
}) (4);

const sum = function(a, b) {
    return a + b;
}
console.log(sum(1, 2));



function display(val, type = "log") {
    if (type === "log"){
        console.log(val);
    } else if (type === "info") {
        console.info(val);
    } else {
      console.error(val) ;

    }
}
display("Tekst 1");
display("Tekst 2", "info");
display("Tekst 3", "log");
display("Tekst 4", "abcd");


const sum = (a, b) => {
    return a+b;
};
console.log(sum(1,3));



let tab = ["k", "d"];
console.count(tab);

let tab = [7, 8, 3, 4, 9, 2];
analyze(tab);

function analyze(data) {
    console.log('Srednia to: ' + average(data) + '\nSuma to: ' + summary(data) + '\nLiczba próbek to: ' + count(data) + '\nMediana to: ' + median(data) + '\nWariancja to: ' + variance(data) + '\nOdchylenie to ' + standarddeviation(data));
}

function summary(data) {
    let sum = 0;
    for (i = 0; i < count(data); i++) {
        sum += data[i];
    }
    return sum;
}

function average(data) {
    let d = summary(data);
    return d / count(data);
}

function count(data) {
    return data.length;
}

function variance(data) {
    let varian = 0;
    for (i = 0; i < count(data); i++) {
        varian += Math.pow(data[i], 2) / count(data);
    }
    return varian;
}

function standarddeviation(data) {
    let standard = 0;
    for (i = 0; i < count(data); i++) {
        standard += Math.sqrt(Math.pow(data[i], 2) / count(data));
    }
    return standard;
}

function median(data) {
    var half = Math.floor(count(data)/ 2);
    if (count(data) % 2 == 0) {
        
        return (data[half] + ((data[half]) - 1)) / 2;
    }

    return data[half];
}

*/

//SITO ALGORYTM Zadklarowanie tablicy i wypelnienie true
let A = [];
for(i = 0; i < 100; ++i)
{
    A[i] = true;
}

//Wykreslenie liczb wedlug sita
let n = 100;
for (i=2; i*i<n; ++i) {
    if(A[i] == true){
        for(j = 2*i; j < n; j+=i){
            A[j] = false;
        }
    }
}

for(i=2; i< A.length; i++)
{
    if(A[i] == true)
    console.log(i)
}