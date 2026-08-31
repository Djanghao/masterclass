# JavaScript solution

**Author:** shengdade
**Votes:** 54
**Link:** [https://leetcode.com/problems/third-maximum-number/solutions/494431/](https://leetcode.com/problems/third-maximum-number/solutions/494431/)

---

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
    if (nums[i] > first) {
      [first, second, third] = [nums[i], first, second];
    } else if (nums[i] > second) {
      [second, third] = [nums[i], second];
    } else if (nums[i] > third) {
      third = nums[i];
    }
  }
  return third === -Infinity ? first : third;
};
```