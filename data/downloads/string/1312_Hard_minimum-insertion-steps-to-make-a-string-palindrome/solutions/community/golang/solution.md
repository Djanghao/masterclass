# Recursion -> Memoization -> DP with explanations using Go

**Author:** nacoward
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/3444177/](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/3444177/)

---

# Intuition
Divide the problem into sub problems.
for a string s with length n, 
- if s[0]==s[n-1], then f(s) = f(s[1:n-1]) 
- else, f(s) = 1+min(f(s[1:n]), f(s(:n-1)))

So we can use recursion to solve this problem

# Approach
Recursion

# Complexity
- Time complexity:
O(2^N) for the worst situation

- Space complexity:
O(Recursion's depth) = O(N)

# Code
```
func minInsertions(s string) int {
    n := len(s)
    if n <= 1 {return 0}
    if s[0]==s[n-1] {return minInsertions(s[1:n-1])}
    return 1+min2(minInsertions(s[1:]), minInsertions(s[:n-1]))
}
func min2(a, b int) int {if a < b {return a} else {return b}}
```

# Improve with memorization
As we can see, recursion's time complexity is O(2^N), a lot of same sub problems are repeatedly computed. 
e.g. for the following equation,
- else, f(s) = 1+min(f(s[1:n]), f(s(:n-1)))

we can conclude that f(s[1:n-1]) would be computed in both f(s[1:n]) and f(s[:n-1]), so f(s[1:n-1]) is repeatedly computed. And the same situation for every f(s[i:j]) when i>=1 and j<=n-1 and i<j.

We can use two variables (l, r) to mark one specific sub problem. Imagine function `f` is what we want, `f(0, n-1)` denotes the original problem. In this way, we need compute every sub problem, which is `f(i, j), for every i<j pair`.

Moreover, use some way to store every sub problem's result to avoid repeated computing. This is of vital importance to understand further improvements.

So what we use and how we use it to store every sub problem's result?
The answer is easy, use the easiest data structure, which is array. Use the
2D array, dp[i][j] to denote the answer of sub problem `f(i,j)`, which means the answer of f(s[i:j])
```
func minInsertions(s string) int {
    n := len(s)
    dp := make([][]int, n)
    for i:=0; i<n; i++ {
        dp[i] = make([]int, n)
        for j:=0; j<n; j++ {dp[i][j] = -1}
    }

    var helper func(int, int) int
    helper = func(l, r int) int {
        if r-l<=0 {return 0}
        if dp[l][r] > -1 {return dp[l][r]}
        if s[l] == s[r] {
            dp[l+1][r-1] = helper(l+1, r-1)
            dp[l][r] = dp[l+1][r-1]
            return dp[l][r]
        }
        dp[l][r] = 1 + min2(helper(l+1, r), helper(l, r-1))
        return dp[l][r]
    }
    return helper(0, n-1)
}

func min2(a, b int) int {if a < b {return a} else {return b}}
```

At last, we already understand how to use the memoization to solve this
problem, we can simplify it one step further.

We use the bottom-up way, which can help we avoid using recursion.

```
func minInsertions(s string) int {
    n := len(s)
    dp := make([][]int, n)
    for i:=0; i<n; i++ {dp[i] = make([]int, n)}

    for d:=1; d<n; d++ {  // d means distance
        for i:=0; i+d<n; i++ {
            if s[i]==s[i+d] {
                dp[i][i+d] = dp[i+1][i+d-1]
            } else {
                dp[i][i+d] = 1 + min2(dp[i][i+d-1], dp[i+1][i+d])
            }
        }
    }
    return dp[0][n-1]
}
func min2(a, b int) int {if a < b {return a} else {return b}}
```
We need pay attention to lots of details here. e.g. dp[i][i] is always equal to 0, because dp[i][i] means the ith character of s, and for one character, it is palindrome itself, so dp[i][i] = 0