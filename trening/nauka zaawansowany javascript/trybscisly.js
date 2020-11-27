/*"use strict"
const a =1;

function sum(a,b){
    "use strict";
    return a + b;
}
console.log(sum(2,4));

"use strict";
petName = "Alex"; // error */



class Add {
    tab = [];
    queue = document.querySelector('.queue');
    start = document.querySelector('.start');
    text = document.querySelector('.text');
    constructor() {
        var parent = this;
        this.queue.addEventListener('click', () => {
            parent.readCode();
        });
        this.start.addEventListener('click', () => {
            parent.timer();
        });

    }
    readCode(parent) {

        const text = document.querySelector('.text');
        const preContainer = document.createElement('pre');
        preContainer.setAttribute('class', 'yourText')
        preContainer.textContent = text.value;

        const container = document.querySelector('.container')
        container.appendChild(preContainer);
        this.tab.push(text.value);

    }
    addToTab() {
        //Wyciagnij element z tablicy wyswietl i usun go

        var usunienty = tab.shift();
        this.tab.forEach(usunienty);
        document.querySelector('.newTab').innerHTML = usunienty;
    }
    timer() {
        setInterval(this.addToTab, 1000);

    }

}
"use strict"
const add = new Add();


