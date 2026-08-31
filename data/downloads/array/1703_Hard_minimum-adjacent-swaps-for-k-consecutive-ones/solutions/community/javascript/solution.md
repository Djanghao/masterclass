# Efficient JS solution - 3 pointers 💜 (Beat 100% both time and memory)

**Author:** CuteTN
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/4610759/](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/4610759/)

---

![image.png](./images/0.png)

Pro tip: LOVE JUSTINA XI\xC8 \uD83D\uDC9C

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minMoves = function (nums, k) {
  if (k == 1) return 0;
  let h = (k + 1) >> 1;
  let n = nums.length;

  let l = 0;
  let r = 0;
  let m = 0;

  let cnt = 0;
  for (; r < n; ++r) {
    if (nums[r]) {
      ++cnt;
      if (cnt == 1) l = r;
      if (cnt == h) m = r;
      if (cnt == k) break;
    }
  }

  let cur = h * (1 - h);
  if (!(k & 1)) cur -= h;
  for (let i = l; i <= r; ++i) {
    if (nums[i]) cur += Math.abs(i - m);
  }
  let res = cur;

  ++r;
  for (; r < n; ++r) {
    if (nums[r]) {
      if (k & 1) cur -= m - l;
      do ++m;
      while (!nums[m]);
      if (!(k & 1)) cur -= m - l;
      do ++l;
      while (!nums[l]);
      cur += r - m;

      res = Math.min(cur, res);
      if (!res) return 0;
    }
  }

  return res;
};
```