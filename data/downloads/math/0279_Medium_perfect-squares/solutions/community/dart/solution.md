# Beats 100.00% of users with Dart

**Author:** aospiridonov
**Votes:** 0
**Link:** [https://leetcode.com/problems/perfect-squares/solutions/4699442/](https://leetcode.com/problems/perfect-squares/solutions/4699442/)

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
import 'dart:math';

class Solution {
  int numSquares(int n) {
    if (isSquare(n)) return 1;
    while (n & 3 == 0) n >>= 2;
    if (n & 7 == 7) return 4;
    int sqrtN = sqrt(n).toInt();
    for (int i = 1; i <= sqrtN; i++) {
      if (isSquare(n - i * i)) return 2;
    }
    return 3;
  }

  bool isSquare(int n) {
    int sqrtN = sqrt(n).toInt();
    return sqrtN * sqrtN == n;
  }
}
```