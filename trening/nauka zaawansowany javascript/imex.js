/*export class Car{
    constructor(){

    }
}

export default class Car {}
*/

class Film {
    constructor(title, source){
        this.title = title;
        this.source = source;

    }

    add(){
        this.source = [];
        this.source.push();
    }
    remove(){
        this.source = [];
        this.source.splice(0,1);
    }
}

export class Source {
    constructor(name, url, code){
        this.name = name;
        this.url = url;
        this.code = code;
    }
}


const film1 = new Film();
const source1 = new Source();
