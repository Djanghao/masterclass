# the best solution in dart

**Author:** ahmed___
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/3844733/](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/3844733/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O((right-left)*sqrt(right))
- Space complexity:
O(1)
# Code
```
import 'dart:collection';
import 'dart:math';
class Solution {
  bool isPrime(int n) {
  if (n <= 1) return false; // 0 and 1 are not prime
  
  // Check divisibility only up to sqrt(n)
  for (int i = 2; i <= sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

int countSetBits(int num) {
  int count = 0;
  while (num != 0) {
    count += num & 1; // Check if least significant bit is set
    num >>= 1; // Right shift by 1 bit
  }
  return count;
}

int countPrimeSetBits(int left, int right) {
  int count = 0;
  Set<int> primes = HashSet<int>();

  for (int i = 2; i <= 32; i++) {
    if (isPrime(i)) {
      primes.add(i);
    }
  }

  for (int num = left; num <= right; num++) {
    int setBits = countSetBits(num);
    if (primes.contains(setBits)) {
      count++;
    }
  }
  return count;
}
}
```