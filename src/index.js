module.exports = function zeros(expression) {

    let numbers = [];

    for (let fac of expression.split("*")){

        if (fac.search(/(!!)/) === -1){
            for (let elem of getFactorial(fac, 1))
                numbers.push(elem);
        }
        else {
            for (let elem of getFactorial(fac, 2))
                numbers.push(elem);
        }
    }

    return getZeroCount(numbers);
};

function getFactorial(factorial, pow) {

    factorial = factorial.replace(/!+$/, '');
    let arr = [];

    for (let i = factorial; i > 0; i -= pow){
        arr.push(i);
    }

    return arr;
}

function getDigitCount(allFactorNum, digit){

    let count = 0;

    for(let elem of allFactorNum){

        if(digit!==10){
            while(true){
                if((elem%digit === 0)&&(elem%10!== 0)) {
                    count++;
                    elem = elem / digit;
                    continue;
                }
                if(elem == 50){
                    count++;
                    elem = elem / digit;
                }
                else break;
            }
        }
        else{
            while(elem%digit === 0){
                count++;
                elem = elem / digit;
            }
        }
    }

    return count;
}

function getZeroCount(allFactorNum){

    let two  = getDigitCount(allFactorNum, 2);
    let five = getDigitCount(allFactorNum, 5);
    let ten  = getDigitCount(allFactorNum, 10);

    return two < five ? two + ten : five + ten;
}
