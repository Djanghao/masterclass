# dart simple solution easy to understand

**Author:** arshad_kk
**Votes:** 1
**Link:** [https://leetcode.com/problems/self-dividing-numbers/solutions/4487154/](https://leetcode.com/problems/self-dividing-numbers/solutions/4487154/)

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
  List<int> selfDividingNumbers(int left, int right) {
    List<int> res = [];
    for (int i = left; i <= right; i++) {
      if (isSelfDividing(i)) {
        res.add(i);
      }
    }
    return res;
  }
  bool isSelfDividing(int num) {
    String numStr = num.toString();
    for (int i = 0; i < numStr.length; i++) {
      int digit = int.parse(numStr[i]);
      if (digit == 0 || num % digit != 0) {
        return false;
      }
    }

    return true;
  }
}

```