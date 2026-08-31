# JS Solution - Binary search

**Author:** CuteTN
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-products-of-elements-of-big-array/solutions/5144666/](https://leetcode.com/problems/find-products-of-elements-of-big-array/solutions/5144666/)

---

Pro tip: Big heart for lil Xie \uD83D\uDC9C\uD83D\uDC9C\uD83D\uDC9C

# Complexity
- let `n = queries.length`, `m = max(queries[*][1])`
- Time complexity: $$O(nlogm)$$
- Space complexity: $$O(n + m)$$

# Code
```js
function quickPow(a, b, m) {
  if (b === 0) return 1;
  let t = quickPow(a, Math.floor(b / 2), m);
  t = (t * t) % m;
  if (b % 2) t = (t * a) % m;
  return t;
}

const pcL = Array(50).fill(0);
const pcR = Array(50).fill(0);
const temps = Array(50).fill(0);

/**
 * @param {number} maxCnt
 * @param {number[]} pows
 */
function cntPows(maxCnt, pows) {
  let resNum = 0;
  let resCnt = 0;

  let l = 0;
  let r = 1e15;

  while (l <= r) {
    temps.fill(0);
    let m = Math.floor((l + r) / 2);
    let p = 1;
    let c = 0;
    let t = m;

    for (let i = 0; t; i++, p *= 2) {
      let cb = 0;
      if (t % 2) {
        cb = (m % p) + 1;
      }

      t = Math.floor(t / 2);
      cb += t * p;

      c += cb;
      if (c > maxCnt) break;
      temps[i] = cb;
    }

    if (c > maxCnt) {
      r = m - 1;
    } else {
      l = m + 1;
      resNum = m;
      resCnt = c;
      for (let i = 0; i < 50; ++i) {
        pows[i] = temps[i];
      }
    }
  }

  ++resNum;
  for (let i = 0; resCnt < maxCnt; ++i) {
    if (resNum % 2) {
      ++pows[i];
      ++resCnt;
    }
    resNum = Math.floor(resNum / 2);
  }
}

/**
 * @param {number[][]} queries
 * @return {number[]}
 */
var findProductsOfElements = function (queries) {
  let n = queries.length;
  let res = new Uint32Array(n);

  for (let i = 0; i < n; ++i) {
    let [l, r, m] = queries[i];
    ++r;
    cntPows(l, pcL);
    cntPows(r, pcR);
    let cur = 1;
    let p = 1;

    for (let j = 0; j < 50; ++j, p = (p * 2) % m) {
      cur = (cur * quickPow(p, pcR[j] - pcL[j], m)) % m;
    }
    res[i] = cur;
  }

  return res;
};
```