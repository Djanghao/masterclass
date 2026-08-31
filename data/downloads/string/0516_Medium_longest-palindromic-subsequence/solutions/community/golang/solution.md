# Golang | Dynamic programming | String | easy to understand

**Author:** codeart7
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-palindromic-subsequence/solutions/3417129/](https://leetcode.com/problems/longest-palindromic-subsequence/solutions/3417129/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$ where n is the length of the string.
This is because we are using nested 2 loops.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$ where n is the length of the string.

# Code
```
func max(a, b int) int {
    if a >= b {
        return a
    }
    return b
}

func longestPalindromeSubseq(s string) int {
    n := len(s)
    dp := make([][]int, n)

    for l := n-1; l >= 0; l-- {
        dp[l] = make([]int, n)
        dp[l][l] = 1;

        for h := l+1; h < n; h++ {
            if s[l] == s[h] {
                dp[l][h] = 2 + dp[l+1][h-1]
            } else {
                dp[l][h] = max(dp[l+1][h], dp[l][h-1])
            }
        }
    }

    return dp[0][n-1]
}
```