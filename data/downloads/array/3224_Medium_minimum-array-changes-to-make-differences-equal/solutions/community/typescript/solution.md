# Clean pre computing solution

**Author:** HawtinZeng
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5520173/](https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5520173/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Inspired by the solution of '\u7075\u8336\u5C71\u827E\u5E9C', [link](https://www.bilibili.com/video/BV1JE4m1d7br/?spm_id_from=333.999.0.0&vd_source=cdf94c4901e8219da46c605f5cbd76d7)

# Approach
<!-- Describe your approach to solving the problem. -->


# Complexity
- Time complexity:
O(K)
- Space complexity:
O(K)

# Code
```
function minChanges(nums: number[], k: number): number {
/**
  1. From special case to normal case.
  2. Pre sum.
  3. It's hard :)

  X: 0 ~ k;

  freq[abs(p-q)]: p-q \u7EDD\u5BF9\u503C\u7684\u51FA\u73B0\u7684\u6B21\u6570
  X === 0:
    len - freq[0]

  X === 1:
    len - freq[X] + freq2(X > Max(max, k - min))

  min, max
  0, k

  one change:
  0 ~ Max(max, k - min);

  two change:
  Max(max, k - min) + 1 ~ k;
    

  pre-computation
*/
  const len = nums.length;
  let ans = Infinity;
  const freq = new Array(k+1).fill(0);
  const freq2 = new Array(k+1).fill(0);

  for (let i = 0; i < nums.length / 2; i++) {
    const d = Math.abs(nums[i] - nums[len - i - 1]);
    freq[d]++;

    const min = Math.min(nums[i], nums[len - i - 1])
    const max = Math.max(nums[i], nums[len - i - 1])
    freq2[Math.max(max, k - min)]++;
  }

  const half = len / 2;
  let pre = 0;

  for (let i = 0; i <= k; i++) { // Max(max, k - min)
    const twoChange = i-1 >= 0 ? (freq2[i-1] + pre) : 0;
    ans = Math.min(ans, half - freq[i] + twoChange);
    pre = twoChange
  }

  return ans;
};
```