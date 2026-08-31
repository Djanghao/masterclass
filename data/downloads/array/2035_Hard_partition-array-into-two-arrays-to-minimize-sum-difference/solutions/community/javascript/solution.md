# How to handle negative numbers using DP?

**Author:** lordmoma
**Votes:** 2
**Link:** [https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/2463375/](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/2463375/)

---

The solution below is quite intuitive but cannot handle negative numbers, please leave your comment if you know how.

```
const minimumSubsetSumDifference = function (nums) {
  let n = nums.length;
  let total = nums.reduce((sum, cur) => (sum += cur), 0);
  let sum = Math.floor(total / 2);
  let dp = Array(sum + 1).fill(false);
  dp[0] = true;
  for (let s = 1; s <= sum; s++) {
    dp[s] = nums[0] === s;
  }

  for (let i = 1; i < n; i++) {
    for (let s = sum; s >= 0; s--) {
      if (!dp[s] && s >= nums[i]) {
        dp[s] = dp[s - nums[i]];
      }
    }
  }

  let sum1 = 0;
  for (let i = sum; i >= 0; i--) {
    if (dp[i] === true) {
      sum1 = i;
      break;
    }
  }
  let sum2 = total - sum1;

  return Math.abs(sum2 - sum1);
};
```