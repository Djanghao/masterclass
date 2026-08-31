# One traversal | Without Sliding window

**Author:** Vipul_Chaudhary
**Votes:** 1
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/3679153/](https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/3679153/)

---

# Code
```
function numberOfGoodSubarraySplits(nums: number[]): number {
  const mod = 1000000007;
  let ans = 1;
  let lastIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (lastIndex === -1) {
        lastIndex = i;
      } else {
        ans *= i - lastIndex;
        ans %= mod;
        lastIndex = i;
      }
    }
  }

  return lastIndex === -1 ? 0 : ans;
}

```