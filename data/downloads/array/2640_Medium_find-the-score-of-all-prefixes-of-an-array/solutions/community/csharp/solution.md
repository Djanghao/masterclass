# c# : Easy Solution

**Author:** rahul89798
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/4639443/](https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/4639443/)

---

# Complexity
- Time complexity:
o(n)

- Space complexity:
O(1)

# Code
```
public class Solution {
    public long[] FindPrefixScore(int[] nums) {
        var max = nums[0];
        var prefixScore = new long[nums.Length];
        prefixScore[0] += nums[0] * 2;
        for(int i = 1; i < nums.Length; i++) {
            max = Math.Max(max, nums[i]);
            prefixScore[i] = prefixScore[i - 1] + max + nums[i];
        }

        return prefixScore;
    }
}
```