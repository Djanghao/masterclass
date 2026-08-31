# [JS/TS] Beats > 90% | Super Simple Fixed Array length approach

**Author:** spicedNoodle
**Votes:** 10
**Link:** [https://leetcode.com/problems/concatenation-of-array/solutions/3241810/](https://leetcode.com/problems/concatenation-of-array/solutions/3241810/)

---

Runtime - Beats
76 ms - 92.39%

Memory - Beats
45.5 MB - 97.76%

Here we use an Array of a fixed length and insert the number of the nums array to the ans array.
By inserting the number in both destinations at once we're more efficient than e.g. spreading the array twice. 

The creation of the fixed length array also reduces a lot internal copying compared to a ".push()" solution. 

# Code
```
function getConcatenation(nums: number[]): number[] {
    const len = nums.length;
    const ans = new Array(2 * len);
  
    for (let i = 0; i < len; i++) {
        ans[i] = nums[i];
        ans[i + len] = nums[i];
    }
  
    return ans;
};
```