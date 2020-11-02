/*class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullname() {
        return `${this.name} ${this.surname}`;
    }
}

const john = new Person('John', 'Dee');
console.log(john.fullname);


class Person {
    constructor(name, surname){
        this.name = name; 
        this.surname = surname;

    }
    get fullname(){
        return `${this.name} ${this.surname}`;

    }

    set fullname(value){
        const data = value.split(" ");
        this.name = data[0];
        this.surname= data[1];
    }
}

const john = new Person ('John', 'Dee');
john.fullname = "Annie Stark";
console.log(john.fullname);
*/
//cwiczenie 1

class Article {
    constructor(article) {
        this.article = article;
    }
    fullArticle() {
        var x = document.getElementsByTagName("p")[0];
        x.innerText = this.article;


    }
}


const article = new Article('Lorem ipsum dolor sit amet.');
console.log(article.fullArticle);



// cwiczenie 2 

class FormData {
    constructor(email) {
        this.email = email;
    }
    checkEmail() {
        var email = document.forms.form1.email.value;
        var re = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]+)*(\.[a-zA-Z]{2,4})$/i;
        if (email.match(re) == null)
            alert('Ten adres jest nieprawidłowy');
        else
            alert('Ten adres jest prawidłowy');
    }
}


const form2 = new FormData();
form2.email = 'john';