// 다음은 자연수 나눗셈을 수행하는 코드이다. 수행 시간을 구하시오.

function div(a, b) {
  let count = 0;
  let sum = b;
  while (sum <= a) {
    sum += b;
    count++;    
  }
  return count;
}

console.log('div(10, 3) === 3 =>', div(10, 3) === 3);
console.log('div(30, 3) === 10 =>', div(30, 3) === 10);



