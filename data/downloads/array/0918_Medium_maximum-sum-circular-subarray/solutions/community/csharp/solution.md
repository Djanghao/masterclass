# ✅Simple C# Solution || O(n) Time || O(1) Space✅

**Author:** shukhratutaboev
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/3066134/](https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/3066134/)

---

In the first for loop we find max sum if our max subarray is without circulation. In the second for loop we find min sum and we extract it from sum of whole array, it means our max subarray with circulation. We compare these two maxes and return bigger.

Note: If all elements of array are negative, we return first max which without circulation.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MaxSubarraySumCircular(int[] nums) {
        var max = int.MinValue;
        var sum = 0;
        var numsSum = 0;
        for (int i = 0; i < nums.Length; i++)
        {
            numsSum += nums[i];
            sum += nums[i];
            if (sum > max) max = sum;
            if (sum < 0) sum = 0;
        }
        var min = int.MaxValue;
        sum = 0;
        for (int i = 0; i < nums.Length; i++)
        {
            sum += nums[i];
            if (sum < min) min = sum;
            if (sum > 0) sum = 0;
        }

        if (numsSum == min) return max;

        return max > numsSum - min ? max : numsSum - min;
    }
}
```

If you found my solution helpful, please consider upvoting it to let others know!