/**
 * 자연수의 제곱근을 구하는 함수
 * @param {number} n - 제곱근을 구할 자연수
 * @returns {number} n의 제곱근 또는 완전 제곱이 아니면 -1
 */
function sqrt(n) {
  return sqrtHelper(n, 1, n);
}

/**
 * 이진 탐색을 이용한 제곱근 찾기 보조 함수
 * @param {number} n - 제곱근을 구할 자연수
 * @param {number} min - 탐색 범위의 최소값
 * @param {number} max - 탐색 범위의 최대값
 * @returns {number} n의 제곱근 또는 완전 제곱이 아니면 -1
 */
function sqrtHelper(n, min, max) {
  if (max < min) return -1; // 완전 제곱이 아님

  let guess = Math.floor((min + max) / 2);
  if (guess * guess === n) {
    return guess; // 제곱근 찾음
  } else if (guess * guess < n) {
    return sqrtHelper(n, guess + 1, max); // 더 큰 범위에서 탐색
  } else {
    return sqrtHelper(n, min, guess - 1); // 더 작은 범위에서 탐색
  }
}

console.log(sqrt(100)); // 10
console.log(sqrt(30)); // -1

/**
 * 100, 1, 100
 * guess = 50
 * guess * guess = 2500
 * 
 * 100, 1, 49
 * guess = 25
 * guess * guess = 625
 * 
 * 100, 1, 24
 * guess = 12
 * guess * guess = 144
 * 
 * 100, 1, 11
 * guess = 6
 * guess * guess = 36
 * 
 * 100, 1, 5
 * guess = 3
 * guess * guess = 9
 * 
 * 100, 4, 5
 * guess = 4
 * guess * guess = 16
 * 
 * 
 * 100, 4, 3
 * guess = 3
 * guess * guess = 9
 * 
 */
