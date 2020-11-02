/*function wait(){
  return new Promise(function(resolve, reject){
    setTimeout(resolve,1000);
  });
}

wait().then(() =>{
console.log('Po wykonaniu');
}).catch(() => {
  console.log('wystąpił bład');
});


function wait() {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000);
  });
}

wait().then(() => {
  console.log('po 1 s');
  return wait();
}).then(() => {
  console.log('Po 2 s');
  return wait();
}).then(() => {
  console.log('Po 3 s');
}).catch(() => {
  console.log('Wystąpił błąd');
});

function wait(time) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log(`After ${time}s`);
      resolve();   
    }, time * 1000);                            
  });
}

Promise.all([
  wait(1),
  wait(2),
  wait(3),
  wait(4),
]).then(() => {
  console.log('after all!');
});


function wait(time){
  return new Promise(function(resolve,reject){
    setTimeout(() =>{
      console.log(`After ${time}s`);
      resolve();
    }, time*1000);
  });
}

Promise.race([
  wait(1),
  wait(2),
  wait(3),
  wait(4),
]).then(() =>{
  console.log(`after first`);
});


new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);                            
}).then(() => {
  console.log('Po wykonaniu');
}).catch(() => {
  console.log('Wystąpił błąd');
}).finally(() => {
  console.log('Koniec');
});


new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);                            
}).finally(() => {
  console.log('Koniec');
})

*/
//cwiczenie 1 Twoim zadaniem jest przygotować funkcję, która przyjmie tablicę imion zwycięzców konkursu. Kolejne imiona powinny być wypisywane z opóźnieniem 2 sekund. Po wypisaniu wszystkich osób powinna wyświetlić się informacja z podziękowaniami za udział w konkursie.
function getProm(v) {
  return new Promise(resolve => {
      console.log(v);
      resolve();
  })
}

function Wait() {
  return new Promise(r => setTimeout(r, 2000))
}

function createChain(tab) {   
  let chain = Promise.resolve();
  for (let i of tab) {
      chain = chain.then(Wait).then(()=>getProm(i))
       .then(Wait)

  }
  return chain.then(() =>getProm('graty'));
}
createChain(['Kasia', 'Karol', 'Pysio'],2000);