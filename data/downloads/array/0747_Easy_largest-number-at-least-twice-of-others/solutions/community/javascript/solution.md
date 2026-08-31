# JavaScript one-pass tracking first and second

**Author:** shengdade
**Votes:** 17
**Link:** [https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/506770/](https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/506770/)

---

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let first = -Infinity;
  let second = -Infinity;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
      ans = i;
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }
  return first >= second * 2 ? ans : -1;
};
```

* 250/250 cases passed (48 ms)
* Your runtime beats 97.95 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (33.8 MB)