# C# Linq

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/4459354/](https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/4459354/)

---

# Intuition
The array will be qualified only when it doesn't have duplicated elements and its max value is larger than its minimum value by its length minus 1.

# Complexity
- Time complexity:
$$O(n)$$


# Code
```
public class Solution {
    public bool IsConsecutive(int[] nums) => nums.Distinct().Count() == nums.Length && nums.Max() == nums.Min() + nums.Length - 1;
}
```