/* const colors = ['Red', 'Brown', 'Black'];
colors.push('white');
console.log(colors);
colors.pop();
console.log(colors);


const colors = ['Red', 'Brown', 'Black'];
console.log(colors.length);


const colors = new Array('red', 'brown', 'black');
console.log(colors);



const colors1 = new Array('red', 'brown', 'black');
const colors2 = Array.from(colors1);
console.log(colors2);

const colors = new Array('red', 'brown', 'black');
colors.forEach((color) => {
    console.log(color)
});


const colors1 = ['Red', 'Brown', 'Black'];
const colors2 = [...colors1, 'Purple', 'Violet', 'Yellow'];
console.log(colors2);


const numbers  = [10, 3, 14, 7, 9, 5, 8, 4];
const sum = numbers.reduce((prev, curr) =>{
    return prev + curr;
}, 0);
console.log(sum);


const numbers = [10, 3, 14, 7, 9, 5, 8, 4];
const newNumbers = numbers.map((number) =>{
    return number * 2;
});
console.log(newNumbers);


const numbers = [10, [3, 14, [7], 9], [[5, [8]], 4]];
const newNumbers = numbers.flat(3);
console.log(newNumbers);

const numbers = [10, 3, 14, 7, 9, 5, 8, 4];
const newNumbers = numbers.filter((number) =>{
    return number > 5;
});
console.log(newNumbers);

const numbers = [10, 3, 14, 7, 9, 5, 8, 4];
const number = numbers.find((number) => {
    return number > 5 && number <10;
});
console.log(number);



const unsorted = [10, 3, 14, 7, 9, 5, 8, 4];
const sorted = unsorted.sort(function(a, b){return a-b});
console.log(sorted);

const numbers = [10, 3, 14, 7, 9, 5, 8, 4];

const lessThan20 = numbers.every((element) => {
    return element < 20;
});
console.log(lessThan20);

const higherThan5  = numbers.every((element) =>{
    return element > 5;
})
console.log(higherThan5);

const numbers = [10, 3, 14, 7, 9, 5, 8, 4];
const newArray = numbers.reverse();
console.log(newArray);


const arr1 = [10, 3, 14, 7, 9, 5, 8, 4];
const arr2 = [17, 19, 20, 21, 7, 22, 13];

const arr3 = arr1.concat(arr2);
console.log(arr3);

//Cwiczenie 1 Object


function everyday(date) {
    var day = date.getDay();
    var weekday = [];
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var result = [];
    var index = date.getDate() - 1;
    for(var i = index; i >= 0; i--) {
       result[i] = weekday[day];
       day = day - 1;
       if (day < 0 ){
           day = 6;
       }
    }  
    
    
    return result;
};

// Drugi sposób
function getDaysArray(date) {
    var result = [];
    var weekday = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    var currentDay = date.getDate();
    var localCopy = new Date(date.getFullYear(), date.getMonth(), 1);
    var day = localCopy.getDay();
    for(var i = 0; i < currentDay; i++) {
        result.push(weekday[day]);
        day++;
        day = day % 7;
    }
    return result;
}

*/

//Cwiczenie 2

const weather1 = {
    date: new Date(2020,8,1), // dzien miesiaca,
    temp: 12, // w st. C
    wind: 23, // w km/h
    humidity: 0.3 // w %
  };
  const weather2 = {
    date: new Date(2020,8,2), // dzien miesiaca,
    temp: 13, // w st. C
    wind: 29, // w km/h
    humidity: 0.35 // w %
  };
  const weather3 = {
    date: new Date(2020, 8, 3), // dzien miesiaca,
    temp: 15, // w st. C
    wind: 62, // w km/h
    humidity: 0.25 // w %
  };
  const weather4 = {
    date: new Date(2020, 8, 4), // dzien miesiaca,
    temp: 18, // w st. C
    wind: 10, // w km/h
    humidity: 0.2 // w %
  };
  const weather5 = {
    date: new Date(2020, 8, 5), // dzien miesiaca,
    temp: 12, // w st. C
    wind: 25, // w km/h
    humidity: 0.13 // w %
  };
  const weather6 = {
    date: new Date(2020, 8, 6), // dzien miesiaca,
    temp: 20, // w st. C
    wind: 40, // w km/h
    humidity: 0.5 // w %
  };
  const weather7 = {
    date: new Date(2020, 8, 7), // dzien miesiaca,
    temp: 17, // w st. C
    wind: 41, // w km/h
    humidity: 0.42 // w %
  };

  const weatherArray = [weather1, weather2, weather3, weather4, weather5, weather6, weather7];



 function sort (a, b){
     if(a.temp > b.temp){
     return -1; }
     if(a.temp < b.temp){
     return 1;}
    if (a.humidity< b.humidity){
    return -1;}
    if (a.humidity>b.humidity){
    return 1;}
    if (a.wind< b.wind){
    return -1;}
    if (a.wind>b.wind){
    return 1;}


 }



 