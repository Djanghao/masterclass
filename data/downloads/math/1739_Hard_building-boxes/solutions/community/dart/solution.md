# Solution Building Boxes

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/building-boxes/solutions/5565689/](https://leetcode.com/problems/building-boxes/solutions/5565689/)

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
  int minimumBoxes(int n) {
    int sum = 1;
    int base = 1;
    int row = 1;
    
    while (sum < n) {
      base += (++row);
      sum += base;
    }
    
    while (sum > n) {
      --base;
      sum -= (row--);
    }
    
    return base + (sum < n ? 1 : 0);
  }
}

```