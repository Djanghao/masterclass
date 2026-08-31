# Javascript, DP

**Author:** andyoung
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/519916/](https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/519916/)

---

Translated from the solution 2.
```js
/**
 * @param {string} S
 * @return {number}
 */
var countPalindromicSubsequences = function(S) {
  const N = S.length;
  
  const A = [];
  for (const c of S) {
    A.push(c.charCodeAt(0) - 'a'.charCodeAt(0));
  }
  
  const prv = new Array(N).fill(null);
  const nxt = new Array(N).fill(null);
  let last = new Array(4).fill(-1);
  for (let i = 0; i < N; i++) {
    last[A[i]] = i;
    prv[i] = last.slice();
  }
  last = new Array(4).fill(-1);
  for (let i = N - 1; i >= 0; i--) {
    last[A[i]] = i;
    nxt[i] = last.slice();
  }

  const MOD = 10**9 + 7;
  const memo = new Array(N).fill(0).map(_ => new Array(N).fill(null));
  const dp = (i, j) => {
    if (memo[i][j] !== null) {
      return memo[i][j];
    }
    let ans = 1;
    if (i <= j) {
      for (let x = 0; x < 4; x++) {
        let i0 = nxt[i][x];
        let j0 = prv[j][x];
        if (i0 !== -1 && i <= i0 && i0 <= j) {
          ans += 1;
        }
        if (i0 !== -1 && j0 !== -1 && i0 < j0) {
          ans += dp(i0 + 1, j0 - 1);
        }
      }
    }
    ans %= MOD;
    memo[i][j] = ans;
    return ans;
  }
  return dp(0, N-1) - 1;
};
```