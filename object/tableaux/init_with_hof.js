function initWith(action) {
  return (min, max = 0) => {
    const response = [];
    for (let index = 0; index < min; index++) {
      if (max > 0) response.push(action(max+index));
      else response.push(action(min))
    }
    return response;
  }
}

const withZero = () => 0;
const fromZero = index => index;
const initWithZeros = initWith(withZero);
console.log(initWithZeros(3)); // [0, 0, 0]

const initFrom = initWith(fromZero);
console.log(initFrom(3, 42)); // [42, 43, 44]