# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/3902557/](https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/3902557/)

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
  int numSub(String s) {
    var cur = 0;
    var ans = 0;
    for (var i in s.split('')) {
        if (i == '1') {
            cur += 1;
            ans += cur;
        } else {
            cur = 0;
        }
    }
    return ans % (pow(10, 9).toInt() + 7);
  }
}
```