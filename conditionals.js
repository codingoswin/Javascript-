function FizzBuzz(number) {
    if(number % 3 === 0) {
        return 'Fizz'
    }
    else if(number % 5 === 0) {
        return 'Buzz'
    }
    else if(number % 15 === 0) {
        return 'FizzBuzz'
    }
    else{
        return number
    }
}

console.log(FizzBuzz(20))