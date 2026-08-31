# JS solution - two pointers + greedy

**Author:** CuteTN
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-pick-k-ones/solutions/4888238/](https://leetcode.com/problems/minimum-moves-to-pick-k-ones/solutions/4888238/)

---

Pro tip: \u7231\u5C0F\u8C22 \uD83D\uDC9C

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} maxChanges
 * @return {number}
 */
var minimumMoves = function (nums, k, maxChanges) {
  let n = nums.length;
  let res = 1e15;
  maxChanges = Math.min(maxChanges, k);

  for (let c = Math.max(0, maxChanges - 3); c <= maxChanges; ++c) {
    let u = k - c;
    if (u <= 0) {
      res = Math.min(res, 2 * c);
      continue;
    }
    let h = (u + 1) >> 1;

    let l = 0;
    while (l < n && !nums[l]) ++l;
    if (l == n) {
      continue;
    }

    let r = l;
    let m = l;
    let a = 0;

    for (let i = 1; i < u; ++i) {
      ++r;
      while (r < n && !nums[r]) ++r;
      if (r == n) {
        break;
      }
    }
    if (r == n) {
      continue;
    }

    for (let i = 1; i < h; ++i) {
      ++m;
      while (!nums[m]) ++m;
    }

    for (let i = l; i <= r; ++i) {
      if (nums[i]) {
        a += Math.abs(i - m);
      }
    }

    res = Math.min(res, a + 2 * c);

    while (true) {
      ++r;
      while (r < n && !nums[r]) ++r;
      if (r == n) {
        break;
      }

      if (u & 1) {
        a -= m - l;
      }
      ++m;
      while (m < n && !nums[m]) ++m;
      if (!(u & 1)) {
        a -= m - l;
      }
      a += r - m;

      ++l;
      while (l < n && !nums[l]) ++l;

      res = Math.min(res, a + 2 * c);
    }
  }

  return res;
};
```