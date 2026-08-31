# JavaScript

**Author:** Blankzzz
**Votes:** 3
**Link:** [https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/solutions/2588194/](https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/solutions/2588194/)

---

```
var smallestSubarrays = function (nums) {
  const n = nums.length;

  const res = Array(n).fill(0);

  const last = Array(32).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    res[i] = 1;

    for (let j = 0; j < 32; j++) {
      if (nums[i] & (1 << j)) {
        last[j] = i;
      }
      res[i] = Math.max(res[i], last[j] - i + 1);
    }
  }

  return res;
}
```