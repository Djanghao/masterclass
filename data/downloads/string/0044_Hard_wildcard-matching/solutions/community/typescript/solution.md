# Typescript - dynamic programming

**Author:** ahmedengu
**Votes:** 1
**Link:** [https://leetcode.com/problems/wildcard-matching/solutions/1152064/](https://leetcode.com/problems/wildcard-matching/solutions/1152064/)

---

```
function isMatch(s: string, p: string): boolean {
    const sLen = s.length, pLen = p.length;
    const dp = _.times(sLen + 2, () => _.times(pLen + 2, _.constant(false)));

    dp[sLen][pLen] = true;
    for (let i = sLen; i >= 0; i--)
        for (let j = pLen - 1; j >= 0; j--)
            if (s[i] === p[j] || p[j] === '?') dp[i][j] = dp[i + 1][j + 1];
            else if (p[j] === '*') dp[i][j] = dp[i][j + 1] || dp[i + 1][j] || dp[i + 1][j + 1];

    return dp[0][0];
};
```