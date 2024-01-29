// 다음은 a와 b를 곱하는 코드이다. 수행 시간을 구하시오.

/**
 * @param {number} a 
 * @param {number} b 
 * @returns {number} a의 b승을 계산한 결과
 */
const power = (a, b) => {
  if (b < 0) {
    return 0; 
  } else if (b === 0) {
    return 1;
  } else {
    return a * power(a, b - 1);
  }
}

console.log('power(2, 5) === 32 =>', power(2, 5) === 32);
