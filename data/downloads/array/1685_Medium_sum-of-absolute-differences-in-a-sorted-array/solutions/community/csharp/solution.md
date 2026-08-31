# c# : Easy Solution

**Author:** rahul89798
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/3344166/](https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/3344166/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
public class Solution {
    public int[] GetSumAbsoluteDifferences(int[] nums) {
        int rightsum = 0, leftSum = 0;

        for(int i = 0; i < nums.Length; i++)
            leftSum += nums[i];

        for(int i = nums.Length - 1; i >= 0; i--) {
            leftSum -= nums[i];
            var right = rightsum - ((nums.Length - i - 1) * nums[i]);
            var left = (i * nums[i]) - leftSum;
            
            rightsum += nums[i];
            nums[i] = left +right;
        }

        return nums;
    }
}
```