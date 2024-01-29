/**
 * 다음은 자연수의 제곱근을 구하는 코드이다. 제곱근이 자연수가 아닐 때, 완전 제곱이 아니라면 -1을 반환해야 한다. 
 * 완전 제곱근인지 아닌지 확인하기 위해 다음과 같은 유추 방식을 이용한다. 
 * n이 100이라면 먼저 50을 의심해본다. 50이 너무 크다면 그보다 작은 숫자로 시도해본다.
 * 이와 같은 방식으로 1부터 50 사이의 숫자를 절반씩 시도해본다. 
 * 이 코드의 수행시간을 구하시오
 */

// sqrt 제곱근
int sqrt(int n) {
  return sqrt_helper(n, 1, n);
}

int sqrt_helper(int n, int min, int max) {
  if (max < min) return -1; // no square root

  int guess = (min + max) / 2;
  if (guess * guess == n) { // found it!
    return guess;
  } else if (guess * guess < n) { // too low
    return sqrt_helper(n, guess + 1, max); // try higher
  } else { // too high
    return sqrt_helper(n, min, guess - 1); // try lower
  }
}
