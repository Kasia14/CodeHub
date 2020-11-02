let tab = [7, 8, 3, 4, 9, 2];
analyze(tab); // przykładowe dane żeby sprawdzić czy funkcja działa

function analyze(data) {
    console.log('Srednia to: ' + average(data) + '\nSuma to: ' + summary(data) + '\nLiczba próbek to: ' + count(data) + '\nMediana to: ' + median(data) + '\nWariancja to: ' + variance(data) + '\nOdchylenie to ' + standarddeviation(data));
}

function summary(data) {
    let sum = 0;
    for (i = 0; i < count(data); i++) {
        sum += data[i];
    }
    return sum;
}

function average(data) {
    let d = summary(data);
    return d / count(data);
}

function count(data) {
    return data.length;
}

function variance(data) {
    let varian = 0;
    let avg = average(data);
    for (i = 0; i < count(data); i++) {
        varian += Math.pow(data[i] - avg, 2);
    }
    varian = varian / count(data);
    return varian;
}

function standarddeviation(data) {
    let standard = 0;
    let avg = average(data);
    for (i = 0; i < count(data); i++) {
        standard += Math.sqrt(Math.pow(data[i] - avg, 2)) ;
    }
    standard = standard / count(data);
    return standard;
}

function median(data) {
    data = data.sort();
    var half = Math.floor(count(data)/ 2);
    if (count(data) % 2 == 0) {
        
        return (data[half] + ((data[half]) - 1)) / 2;
    }

    return data[half];
}
