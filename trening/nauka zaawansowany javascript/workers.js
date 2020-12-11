const fibonacci = new Worker('sw.js');

fibonacci.postMessage({dane: 'wejsciowe'});

fibonacci.onmessage = (event) => {
// otrzymane dane z workera
console.log(event.data);
};