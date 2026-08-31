# Clean JavaScript solution

**Author:** ValeriiVasin
**Votes:** 31
**Link:** [https://leetcode.com/problems/maximum-average-subarray-i/solutions/333651/](https://leetcode.com/problems/maximum-average-subarray-i/solutions/333651/)

---

```
var findMaxAverage = function(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  
  let max = sum;
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    max = Math.max(max, sum);
  }
  
  return max / k;
};
```