# Go - DP and memoization

**Author:** ShawarmaMaker
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iii/solutions/5167177/](https://leetcode.com/problems/valid-palindrome-iii/solutions/5167177/)

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
func isValidPalindrome(s string, k int) bool {
    l := len(s)
    dp := make([][]int, l)
    for i := range dp { dp[i] = make([]int, l) }
    for i := range dp {
        if i < l-1 && s[i] != s[i+1] {
            dp[i][i+1] = 1
        }
    }
    for i := 3; i <= l; i++ {
        for j := 0; j + i - 1 < l; j++ {
            if s[j] == s[j+i-1] {
                dp[j][j+i-1]= dp[j+1][j+i-2]
            } else {
                dp[j][j+i-1] = min(min(dp[j][j+i-2] + 1, dp[j+1][j+i-1] + 1), dp[j+1][j+i-2] + 2)
            }
        }
    }
    fmt.Println(dp)
    return dp[0][l-1] <= k
}
//   b a c a b a a a
// b[0 1 0 1 0 1 0 1] 
// a[0 0 1 0 1 0 1 0] 
// c[0 0 0 1 0 1 0 1] 
// a[0 0 0 0 1 0 1 0] 
// b[0 0 0 0 0 1 0 1] 
// a[0 0 0 0 0 0 0 1] 
// a[0 0 0 0 0 0 0 0] 
// a[0 0 0 0 0 0 0 0]


```