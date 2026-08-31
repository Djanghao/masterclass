# Fast and Intuitive Dart Solution

**Author:** exoad
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-two-integers/solutions/5994880/](https://leetcode.com/problems/sum-of-two-integers/solutions/5994880/)

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
```dart []
class Solution {
  int getSum(int a, int b) {
    return b==0?a:getSum(a^b,(a&b)<<1);
  }
}
```