# Efficient JS solution - Segment tree (Beat 100% both time and memory)

**Author:** CuteTN
**Votes:** 0
**Link:** [https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/4710383/](https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/4710383/)

---

![image.png](./images/0.png)

Pro tip: Love Xie. Why? Because love Xie. \uD83D\uDC9C
Lazy propagation is for noobs LOL. In this problem, the only range-update we need is for a prefix, so a number variable is enough to keep track of it.

# Complexity
- Time complexity: $$O(nlogn)$$
- Space complexity: $$O(nlogn)$$

# Code
```js
let oo = 1e9;
let EMPTY = [];
let RESULT = [0, 0];

let filledUp = -1;
let foundIndex = 0;
let foundNewVal = 0;
let m = 0;
let n = 0;
let maxs = new Uint32Array(200000);
let sums = Array(200000).fill(0);

function build(val, root, l, r) {
  maxs[root] = val;
  sums[root] = val * (r - l + 1);

  if (l != r) {
    let m = (l + r) >> 1;
    let c1 = root * 2 + 1;
    let c2 = root * 2 + 2;
    build(val, c1, l, m);
    build(val, c2, m + 1, r);
  }
}

function setAt(val, i, root, l, r) {
  if (i > r || i < l) return;

  if (l == r) {
    maxs[root] = val;
    sums[root] = val;
  } else {
    let m = (l + r) >> 1;
    let c1 = root * 2 + 1;
    let c2 = root * 2 + 2;
    if (i <= m) setAt(val, i, c1, l, m);
    else setAt(val, i, c2, m + 1, r);

    maxs[root] = Math.max(maxs[c1], maxs[c2]);
    sums[root] = sums[c1] + sums[c2];
  }
}

function fillUp(root, l, r) {
  if (l > filledUp) return;

  if (r <= filledUp) {
    maxs[root] = 0;
    sums[root] = 0;
    return;
  }

  let m = (l + r) >> 1;
  let c1 = root * 2 + 1;
  let c2 = root * 2 + 2;
  fillUp(c1, l, m);
  fillUp(c2, m + 1, r);

  maxs[root] = Math.max(maxs[c1], maxs[c2]);
  sums[root] = sums[c1] + sums[c2];
}

function findGather(val, maxR, root, l, r) {
  if (l > maxR) return;
  if (r <= filledUp) return;
  if (maxs[root] < val) return;

  if (l == r) {
    foundIndex = l;
    foundNewVal = sums[root] - val;
  } else {
    let m = (l + r) >> 1;
    findGather(val, maxR, root * 2 + 1, l, m);
    if (foundIndex == oo) findGather(val, maxR, root * 2 + 2, m + 1, r);
  }
}

function findScatter(val, maxR, root, l, r) {
  if (l > maxR) return;
  if (r <= filledUp) return;
  if (sums[root] < val) return;

  if (l == r) {
    foundIndex = l;
    foundNewVal = sums[root] - val;
  } else {
    let m = (l + r) >> 1;
    let c1 = root * 2 + 1;
    let c2 = root * 2 + 2;
    if (sums[c1] >= val) findScatter(val, maxR, c1, l, m);
    else findScatter(val - sums[c1], maxR, c2, m + 1, r);
  }
}

/**
 * @param {number} _n
 * @param {number} _m
 */
var BookMyShow = function (_n, _m) {
  filledUp = -1;
  n = _n - 1;
  m = _m;
  build(m, 0, 0, n);
};

/**
 * @param {number} k
 * @param {number} maxRow
 * @return {number[]}
 */
BookMyShow.prototype.gather = function (k, maxRow) {
  foundIndex = oo;
  findGather(k, maxRow, 0, 0, n);

  if (foundIndex == oo) return EMPTY;

  setAt(foundNewVal, foundIndex, 0, 0, n);
  RESULT[0] = foundIndex;
  RESULT[1] = m - foundNewVal - k;
  return RESULT;
};

/**
 * @param {number} k
 * @param {number} maxRow
 * @return {boolean}
 */
BookMyShow.prototype.scatter = function (k, maxRow) {
  foundIndex = oo;
  findScatter(k, maxRow, 0, 0, n);

  if (foundIndex == oo) return false;

  setAt(foundNewVal, foundIndex, 0, 0, n);
  filledUp = foundIndex - 1;
  fillUp(0, 0, n);
  return true;
};
```