# JavaScript Top Down DP

**Author:** jyunhanlin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/5283825/](https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/5283825/)

---


# Code
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minSpaceWastedKResizing = function(nums, k) {
  const n = nums.length;
  const dp = new Array(n + 1).fill().map(() => new Array(k + 1).fill(-1));

  const helper = (curIndex, curK) => {
    if (curIndex === n) return 0;
    if (curK === -1) return Infinity;
    if (dp[curIndex][curK] !== -1) return dp[curIndex][curK];

    let result = Infinity;
    let curMax = nums[curIndex];
    let total = 0;
    for (let i = curIndex; i < n; i += 1) {
      curMax = Math.max(curMax, nums[i]);
      total += nums[i];
      const wasted = curMax * (i - curIndex + 1) - total;
      result = Math.min(result, helper(i + 1, curK - 1) + wasted);
    }

    dp[curIndex][curK] = result;
    return dp[curIndex][curK];
  };

  return helper(0, k);
};
```