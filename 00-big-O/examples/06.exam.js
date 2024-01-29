function sqrt(n) {
  for (let guess = 0; guess * guess <= n; guess++) {
    if (guess * guess === n) {
      return guess;    
    }
  }
  return -1;
}