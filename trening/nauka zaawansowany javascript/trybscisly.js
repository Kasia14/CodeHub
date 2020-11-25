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
    queue = document.querySelector('.queue');
    start = document.querySelector('.start');
    text = document.querySelector('.text');
    constructor() {
        this.queue.addEventListener('click', this.readCode());
        this.start.addEventListener('click', this.timer());

    }
    readCode() {

        const text = document.querySelector('.text');
        const preContainer = document.createElement('pre');
        preContainer.setAttribute('class', 'yourText')
        preContainer.textContent = this.text.value;
        const container = document.querySelector('.container')
        container.appendChild(preContainer);

    }

    addToTab() {
        let tab = [];
        let read = this.readCode();
        tab.push(read)
    }
    timer() {
        setInterval(this.addToTab(), 1000);

    }

}
"use strict"
const add = new Add();
add.readCode();
add.timer();

