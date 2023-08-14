console.log('Lesson 29');

function doSomething(value) {
    let convertedValue = value;
    let divider = 1;

    if (typeof value !== 'number' && typeof value !== 'object' && isNaN(value)){
        // console.error('Please, press number value');
        // return;
        throw new Error('Please, press number value');
    }
    if (value === 0){
        console.warn('Please, press not 0 value');
        return;
    }

    try{
        if (value.param.data){
            convertedValue = value.param.data;
        }
    } catch (err) {
        console.log(err);
    }

    convertedValue = convertedValue * 25874;
    console.log(convertedValue);
    convertedValue = convertedValue / 2812;
    console.log(convertedValue);
    convertedValue = convertedValue + 0.95248;
    console.log(convertedValue);
    convertedValue = convertedValue - 81754;
    console.log(convertedValue);
    // console.log(Math);
    convertedValue = Math.ceil(convertedValue);
    console.log(convertedValue);
    convertedValue = convertedValue / divider;
    console.log(convertedValue);

    return convertedValue;
}
let myValue = doSomething(5);
// let myValue2 = doSomething('abc');
let myValue3 = doSomething(0);
let myValue4 = doSomething({
    param: {
        data: 155
    }
});

console.log(myValue);
console.log(myValue3);
console.log(myValue4);


if (true) {
    x = 9999;
}
