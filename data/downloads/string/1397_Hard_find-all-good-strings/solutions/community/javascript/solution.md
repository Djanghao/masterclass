# Efficient JS solution - KMP + Digit DP with states

**Author:** CuteTN
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-good-strings/solutions/4586678/](https://leetcode.com/problems/find-all-good-strings/solutions/4586678/)

---

![image.png](./images/0.png)

Pro tip: Love lil Xi\xE8 \uD83D\uDC9C \u7231\u5C0F\u8C22 \uD83D\uDC9C
Node: this is an advanced usage of KMP to quickly navigate the next matching substring.

# Complexity
- Let `e = evil.length`; `a = alphabet size = 26`
- Time complexity: $$O(nea)$$
- Space complexity: $$O(ea)$$

# Code
```js
//#region KMP
class KMP {
  /**
   * Longest prefix suffix
   * @param {string} s
   * @param {number[]} [target]
   * @returns {number[]}
   */
  static findLSP(s, target) {
    let cur = 0;
    let n = s.length;
    const result = target ?? new Uint32Array(n);
    result.fill(0, 0, n);

    for (let i = 1; i < n; i++) {
      while (cur && s[i] != s[cur]) cur = result[cur - 1];
      if (s[i] == s[cur]) cur++;
      else cur = 0;
      result[i] = cur;
    }

    return result;
  }
}
//#endregion

let MOD = 1000000007;
let lsp = new Uint8Array(51);
let links = Array.from({ length: 51 }, () => new Uint8Array(26));
let cur = new Uint32Array(51);
let pre = new Uint32Array(51);

/**
 * @param {string} s
 * @param {number} el
 * @param {0 | 1} inclusive
 */
function solve(s, el, inclusive) {
  let n = s.length;

  cur.fill(0, 0, n);
  let c = 0;
  let tightMatch = 0;
  let tight = 1;

  for (let i = 0; i < n; ++i) {
    let tem = cur;
    cur = pre;
    pre = tem;

    c = s.charCodeAt(i) - 97;
    cur.fill(0);

    if (tight) {
      for (let nc = 0; nc < c; ++nc) {
        ++cur[links[tightMatch][nc]];
      }
      tightMatch = links[tightMatch][c];
      if (tightMatch == el) tight = 0;
    }

    for (let j = 0; j < el; ++j) {
      for (let nc = 0; nc < 26; ++nc) {
        cur[links[j][nc]] = (cur[links[j][nc]] + pre[j]) % MOD;
      }
    }
  }

  let res = inclusive * tight;
  for (let i = 0; i < el; ++i) res = (res + cur[i]) % MOD;
  return res;
}

/**
 * @param {number} n
 * @param {string} s1
 * @param {string} s2
 * @param {string} evil
 * @return {number}
 */
var findGoodStrings = function (n, s1, s2, evil) {
  KMP.findLSP(evil, lsp);
  let el = evil.length;

  for (let i = 0; i < el; ++i) {
    for (let c = 0; c < 26; ++c) {
      links[i][c] = i ? links[lsp[i - 1]][c] : 0;
    }
    links[i][evil.charCodeAt(i) - 97] = i + 1;
  }

  return (solve(s2, el, 1) - solve(s1, el, 0) + MOD) % MOD;
};
```