// 다음은 a와 b를 곱하는 코드이다. 수행 시간을 구하시오.

/**
 * @param {number} a 
 * @param {number} b 
 * @returns {number} a와 b의 곱
 */
const product = (a, b) => {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    sum += a;
  }

  return sum;
}

console.log('product(3, 9) === 27: ', product(3, 9) === 27);
