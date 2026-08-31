# ✅🔥Clean and Easy Dart 100% beats solution!!! 🤯🤯 Mask approach!!!🔥✅

**Author:** LTDigor
**Votes:** 1
**Link:** [https://leetcode.com/problems/optimal-partition-of-string/solutions/3379466/](https://leetcode.com/problems/optimal-partition-of-string/solutions/3379466/)

---

# Intuition
We can have only 26 letters by condition, you can use a mask to store them, representing the bits as the element number


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int partitionString(String s) {
      var mask = 0;
      var res = 1;
      for (int i = 0; i < s.length; i++) {
          var bit = 1 << (s[i].codeUnits.first - 'a'.codeUnits.first);
          if (mask & bit > 0) {
              res++;
              mask = 0;
          }
          mask |= bit;
      }

      return res;
  }
}
```