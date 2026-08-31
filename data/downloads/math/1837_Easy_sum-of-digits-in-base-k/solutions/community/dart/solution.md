# recursion

**Author:** sayedadinan
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/4654081/](https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/4654081/)

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
  int sumBase(int n, int k) {
      int sum=0;
   recursiveSum(int num) {
      if (num > 0) {
        int digit = num % k;
        sum += digit;
        recursiveSum(num ~/ k);
      }
    }
    recursiveSum(n);
    return sum;
  }
}
```