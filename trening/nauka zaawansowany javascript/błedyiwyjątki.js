//throw new Error('XYZ crashed');

/*try{
    throw new Error('XYZ crashed');
} catch (err) {
    console.log(err.message);
} finally {
    console.log('Po wykonaniu')
}

class CustomError extends Error {
    constructor(message){
        super(message);
        this.name = 'CustomError';
    }
}

throw new CustomError ('Message here');
*/
class CustomError extends Error {
    constructor(message){
        super(message);
        this.name = 'CustomError';
    }
}

try {
    throw new CustomError('Message here');
} catch (err){
    if (err.name === 'SyntaxError') console.log('Błąd składni');
    else if(err.name === 'InternalError') console.log('Bład wew');
    else if (err.name === 'CustomError') console.log('Wystąpił własny błąd');
    else console.log('Wystąpił nieznany błąd');
}
