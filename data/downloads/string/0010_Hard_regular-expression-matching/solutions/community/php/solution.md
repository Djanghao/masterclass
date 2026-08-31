# [0ms][1LINER][100%][Fastest Solution Explained] O(n) time complexity | O(n) space complexity

**Author:** darian-catalin-cucer
**Votes:** 22
**Link:** [https://leetcode.com/problems/regular-expression-matching/solutions/2056415/](https://leetcode.com/problems/regular-expression-matching/solutions/2056415/)

---

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* *** Python ***

```

    def isMatch(self, s: str, p: str) -> bool:
        s, p = ' '+ s, ' '+ p
        lenS, lenP = len(s), len(p)
        dp = [[0]*(lenP) for i in range(lenS)]
        dp[0][0] = 1

        for j in range(1, lenP):
            if p[j] == '*':
                dp[0][j] = dp[0][j-2]

        for i in range(1, lenS):
            for j in range(1, lenP):
                if p[j] in {s[i], '.'}:
                    dp[i][j] = dp[i-1][j-1]
                elif p[j] == "*":
                    dp[i][j] = dp[i][j-2] or int(dp[i-1][j] and p[j-1] in {s[i], '.'})

        return bool(dp[-1][-1])

```

```
```

```
```
***"We are Anonymous. We are legion. We do not forgive. We do not forget. Expect us. Open your eyes.." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***