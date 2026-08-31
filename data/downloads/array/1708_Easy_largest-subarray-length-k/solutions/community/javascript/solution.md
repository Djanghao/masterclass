# Easy JS Solution

**Author:** hbjORbj
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-subarray-length-k/solutions/1163364/](https://leetcode.com/problems/largest-subarray-length-k/solutions/1163364/)

---

```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var largestSubarray = function(nums, k) {
    if (nums === null || nums.length === 0 
        || k <= 0 || k > nums.length) {
        return [];
    }
    let max = -Infinity;
    let idx = -1;
    let numOfPossibleSubarrs = nums.length - k + 1;
    // Let numOfPossibleSubarrs be y
    // The first y elements of the array represent the first number of
    // every possible subarray of length k
    // since all numbers are distinct, there will be the maximum value among these,
    // and the subarray starting with this maximum value is the result
    for (let i = 0; i < numOfPossibleSubarrs; i++) {
        if (nums[i] > max) {
            max = Math.max(max, nums[i]);
            idx = i;            
        }
    }
    return nums.slice(idx, idx + k);
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};
```