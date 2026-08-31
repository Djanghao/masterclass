# Golang, DP, explanation

**Author:** shacat
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/solutions/1075659/](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/solutions/1075659/)

---

There're 2 sub-problems to solve:
* first, given any string, how do we find the subsequence that is the longest palindrome string?
* second, how do we make sure the subsequence contains at least one character from both word1 and word2? (the description requires that)

The first problem can be solved by bottom-up DP i.e. https://leetcode.com/problems/longest-palindromic-subsequence/
The second can be solved by slightly tweaking the above solution: we know that there has to be 1 character in word2 that equals to 1 character in word1 to be valid. so the ans must be when `i >= len(word1) && j < len(word1)`

```golang
func longestPalindrome(word1 string, word2 string) int {
  word := word1+word2
  dp := make([][]int, len(word))
  for i := range dp {
    dp[i] = make([]int, len(word))
    dp[i][i] = 1
  }
  
  ans := 0
  
  for i := range word {
    for j := i-1; j >= 0; j-- {
      dp[j][i] = max(dp[j][i], dp[j+1][i])
      dp[j][i] = max(dp[j][i], dp[j][i-1])
      if word[j] == word[i] {
        dp[j][i] = max(dp[j][i], dp[j+1][i-1]+2)
        
        // only update ans if i points to char in word2 and j points to char in word1
        if i >= len(word1) && j < len(word1) {
          ans = max(ans, dp[j][i])
        }
      }
    }
  }
  
  return ans
}

func max(a, b int) int {
  if a > b {
    return a
  }
  return b
}
```