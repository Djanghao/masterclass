# Javascript - Easy Solution single loop

**Author:** Vigneshkvm
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/4986468/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/4986468/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let output = 1,  inc = 1, dec = 1;
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i-1] > nums[i]) {
            dec++;
            inc = 1;
        } else if (nums[i-1] < nums[i]) {
            dec = 1;
            inc++;
        } else {
            inc = 1;
            dec = 1;
        }
        output = Math.max(output, inc, dec);
    }
    return output;
};
```