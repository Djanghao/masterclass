# simple solution

**Author:** sayanthmk99
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/5065325/](https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/5065325/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int countNumbersWithUniqueDigits(int n) {
 if (n == 0) return 1;
  if (n == 1) return 10;
  int k = 9;
  for (int i = 0; i < n - 1; i++) {
    k *= (9 - i);
  }
  return k + countNumbersWithUniqueDigits(n - 1);
  }
}
```