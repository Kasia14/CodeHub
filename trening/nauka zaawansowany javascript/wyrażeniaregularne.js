/*const digits = new RegExp("d*");
//lub
const digits = /d*/;

//const isEmail = /(w|.)+@(w|.)+(.(w)+)+/;
//console.log(isEmail.test('test@test.com'));

const containsCat = /(cat)w*/;
console.log('cateripillar dog cat snoop dogg'.match(containsCat))
console.log('cateripillar dog cat snoop dogg'.search(/(snoop)/));

const containsCat1 = /(cat)w*/g;
console.log('cateripillar dog cat snoop dogg'.replace(containsCat, 'tiger'));
console.log('cateripillar dog cat snoop dogg'.split(/(cat)/))


const number = /(+48) dd-ddd-ddd/;
console.log(number.test('+48 123-456-789'));