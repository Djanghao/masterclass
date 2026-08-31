# Simple DP

**Author:** 3S_AKB
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4662322/](https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4662322/)

---



# Code
```
public class Solution {
    public long MinIncrementOperations(int[] nums, int k) {
        long[] a = new long[nums.Length];
        for (int i = nums.Length - 1; i >= 0; i--)
            a[i] = Math.Max(0, k - nums[i]) + (i > nums.Length - 4 ? 0 : Math.Min(a[i + 1], Math.Min(a[i + 2], a[i + 3])));

        return (new long[] {a[0], a[1], a[2]}).Min();
    }
}
```