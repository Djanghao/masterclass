# JS Solution - Line Sweep

**Author:** CuteTN
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-ii/solutions/4602562/](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-ii/solutions/4602562/)

---

Pro tip: Love Justina Xi\xE8 \uD83D\uDC9C \u7231\u5C0F\u8C22 \uD83D\uDC9C

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```js
let acc = Array(100001).fill(0);

/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @return {number[]}
 */
var countOfPairs = function (n, x, y) {
  let res = new Uint32Array(n);

  // Just a line
  if (Math.abs(x - y) <= 1) {
    for (let i = 0; i < n; ++i) res[i] = (n - i - 1) * 2;
    return res;
  }

  acc.fill(0, 0, n + 1);
  if (x > y) {
    let t = x;
    x = y;
    y = t;
  }
  if (x - 1 > n - y) {
    let t = n - y + 1;
    y = n - x + 1;
    x = t;
  }

  // Both on the loop
  let c = y - x + 1;
  let h = (y - x) >> 1;
  acc[1] += 2 * c;
  acc[h + 1] -= 2 * c;

  if ((c & 1) == 0) {
    acc[c >> 1] += c
    acc[(c >> 1) + 1] -= c
  }

  // Both on the arms
  let la = x - 1;
  let ra = n - y;
  if (la) {
    acc[1] += (la - 1) << 1;
    for (let i = 2; i <= la; ++i) {
      acc[i] -= 2;
    }
  }
  if (ra) {
    acc[1] += (ra - 1) << 1;
    for (let i = 2; i <= ra; ++i) {
      acc[i] -= 2;
    }
  }
  for (let i = 1; i <= la; ++i) {
    acc[i + 2] += 2;
    acc[i + 2 + ra] -= 2;
  }

  // One on the loop and one on the arm
  for (let i = 1; i <= la; ++i) {
    acc[i] += 2;
    acc[i + h + 1] -= 2;
    acc[i + 1] += 2;
    acc[i + h + 1 + ((c & 1) ^ 1)] -= 2;
  }
  for (let i = 1; i <= ra; ++i) {
    acc[i] += 2;
    acc[i + h + 1] -= 2;
    acc[i + 1] += 2;
    acc[i + h + 1 + ((c & 1) ^ 1)] -= 2;
  }

  res[0] = acc[1];
  for (let i = 1; i < n; ++i) {
    res[i] = res[i - 1] + acc[i + 1];
  }
  return res;
};
```