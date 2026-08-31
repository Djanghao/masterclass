# Simple Greedy

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/6097308/](https://leetcode.com/problems/count-strictly-increasing-subarrays/solutions/6097308/)

---

Similar Problem : https://leetcode.com/problems/count-number-of-homogenous-substrings

----


```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
  let count = 1
  let currSubarray = 1

  for (let i = 1; i < nums.length; i++) {
    nums[i] > nums[i - 1] ? currSubarray += 1 : currSubarray = 1
    count += currSubarray
  }
  return count
};
```