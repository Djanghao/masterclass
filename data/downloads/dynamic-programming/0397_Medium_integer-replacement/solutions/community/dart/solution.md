# Dart solution using bit manipulation

**Author:** nimbalkarshantanu09
**Votes:** 0
**Link:** [https://leetcode.com/problems/integer-replacement/solutions/4438865/](https://leetcode.com/problems/integer-replacement/solutions/4438865/)

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
  int integerReplacement(int n) {
    int count = 0;
    while (n != 1) {
      if ((n & 1) == 0) {
        n >>= 1;
      } else if (n != 3 && (n & 3) == 1) {
        n++;
      } else {
        n--;
      }
      count++;
    }
    return count;
  }
}
```