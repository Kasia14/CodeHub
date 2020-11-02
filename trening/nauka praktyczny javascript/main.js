/*const age = 27;
console.log(`Masz ${age} lat`);

const age = 25;
console.log(`Masz` + age + `lat`); 

function deconstruct(...text) {
    return text;
  }
  
  const age = 27;
  deconstruct`Masz ${age} lat`;


function deconstruct(...text) {
    return text;
}

const city = `XYZ`;
const temp = 12;
const weather = ["słonecznie", "pochmurno", "deszczowo"];

deconstruct(`Informacje o pogodzie z ostatniej chwili. W miejscowości ${city} jest ${weather[0]}. Temperatura wynosi ${temp} C.`)


console.table(['a', 'b', 'c']);
console.clear();


for (let i = 0; i < 10; i++) {
    console.count('wywolanie');
}

console.assert(false, 'Wystapil pewien blad');


console.group ('Komunikaty startowe');
console.info('Informacja A');
console.info('Info B');
console.groupEnd();


console.dir(window);
console.trace();

console.log('Log ogólny');
console.info('Informacja');
console.warn('Ostrzeżenie');
console.error('Błąd');


const date = new Date();
date.setFullYear(2010);
console.log(date);


const date = new Date();
date.setYear(2010);
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toUTCString());



const today = new Date().toLocaleDateString('pl-PL',{
    day : '2-digit',
    month:'2-digit',
    year : 'numeric'
});
console.log(today);



const today = new Date().toLocaleDateString('pl-PL', {
    day : '2-digit',
    month : '2-digit',
    year : 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
});
console.log(today); 



// wykorzystując obiekty Date
function dzis() {
    const today = new Date().toLocaleDateString('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })
    return today;
};
console.log(dzis());

function wyswietlDate(){
    var Today = new Date();
    var Month = Today.getMonth();
    var Day = Today.getDate();
    var Year = Today.getFullYear();
   
}
    return  Day + "-" + Month + "-" + Year ;

console.log(wyswietlDate());




var today = new Date();
var theEnd = new Date(2019, 2, 21);

function roznica(today, theEnd)  {
    return today - theEnd;

}
console.log(roznica(today, theEnd));



function wyswietlDate(){
    var Today = new Date();
    var Month = Today.getMonth();
    var Day = Today.getDate();
    var Year = Today.getFullYear();
   
}
    return  Day + "-" + Month + "-" + Year ;

    function innadata() {
        let date = new Date();
        date.setDate(12);

    }

    return innadata;

    function roznica(){
        let data1 = wyswietlDate();
        let data2 = innadata();
      
 }

 return data1-data2;
 console.log(roznica);


var DAY_IN_MILIS = 1000*60*60*24;
var d1 = new Date();
console.log(new Date(d1 - 29*DAY_IN_MILIS));
//zadanie 2
function addDays(date,date1) {
    var date = date.getDate();
    var date1 = date.setDate(date.getDate() + 50);
    
}
return date - date1;



const book = {
    name: 'Alice in Wonderland',
    author: 'Lewis Carroll',
    year: 1910
};

console.log(book.name);

const book = {
    name: 'Alice in Wonderland',
    author: 'Lewis Carroll',
    year: 1910
};

console.log(book['name']);

const book = {
    name: 'Alice in Wonderland',
    author: 'Lewis Carroll',
    year: 1910
};
book.name - 'The Hunting of the Snark';
book.year = '1876';
console.log(book['name'], book.year);

const book = {
    name: 'Alice in Wonderland',
    author: 'Lewis Carroll',
    year: 1910
};
Object.keys(book);

const book = {
    name: 'Alice in Wonderland',
    author: 'Lewis Carroll',
    year: 1910,
    getAuthor: function() {
        return this.author;
    }
};
console.log(book.getAuthor());

const book = {
    name: 'Alice in Wonderland',
    author: 'Lewis Carroll',
    year: 1910,
    get author(){
        return this._author;
    },
    set author(val){
        this._author = val;
    }
};
book.author  = 'Henry Holiday';
console.log(book.author);


const book1 = {
    name: 'Alice in Wonderland',
    author: 'Lewis Carroll',
    year: 1910,
};
console.log(book.year);
delete book.year;
console.log(book.year);


const book = {
    name: 'Alice in Wonderland',
    author: 'Lewis Carroll',
    year: 1910,
  };
  Object.freeze(book)
  book.name = 'New title';
  console.log(book.name);



 const book = {
    name: 'Alice in Wonderland',
    author: 'Lewis Carroll',
    year: 1910,
  };
  Object.seal(book)
  book.name = 'New title';
  console.log(book.name);

  book.page = 200;
  console.log(book.page);

   

   const book = {
    name: 'Alice in Wonderland',
    author: 'Lewis Carroll',
    year: 1910,
  };

  const bestsellerBook = Object.assign({}, book, {
page: 200,
location: 'London',
  });
  console.log(bestsellerBook);

   */
//OBJEKTY
// Ćwiczenie 1 

function trzy() {
    function today() {
        var dzis = new Date();

        var dzien = dzis.getDate();
        if (dzien < 10) { dzien = "0" + dzien };

        var miesiac = dzis.getMonth() + 1;
        if (miesiac < 10) { miesiac = "0" + miesiac };
        var rok = dzis.getFullYear();

        return dzien + "-" + miesiac + "-" + rok;
    }

    function poczatek() {
        // const dzien_milisekundy = 1000 * 60 * 60 * 24;
        var start = new Date(2020, 0, 1);
        var date = new Date();
        var days = Math.round((Math.abs(start - date)) / (1000*60*60*24));
       
        return days;


    }

    function koniec() {
        var koniec = new Date(2020, 12, 31);
        var date = new Date ();
        var day = Math.round((Math.abs(koniec - date)) / (1000*60*60*24));

        return day;
    }
    return '\nDziś jest:' + today() +'\nIlość dni od początku roku:' + poczatek() + '\n Do końca roku pozostało:' + koniec();
}
/*
// cwiczenie 2
const book1 = {
    name: 'Alice in Wonderland',
    author: 'Lewis Carroll',
    year: 1910,
};
const book2 = {
    name: 'Alice in Wonderland',
    author: 'Lewis Carroll',
    year: 1911,
};

function compare(book1, book2) {
    if (book1.length != book2.length) {
        return false;
    }
    for (const key in book1) {
        for (const key1 in book2) {
            if (book1[key] !== book2[key1]) {
                return false;
            }
        }
    }
    return true;
}




// ciwczenie 3

const order = {
    _quantity: 0,
    _currency: null,
    arr: ["USD", "PLN", "EUR"],
    _price: 0,
    calucateTotal: function () {
        return this.price * this.quantity;
    },

    get quantity() {
        return this._quantity;
    },
    set quantity(val) {
        if (val >= 0) {
            this._quantity = val;
            return;
        }
        console.error("Error");
    },
    get price() {
        return this._price;
    },
    set price(val1) {
        if (val1 >= 0.01) {
            this._price = val1;
            return;
        }
        console.error("Error");
    },
    get currency() {
        return this._currency;
    },
    set currency(val) {
        for (const index in this.arr) {
            if (this.arr[index] == val) {
                this._currency = val;
                return;
            }
        }
        console.error("Error");
    }
};



*/


