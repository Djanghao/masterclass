# Number of Changing Keys

**Author:** sharmaabhi4433
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-changing-keys/solutions/4928183/](https://leetcode.com/problems/number-of-changing-keys/solutions/4928183/)

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
    fun countKeyChanges(s: String): Int {
        var count = 0
        for (char in 0 until s.length - 1) {
            if (s[char].uppercaseChar() != s[char + 1].uppercaseChar() || s[char].lowercaseChar() != s[char + 1].lowercaseChar()) {
                count++
            }
        }
        return count
    }
}
```