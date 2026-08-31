# JS solution - if if else if else if else if else else

**Author:** CuteTN
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindrome-rearrangement-queries/solutions/4482559/](https://leetcode.com/problems/palindrome-rearrangement-queries/solutions/4482559/)

---

# Complexity
- let `a = alphabet size = 26` (It's lame to treat this as constant, let's be fair)
- Time complexity: $$O(a(q + n))$$
- Space complexity: $$O(an)$$

# Code
```js
const streak = new Uint32Array(50001);
let count1 = Array.from({ length: 26 }, () => new Uint32Array(50001));
let count2 = Array.from({ length: 26 }, () => new Uint32Array(50001));

function isSame(l, r) {
  return l > r || streak[r + 1] <= l;
}

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePalindromeQueries = function (s, queries) {
  let m = s.length;
  let n = m >> 1;
  --m;

  streak[0] = 0;
  for (let i = 0; i < n; ++i) {
    let l = s.charCodeAt(i) - 97;
    let r = s.charCodeAt(m - i) - 97;

    for (let c = 0; c < 26; ++c) {
      count1[c][i + 1] = count1[c][i];
      count2[c][i + 1] = count2[c][i];
    }
    ++count1[l][i + 1];
    ++count2[r][i + 1];

    if (l == r) {
      streak[i + 1] = streak[i];
    } else {
      streak[i + 1] = i + 1;
    }
  }

  let q = queries.length;
  let res = Array(q).fill();
  let swapped = 0;

  for (let i = 0; i < q; ++i) {
    if (swapped) {
      let t = count1;
      count1 = count2;
      count2 = t;
      swapped = 0;
    }

    let [l1, r1, r2, l2] = queries[i];
    l2 = m - l2;
    r2 = m - r2;

    if (l1 > l2) {
      let t = l1;
      l1 = l2;
      l2 = t;

      t = r1;
      r1 = r2;
      r2 = t;

      t = count1;
      count1 = count2;
      count2 = t;
      swapped = 1;
    }

    if (!isSame(0, l1 - 1)) {
      res[i] = false;
      continue;
    }

    if (r2 <= r1) {
      if (!isSame(r1 + 1, n - 1)) {
        res[i] = false;
        continue;
      }

      for (let c = 0; c < 26; ++c) {
        if (
          count1[c][r1 + 1] - count1[c][l1] !=
          count2[c][r1 + 1] - count2[c][l1]
        ) {
          res[i] = false;
          continue;
        }
      }
    } else {
      if (!isSame(r2 + 1, n - 1)) {
        res[i] = false;
        continue;
      }

      if (l2 > r1) {
        if (!isSame(r1 + 1, l2 - 1)) {
          res[i] = false;
          continue;
        }

        for (let c = 0; c < 26; ++c) {
          if (
            count1[c][r1 + 1] - count1[c][l1] !=
              count2[c][r1 + 1] - count2[c][l1] ||
            count1[c][r2 + 1] - count1[c][l2] !=
              count2[c][r2 + 1] - count2[c][l2]
          ) {
            res[i] = false;
            continue;
          }
        }
      } else {
        for (let c = 0; c < 26; ++c) {
          let t =
            count2[c][r2 + 1] -
            count2[c][l2] -
            count1[c][r2 + 1] +
            count1[c][r1 + 1];
          if (
            t < 0 ||
            t !=
              count1[c][r1 + 1] - count1[c][l1] - count2[c][l2] + count2[c][l1]
          ) {
            res[i] = false;
            continue;
          }
        }
      }
    }

    res[i] ??= true;
  }

  return res;
};
```