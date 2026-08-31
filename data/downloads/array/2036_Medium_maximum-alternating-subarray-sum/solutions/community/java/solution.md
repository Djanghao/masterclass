# Java 10 line (Kadane's)

**Author:** zach1225
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/5442472/](https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/5442472/)

---

# Intuition

Dynamic programming. 


# Approach

We only need to consider the subarays ending with nums[i] if we interate from 0 to n; One pass will cover all the subarrays. 
If dp[i-1] is the max sum ending at i-1, dp[i-1] +/- nums[i] will be the max sum ending at i. Also consider the subarray with only one element nums[i], we come up with the following.

dp[i] = Math.max(nums[i], dp[i-1] +/- nums[i])

Then we realize there is no need to keep track of dp[0]...dp[i-2]. Max result will be collected with comparisons through the loop.

To alternate the + and -, we use 2 varaiables to record the sum ending with - and + respectively and swap them every time.

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(1)$$ 

# Code
```
class Solution {
    
    public long maximumAlternatingSubarraySum(int[] nums) {
        long max = nums[0];
        long a = 0, b = nums[0], temp;
        for(int i = 1; i < nums.length; i++){
            temp = Math.max(nums[i], a + nums[i]);
            a = b - nums[i];
            b = temp;
            max = Math.max(max, Math.max(a,b));
        }
        return max;
    }
}
```