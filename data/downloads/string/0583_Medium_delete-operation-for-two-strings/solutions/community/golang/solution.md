# Based on Longest Common Subsequence - Bottom up - Tabulation

**Author:** tuanbieber
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-operation-for-two-strings/solutions/2250099/](https://leetcode.com/problems/delete-operation-for-two-strings/solutions/2250099/)

---

```
func minDistance(word1 string, word2 string) int {
    lcs := longestCommonSubsequence(word1, word2)
    
    return len(word1)+len(word2)-2*lcs
}

func longestCommonSubsequence(str1 string, str2 string) int {
    dp := make([][]int, len(str1)+1)
 
    for i := 0; i < len(str1)+1; i++ {
        dp[i] = make([]int, len(str2)+1)
    }
    
    for r := len(str1); r >= 0; r-- {
        for c := len(str2); c >= 0; c-- {
            if r == len(str1) || c == len(str2) {
                dp[r][c] = 0 
                continue
            }
            
            if str1[r] == str2[c] {
                dp[r][c] = dp[r+1][c+1] + 1
            } else {
                dp[r][c] = max(dp[r+1][c], dp[r][c+1])
            }
        }
    }
    
    return dp[0][0]
}

func max(a, b int) int {
    if a > b { return a }
    return b
}
```