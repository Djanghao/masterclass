# JS Solution - DP

**Author:** CuteTN
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4947719/](https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4947719/)

---

Pro tip: Xie must be loved \uD83D\uDC9C

Dear future me!
This is a gigantic DP approach. But...
1. If it works, don't touch it.
2. For each min difference `minD`, let `dp[0][n][k]` be the number of subsequences of length `k`, ends at `n`-th element, and each of the difference of any consecutive elements is **strictly** greater than `minD`.
3. For each min difference `minD`, let `dp[1][n][k]` be the number of subsequences of length `k`, ends at `n`-th element, and each of the difference of any consecutive elements is greater than **or equal to** `minD`, and at least one pair of element with the difference of `minD` presents in the subsequence.
4. The definition is confusing and I know there are better ways. But contest's time pressure were giving me brain freeze.
5. Love Justina Xie. \uD83D\uDC9C

# Complexity
- Let `n = nums.length`.
- Time complexity: $$O(kn^3)$$
- Space complexity: $$O(nk)$$

# Code
```js
//#region Numbers Compressor
class NumbersCompressor {
  constructor() {
    /**
     * @type {Set<number>}
     * @private
     */
    this._set = new Set();

    /**
     * @type {number[]}
     * @private
     */
    this._arr = [];

    /**
     * @type {Set<number>}
     * @private
     */
    this._compressed = false;
  }

  clear() {
    this._set.clear();
    this._compressed = false;
  }

  push(...items) {
    for (let i = items.length - 1; i >= 0; i--) {
      const item = items[i];
      if (!this._set.has(item)) {
        if (this._set.size < this._arr.length) this._arr[this._set.size] = item;
        else this._arr.push(item);
        this._set.add(item);
        this._compressed = false;
      }
    }
  }

  /** @private */
  _compress() {
    if (this._compressed) return;
    while (this._arr.length > this._set.size) this._arr.pop();
    this._arr.sort((a, b) => a - b);
    this._compressed = true;
  }

  get size() {
    return this._set.size;
  }

  getNum(ord) {
    if (!this._compressed) this._compress();
    return this._arr[ord];
  }

  getOrd(num) {
    if (!this._compressed) this._compress();

    let l = 0;
    let r = this._arr.length;
    let m;
    while (l <= r) {
      m = (l + r) >> 1;
      if (this._arr[m] === num) return m;
      if (this._arr[m] > num) r = m - 1;
      else l = m + 1;
    }

    return -1;
  }
}
//#endregion

let MOD = 1000000007;
let com = new NumbersCompressor();
function initArray() {
  return Array.from({ length: 53 }, () => Array(53).fill(0));
}
let dp = [initArray(), initArray()];
let ps = [initArray(), initArray()];

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfPowers = function (nums, k) {
  let n = nums.length;
  nums.sort((a, b) => a - b);

  com.clear();
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      com.push(nums[j] - nums[i]);
    }
  }

  let m = com.size;
  let res = 0;
  for (let id = 0; id < m; ++id) {
    let minD = com.getNum(id);
    if (!minD) continue;

    for (let i = 0; i <= n; ++i) {
      dp[0][i].fill(0);
      dp[1][i].fill(0);
      ps[1][i].fill(0);
      dp[1][i].fill(0);
    }

    let l = -1;
    let ll = -1;
    for (let i = 1; i <= n; ++i) {
      while (l + 1 < i - 1 && nums[i - 1] - nums[l + 1] >= minD) ++l;
      while (nums[ll] != nums[l]) ++ll;


      dp[0][i][1] = 1;
      dp[1][i][1] = 0;

      if (i) {
        ps[0][i][1] = ps[0][i - 1][1];
        ps[1][i][1] = ps[1][i - 1][1];
      }

      ps[0][i][1] = (ps[0][i][1] + dp[0][i][1]) % MOD;
      ps[1][i][1] = (ps[1][i][1] + dp[1][i][1]) % MOD;

      for (let j = 2; j <= k; ++j) {
        if (i) {
          ps[0][i][j] = ps[0][i - 1][j];
          ps[1][i][j] = ps[1][i - 1][j];
        }

        if (l >= 0) {
          let d = nums[i - 1] - nums[l];

          if (d == minD) {
            dp[0][i][j] = (dp[0][i][j] + ps[0][ll][j - 1]) % MOD;
            dp[1][i][j] =
              (dp[1][i][j] +
                ps[0][l + 1][j - 1] -
                ps[0][ll][j - 1] +
                ps[1][l + 1][j - 1] +
                MOD) %
              MOD;
          } else {
            dp[0][i][j] = (dp[0][i][j] + ps[0][l + 1][j - 1]) % MOD;
            dp[1][i][j] = (dp[1][i][j] + ps[1][l + 1][j - 1]) % MOD;
          }

          ps[0][i][j] = (ps[0][i][j] + dp[0][i][j]) % MOD;
          ps[1][i][j] = (ps[1][i][j] + dp[1][i][j]) % MOD;
        }
      }
    }

    res = (res + ((ps[1][n][k] * minD) % MOD)) % MOD;
  }

  return res;
};
```