/*function* digits(){
    yield 1;
    yield 2;
    yield 3;
}

const gen = digits();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//lub

function* digits2(){
    let i = 1;
    while(i<= 3) yield i++;
}


const gen1 = digits2();
console.log(gen1.next().value); 
console.log(gen1.next().value); 
console.log(gen1.next().value);

function* vegs(){
    yield 'Carrot';
    yield 'Lettuce';
    yield 'Onion';
}

const vegetables = vegs();

for (const vegetable of vegetables){
    console.log(vegetable);
}


function* vegs(){
    yield 'Carrot';
    yield 'Lettuce';
    yield 'Onion';
}

const vegetables = vegs();

console.log([...vegetables]);
*/

//Cwiczenie 1





/*  function* fibo(n){
  if(n <=1){
      yield n;
  } else {
      yield fibo(n-2)+(n-1);
  }
  }

  const fib = fibo(); */

  function* fibo() {
    const result = [0, 1];
    for (let i = 2; true; i++) {
        const a = result[i - 1];
        const b = result[i - 2];
        result.push(a + b);
        yield a + b;
    }
}

const fib = fibo();

console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5
console.log(fib.next().value); // 8
console.log(fib.next().value); // 13