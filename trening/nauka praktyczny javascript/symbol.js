/*
const PROP_NAME = Symbol('Car Name');
const car = {
    [PROP_NAME]: 'Volvo'
};
console.log(car[PROP_NAME]);



const PlayerState = Object.freeze({
WALK: Symbol('WALK'),
RUN: Symbol('RUN'),
IDLE: Symbol('IDLE')
});

const player = {
    state: PlayerState.RUN
}

if(player.state === PlayerState.RUN){
console.log('Player is running');
}

const PlayerState = Object.freeze({
    WALK: Symbol('WALK'),
    RUN: Symbol('RUN'),
    IDLE: Symbol('IDLE')
 });

 console.log('${String(Player.State.WALK)');
 console.log(`${PlayerState.WALK}`);
 

 const a = Symbol.for('wow');
 const b = Symbol.for('wow');
 console.log(a === b);


class Example {
    get [Symbol.toStringTag](){
        return 'Example';
    }
}
console.log((new Example()).toString());
*/

const SpeedVehicle = Object.freeze({
    SAMOCHOD: 60,
    ROWER: 20,
    PIESZO: 5

});

function time(distance, communicationType) {
    var t = distance / communicationType;
    return t;
}

