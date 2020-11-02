/*class Payment {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

}

const p1 = new Payment(9.99, 'USD');
const p2 = new Payment(14.99, 'EUR'); 

console.log(p1.amount);


class ATM {
    constructor(cash){
        this.cash = cash;
    }
    withdraw(amount){
        this.cash -= amount;
    }
    deposit(amount){
        this.cash += amount;
    }
}

const atm = new ATM(250000);

atm.withdraw(30000);
console.log(atm.cash);

atm.deposit(170000);
console.log(atm.cash);



class Calculate {
    static add(a, b) {
        return a + b;
    }
}

console.log(Calculate.add(2, 4));



class Vehicle {
    isTurnedOn = false;
    constructor(speed){
        this.speed = speed;
    }
switch(){
    console.log(this.isTurnedOn ? "Turning off.." : "Turning on...")
}
}

class Car extends Vehicle {
    constructor(speed){
        super(speed);
    }
    drive(){
        return `Driving ${this.speed} kmph`;
    }
}

class Aircraft extends Vehicle{
    constructor(speed){
        super(speed);
    }
    fly(){
        return `Flying ${this.speed}kmph`;
    }
    hover(){
        return "Hovering..."
    }
}

const car = new Car(70);
car.switch();
console.log(car.drive());

const aircraft = new Aircraft(180);
aircraft.switch();
console.log(aircraft.fly());



//cwiczenie 1

class Film {
    constructor(name, date, time, author) {
        this.name = name;
        this.date = date;
        this.time = time;
        this.author = author;
    }

}

const f1 = new Film('abc', '02.01.01', 90, 'JK');
const f2 = new Film('abcd', '01.04.01', 60, 'JK');
const f3 = new Film('abcdf', '01.05.01', 20, 'JK');

const f4 = [f1, f2, f3];


function countTime(tab){
    let c = 0;
    for(const value of tab){
        c += value.time; 
    }
    return c;
}


// cwiczenie 2

class Device {
    isTurnedOn = false;

    switch() {
        console.log(this.isTurnedOn ? "Turning off..." : "Turning on...");
        this.isTurnedOn = !this.isTurnedOn;
    }
}

class Printer extends Device {
    inkLevel = 0;

    constructor(inkLevel) {
        super();
        this.inkLevel = inkLevel;
    }

    print(size) {
        this.inkLevel -= size / 2;
    }

    getInklevel() {
        return `Poziom tuszu ${this.inkLevel} %`;
    }
}

const printer = new Printer(100);
printer.switch();
printer.print(10);
console.log(printer.getInklevel());
*/
// cwiczenie 3

class Reader {
    constructor(id, name, lastname) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
    }
}

class Book {
    constructor(title, dateofpublic, author) {
        this.title = title;
        this.dateofpublic = dateofpublic;
        this.author = author;
    }
}

class Library {
    books = [];
    //borrowed = [];
    borrowedBooks = [];
    users = [];
    constructor(books,users) {
        this.books = books;
        this.users = users;
    }

    /*borrow(bookId, readerId){
         if(this.books[bookId] && this.borrowed[bookId] == undefined){
             this.borrowed[bookId] = readerId;   
             return;         
         }
         console.error('Książka nie istnieje lub wypożyczona!');
     }
     oddana(bookId, readerId){
    if(this.books[bookId] && this.borrowed[bookId] !== undefined){
        
    }
 }*/
    borrow(userId, bookId) {
        const book = this.books.find(book => book.id === bookId);
        const user = this.users.find(user => user.id === userId);
        this.borrowedBooks.push({
            user,
            book
        });
        var pos = this.books.findIndex(book);
        this.books.splice(pos, 1);
    }

    returnedBook(userId, bookId) {
        if (this.books[bookId] !== null) {
            console.log('zwrócono')
        }
    }
}

/*
const b = new Book('df','1.1.1','dadas');
const b1 = new Book ('dfdsfzdf','2.1.1','dadfgfas');
const user = new Reader ('gashs', 'gsgdsy', 'jsusu');


const a = new Library ([b,b1], [user]);
a.borrow(0,1)
*/

