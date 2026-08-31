# [TypeScript] DP solution (86ms)

**Author:** badnewz
**Votes:** 2
**Link:** [https://leetcode.com/problems/string-compression-ii/solutions/4471334/](https://leetcode.com/problems/string-compression-ii/solutions/4471334/)

---

![Runtime](./images/0.jpeg)

# Complexity
- Time complexity: $\\mathcal{O}(n\	imes k^2)$
- Space complexity: $\\mathcal{O}(n\	imes k)$

# Code
```
function getLengthOfOptimalCompression(s: string, k: number): number {
    const getLength = (cnt: number) => cnt === 1 ? 1 : cnt < 10 ? 2 : cnt < 100 ? 3 : 4;
    const n = s.length, dp = Array.from({ length: n + 1 }, () => Array(k + 1));
    for (let i = n; i >= 0; i--)
        for (let j = 0; j <= k; j++) {
            if (i === n) { dp[n][j] = 0; continue; }
            dp[i][j] = j > 0 ? dp[i + 1][j - 1] : Infinity;
            let del = j, cnt = 0;
            for (let iEnd = i; iEnd < n && del >= 0; iEnd++)
                if (s[iEnd] === s[i])
                    dp[i][j] = Math.min(dp[i][j], getLength(++cnt) + dp[iEnd + 1][del])
                else del--;
        }
    return dp[0][k];
};


```