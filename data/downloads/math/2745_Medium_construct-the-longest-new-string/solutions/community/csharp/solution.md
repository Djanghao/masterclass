# C# one liner

**Author:** Hmwangj
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-longest-new-string/solutions/3775643/](https://leetcode.com/problems/construct-the-longest-new-string/solutions/3775643/)

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
public class Solution {
    public int LongestString(int x, int y, int z) => z * 2 + (Math.Min(x, y) * 2 + (x == y ? 0 : 1)) * 2;
}
```