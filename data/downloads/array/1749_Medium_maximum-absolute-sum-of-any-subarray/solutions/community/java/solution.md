# Solution using sliding window (Kadane's Algorithm) [Time: O(N), Space: O(1)]

**Author:** kodiswaran
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/1052459/](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/1052459/)

---

**Steps:**
- Find the max subarray
- Find the min subarray
- Return the max of absolute value between the max and min subarray value

**Time Complexity:** O(N) (for iterating the list once)
**Space Complexity:** O(1)

```
class Solution {
    public int maxAbsoluteSum(int[] nums) {
        int minSum = Integer.MAX_VALUE, maxSum = Integer.MIN_VALUE, currentMinSum = 0, currentMaxSum = 0;
        for(int num: nums) {
            currentMaxSum += num;
            maxSum = Math.max(maxSum, currentMaxSum);
            if (currentMaxSum < 0)
                currentMaxSum = 0;
            
            currentMinSum += num;
            minSum = Math.min(minSum, currentMinSum);
            if (currentMinSum > 0)
                currentMinSum = 0;
        }
        return Math.max(maxSum, -minSum);
    }
}

```