# 87.5% beats dart

**Author:** iftixorrustamovv
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-primes/solutions/5394465/](https://leetcode.com/problems/count-primes/solutions/5394465/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int countPrimes(int n) {
    if (n <= 2) {
      return 0;
    }

    List<bool> isPrime = List<bool>.filled(n, true);
    isPrime[0] = isPrime[1] = false; 

    for (int p = 2; p * p < n; p++) {
      if (isPrime[p]) {
        for (int i = p * p; i < n; i += p) {
          isPrime[i] = false;
        }
      }
    }

    int count = 0;
    for (int i = 2; i < n; i++) {
      if (isPrime[i]) {
        count++;
      }
    }
    return count;
  }
}

```