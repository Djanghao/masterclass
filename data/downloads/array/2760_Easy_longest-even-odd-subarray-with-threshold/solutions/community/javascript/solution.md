# Longest Subarray - JavaScript - O ( n )

**Author:** zemamba
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/4243227/](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/4243227/)

---

```
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
    counter = -1
    index = -1

    for (let i = 0; i < nums.length; i++) {
        if (index == -1 && nums[i] % 2 == 0) index = i
        if (nums[i] > threshold) index = -1
        if (index >= 0) counter = Math.max(i - index, counter)
        if (i < nums.length - 1 && nums[i] % 2 == nums[i + 1] % 2) index = -1
    }

    return counter + 1
};
```