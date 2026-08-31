# Javascript - Loop

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-operations/solutions/6060163/](https://leetcode.com/problems/minimum-total-operations/solutions/6060163/)

---

# Code
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let ans = 0;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] !== nums[i + 1]) ans++;
  }

  return ans;
};

```