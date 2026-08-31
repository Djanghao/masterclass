# Faster than 98.32%, memory usage less than 100.00%. 2 lines of code.

**Author:** user7497Tv
**Votes:** 49
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/547953/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/547953/)

---

```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    return nums.map(num => sorted.indexOf(num));
};
```