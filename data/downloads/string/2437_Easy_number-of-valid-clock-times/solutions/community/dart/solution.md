# 100% dart

**Author:** 4khil_Raj
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-valid-clock-times/solutions/4503640/](https://leetcode.com/problems/number-of-valid-clock-times/solutions/4503640/)

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
  int countTime(String time) {
    if (time.contains('??:??')) {
      return 24 * 60;
    }
    int res = 1;
    if (time[0] == '?' && time[1] == '?') {
      res *= 24;
    } else if (time[0] == '?') {
      res *= (int.parse(time[1]) >= 4 ? 2 : 3);
    } else if (time[1] == '?') {
      res *= (int.parse(time[0]) >= 2 ? 4 : 10);
    }
    if (time[4] == '?') {
      res *= 10;
    }
    if (time[3] == '?') {
      res *= 6;
    }
    return res;
  }
}



```