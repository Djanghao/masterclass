# TS Solution

**Author:** GennadySX
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/4572614/](https://leetcode.com/problems/count-different-palindromic-subsequences/solutions/4572614/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countPalindromicSubsequences(s: string): number {
    const n = s.length;
    const mod = 1e9 + 7;
    const prev = new Array(n).fill(-1);
    const next = new Array(n).fill(n);
    const mp = new Map<string, number>();
    for (let i = 0; i < n; i++) {
        if (mp.has(s[i])) {
        prev[i] = mp.get(s[i])!;
        }
        mp.set(s[i], i);
    }
    mp.clear();
    for (let i = n - 1; i >= 0; i--) {
        if (mp.has(s[i])) {
        next[i] = mp.get(s[i])!;
        }
        mp.set(s[i], i);
    }
    
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let g = 0; g < n; g++) {
        for (let i = 0, j = g; j < n; i++, j++) {
        if (g === 0) {
            dp[i][j] = 1;
        } else if (g === 1) {
            dp[i][j] = 2;
        } else {
            if (s[i] === s[j]) {
            const nextidx = next[i];
            const previdx = prev[j];
            if (nextidx > previdx) {
                dp[i][j] = ((2 * dp[i + 1][j - 1]) + 2) % mod;
            } else if (nextidx === previdx) {
                dp[i][j] = ((2 * dp[i + 1][j - 1]) + 1) % mod;
            } else {
                dp[i][j] = ((2 * dp[i + 1][j - 1]) % mod - dp[nextidx + 1][previdx - 1]) % mod;
            }
            } else {
            dp[i][j] = ((dp[i][j - 1] + dp[i + 1][j]) % mod - dp[i + 1][j - 1]) % mod;
            }
        }
        }
    }
    return dp[0][n - 1] < 0 ? dp[0][n - 1] + mod : dp[0][n - 1];
}
```