//do something

function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 == 0) {
    //parenthése ajouté
    return 'FizzBuzz';
  }
  if (number%3=== 0) {
    return 'Fizz'
  }
  if (number % 5 === 0) {
    return 'Buzz'
  }
  return  number
}

for (let i = 1; i <= 100; i++) {
      console.log(fizzBuzz(i))
}
