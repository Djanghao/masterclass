# c# simple solution (Beats 97.24%)

**Author:** abettertomorrow
**Votes:** 5
**Link:** [https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/2865024/](https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/2865024/)

---

```
public class Solution {
    public int DominantIndex(int[] nums) {
        int max = nums.Max();
        for (int i = 0; i < nums.Length; i++)
            if (nums[i] != max && nums[i] * 2 > max) return -1;
        return Array.IndexOf(nums, max);
    }
}
```