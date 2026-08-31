# [JavaScript] - O(n) time and space

**Author:** qusinn
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-good-subarray-sum/solutions/4672317/](https://leetcode.com/problems/maximum-good-subarray-sum/solutions/4672317/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    const n = nums.length;
    let ans = -Infinity;

    const sums = [0];
    for (let i = 0; i < n; i++) {
        sums.push(sums[i] + nums[i]);
    }
        
    const map = new Map();
    for (let i = n - 1; i >= 0; i--) {
        if (map.has(nums[i] + k)) {
            ans = Math.max(ans, map.get(nums[i] + k) - sums[i]);
        }
        if (map.has(nums[i] - k)) {
            ans = Math.max(ans, map.get(nums[i] - k) - sums[i]);
        }
        const prev = isNaN(map.get(nums[i])) ? -Infinity : map.get(nums[i]);
        map.set(nums[i], Math.max(prev, sums[i + 1]));
    }
    
    return ans === -Infinity ? 0 : ans;
};
```