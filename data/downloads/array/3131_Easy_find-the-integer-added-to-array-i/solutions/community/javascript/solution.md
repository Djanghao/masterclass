# Simple One Line Javascript Solution

**Author:** the_noob_coder_
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5305586/](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5305586/)

---


# Code
```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    return Math.max(...nums2)-Math.max(...nums1)
};
```