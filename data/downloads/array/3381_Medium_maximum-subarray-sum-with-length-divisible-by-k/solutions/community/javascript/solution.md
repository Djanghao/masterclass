# JavaScript Kadane + prefix sum

**Author:** YarkaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/solutions/6139525/](https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/solutions/6139525/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1. prepare data. iterate nums and form prefix sum array, start with 0
2. initiate dp array, prepopulate each value with -Infinity
3. maximise value for k-size window of prefix tree and store it in dp.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function(nums, k) {
    let prefix = [0];

    for(let i = 0; i < nums.length; i++){
        prefix[i + 1] = prefix[i] + nums[i];
    }

    let dp = new Array(nums.length + 1).fill(-Infinity)

    for(let i = k; i < prefix.length; i++){
        dp[i] = (prefix[i] - prefix[i-k]) + Math.max(0, dp[i-k]);
    }

    return Math.max(...dp);
};
```