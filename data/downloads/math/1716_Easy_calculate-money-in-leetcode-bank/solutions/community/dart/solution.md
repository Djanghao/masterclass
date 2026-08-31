# Easy to Understand for Beginners !

**Author:** jasijasu959
**Votes:** 1
**Link:** [https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/5134984/](https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/5134984/)

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
  int totalMoney(int n) {
    int sum = 0;
    int i = 1;
    int m = 1;
    int x = 1;

    while (i <= n) {
      sum += m;
      if (i % 7 == 0) {
        x++;
        m = x;
      } else {
        m++;
      }
      i++;
    }
    return sum;
  }
}

```