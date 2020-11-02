/*function wait() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000);
    });
}

async function callWait() {
    try {
        await wait();
        console.log('po wykonaniu');
    } catch (err) {
        console.log('wystąpił błąd');
    }
}

callWait();


function wait (){
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(123), 1000);
    });
}

async function callWait() {
    try {
        const data = await wait();
        console.log(data);
    } catch (err){
        console.log('bład');
    }
}
callWait();



function wait(){
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            console.log('wywolano');
            resolve();
        }, 1000)
    });
}

async function callWait(){
    try{
        await wait();
        await wait ();
        await wait();
    } catch(err){
        console.log('blad');
    }
}

callWait();
*/

//cwiczenia 1 

// first = {
//     text = "jeden",
//     delay = 1000
// };

// second = {
//     text = "dwa",
//     delay = 2000
// };

// third = {
//     text = "trzy",
//     delay = 2000
// };

// var dane = [first, second, third];

// function wait() {
//     return new Promise(function(resolve, reject) {
//       setTimeout(resolve, dane.delay);                            
//     });
//   }

 
//   async function callWait() {
//     try {
//       const data = await wait();
//       console.log(data);
//     } catch (err) {
//       console.log('Wystąpił błąd');
//     }
//   }
  
//   callWait();

var obj1 = {text: 'dupa1', delay: 1}
var obj2 = {text: 'dupa2', delay: 2}
var obj3 = {text: 'dupa3', delay: 3}

function wait(text, delay) {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
          console.log(text);
          resolve();    
      }, 1000 * delay);                            
    });
  }

  async function callWait(tab) {
    try {
        for (const value of tab){
             await wait(value.text, value.delay);
        }
    } catch (err) {
      console.log('Wystąpił błąd');
    }
  }

  callWait([obj1, obj2, obj3]);