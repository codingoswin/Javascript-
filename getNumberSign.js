function getNumberSign(number) {
    if(number === 0){
        return 'zero';
    }
    else if(number > 0) {
        return 'positive';
    }
    else {
        return 'negative'
    }
}

console.log(getNumberSign(31))