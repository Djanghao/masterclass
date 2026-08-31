# Javascript - HashMap

**Author:** faustaleonardo
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-divisible-triplet-sums/solutions/4401638/](https://leetcode.com/problems/number-of-divisible-triplet-sums/solutions/4401638/)

---

# Code
```
/**
 * @param {number[]} nums
 * @param {number} d
 * @return {number}
 */
var divisibleTripletCount = function (nums, d) {
  let ans = 0;
  const map = {};
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const curr = (nums[i] + nums[j]) % d;
      const target = curr === 0 ? 0 : d - curr;
      if (target in map) ans += map[target];
    }

    const mod = nums[i] % d;
    map[mod] = (map[mod] || 0) + 1;
  }

  return ans;
};

```