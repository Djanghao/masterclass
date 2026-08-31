# DP solution with constant space

**Author:** amolgupta1989
**Votes:** 1
**Link:** [https://leetcode.com/problems/wiggle-subsequence/solutions/4519818/](https://leetcode.com/problems/wiggle-subsequence/solutions/4519818/)

---

# Intuition
At each step, either the sequence count for `up` increases, or `down` increases, or we skip. In the end the max of `up` and `down` is the result. 

# Code
```
class Solution {
     fun wiggleMaxLength(nums: IntArray): Int {
        var up = 1
        var down = 1
        for (i in 1 until nums.size) {
            if (nums[i] > nums[i - 1]) up = down + 1
            else if (nums[i] < nums[i - 1]) down = up + 1
            else continue
        }
        return maxOf(up, down)
    }
}
```