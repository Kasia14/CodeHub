class Calendar {
    date = new Date();
    monthDays = document.querySelector('.days');
    months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",

    ];
    days = "";
    notes = null;
    constructor(notes) {
        this.getPrevNextClick();
        this.hideOrShow();
        this.notes = notes;
    }

    init() {
        let currentMonth = this.date.getMonth();
        this.lastDay = new Date(this.date.getFullYear(), currentMonth + 1, 0).getDate();
        this.firstDayIndex = this.date.getDay();
        this.lastDayIndex = new Date(this.date.getFullYear(), currentMonth + 1, 0
        ).getDay();

        this.prevLastDay = new Date(this.date.getFullYear(), currentMonth + 1, 0).getDate();
        this.nextDays = 7 - (this.lastDayIndex === 0 ? 7 : this.lastDayIndex) - 1;
        this.lastDayOfTheYear = new Date(this.date.getFullYear(), 11, 31);
    }

    getToday() {
        this.days = "";
        document.querySelector('.date h1').innerHTML = this.months[this.date.getMonth()];
        document.querySelector('.date p').innerHTML = new Date().toDateString();
    }

    getPrevLastDays() {
        for (let x = this.firstDayIndex; x > 0; x--) {
            this.days += `<div class="prev-date">${this.prevLastDay - x + 1}</div>`
        }

    }

    getDaysAndToday() {
        for (let i = 1; i <= this.lastDay; i++) {
            if (i === new Date().getDate() && this.date.getMonth() === new Date().getMonth()) {
                this.days += `<div class="today">${i}</div>`;
            } else {
                this.days += `<div>${i}</div>`;
            }
        }
    }

    getNextDays() {
        if (this.lastDayIndex !== 1) {
            for (let j = 1; j <= this.nextDays + 6; j++) {
                this.days += `<div class="next-date">${j}</div>`;
            }
        }
    }

    getWriteNotes() {
        for (let k = 1; k <= this.note; k++) {
            this.note = document.querySelector('.note h3');
            this.note.innerHTML = `<input type="text">${k}</input>`;
        }
    }

    hideOrShow() {
        var object = document.querySelector('#hide');
        object.addEventListener('click', () => {
            var object = document.querySelector('.note')
            if (object.style.display != 'none') {
                object.style.display = 'none';
            } else {
                object.style.display = 'block';
            }

        })
    }

    getPrevNextClick() {
        document.querySelector('.prev').addEventListener('click', () => {
            let currentMonth = this.date.getMonth();
            this.date.setMonth(currentMonth - 1);
            this.render();
        })
        document.querySelector('.next').addEventListener('click', () => {
            let currentMonth = this.date.getMonth();
            this.date.setMonth(currentMonth + 1);
            this.render();
        })
    }

    fillNotes() {
        var noteForDay = this.notes.getNote(this.date);
        if(noteForDay){
            var inputs = document.getElementsByClassName('noteInput');
            for(var i = 9; i < noteForDay.notes.length || i < 19; i++) {
                if(noteForDay.notes[i]){
                    inputs[i-9].value = noteForDay.notes[i];
                }
            }
           
        }
    }

    render() {
        this.init();
        this.getToday();
        this.getPrevLastDays();
        this.getDaysAndToday();
        this.getNextDays();
        this.fillNotes();

        this.monthDays.innerHTML = this.days;
    }

}

class Note {
    notes = [];

    constructor(date) {
        this.notes = [];
        this.date = date;
    }

    putNote(hour, note) {
        this.notes[hour] = note;
    }

    getNote(hour) {
        return this.notes[hour];
    }
}

class AllNotes{
    notes = [];

    constructor() {
        if ("notki" in localStorage) { // w ten sposób możesz sprawdzić czy właściwość wewnątrz obiektu istnieje
            this.notes = JSON.parse(localStorage.getItem('notki')); 
        } else {
            // dane nie istnieją
        }
    }

    addNote(note) {
        this.notes.push(note);
        this.save();
        this.notes = JSON.parse(localStorage.getItem('notki'));
    }

    getNote(date){     
        const found = this.notes.find(x => this.search(x.date, date));
        return found;
    }

    search(itemDate, searchDate){
        var datetime = new Date(itemDate);
        return datetime.getFullYear() == searchDate.getFullYear() 
                && datetime.getMonth() == searchDate.getMonth() 
                && datetime.getDate() == searchDate.getDate()
    }

    save(){
        localStorage.setItem('notki', JSON.stringify(this.notes));
    }
}

//localStorage.setItem('kalendarzyk', JSON.stringify(kalendarzyk));

/* let kalendarzyk = [];
if ("kalendarzyk in localStorage"){
    kalendarzyk = JSON.parse(localStorage.getItem('kalendarzy'));
} else{
    // dane nie istnieją
} */

const n = new Note(new Date(2020,10,2));
n.putNote(10, "Kasia");
n.putNote(12, "Pysio");

const n1 = new Note(new Date(2020,11,1));
n1.putNote(1, "BlaBla");

const notki = [n, n1];
localStorage.setItem('notki', JSON.stringify(notki));


const kalendarzyk = new Calendar(new AllNotes());
kalendarzyk.render();