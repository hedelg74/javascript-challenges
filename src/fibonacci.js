const fibonacci = (n) => {
  // your code here
  let fibonacci  = [0, 1];
    if (n <= 1) {
      return n
    }else {
      for (let i = 2; i<= n; i++) {
        fibonacci[i] = fibonacci[i -1] + fibonacci[i - 2];
      }
      return fibonacci;
    }
}

module.exports = fibonacci;