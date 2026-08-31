# Easiest Javascript solution - O(n)

**Author:** ritujadixit
**Votes:** 7
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/1632333/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/1632333/)

---

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    return nums.findIndex((n, i) => i % 10 === n)
};
```