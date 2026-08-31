# easy solution

**Author:** iftixorrustamovv
**Votes:** 0
**Link:** [https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/5481723/](https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/5481723/)

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
    func isSameAfterReversals(_ num: Int) -> Bool {
        if num == 0 {
            return true
        }
        return num % 10 != 0
    }
}
```