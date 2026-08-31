# C# O(1) Time O(1) Space

**Author:** ngiakhanh96
**Votes:** 2
**Link:** [https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/3770176/](https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/3770176/)

---

# Complexity
- Time complexity: O(1)

- Space complexity: O(1)

# Code
```
public class Solution {
    public int TwoEggDrop(int n) {
        return (int)Math.Ceiling(Math.Sqrt(2 * n + 0.25) - 0.5);
    }
}
```