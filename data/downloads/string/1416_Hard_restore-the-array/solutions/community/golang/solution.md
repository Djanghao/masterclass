# Recursion -> Memoization -> DP with explanations using Go

**Author:** nacoward
**Votes:** 1
**Link:** [https://leetcode.com/problems/restore-the-array/solutions/3448291/](https://leetcode.com/problems/restore-the-array/solutions/3448291/)

---

# Tips
From the topic we know that the result would modulo 10^9 + 7, we had better consider whether the DP would solve the problem.

# Intuition
Divide the problem into sub problems.
Take `Input: s = "1317", k = 2000` for example, we can use `f(1317, 2000)` to denote the answer for the input. So we view it from the back of the string s, we konw that 7 could be indepent, or to be the part of "17", or to be the part of "317", and so on.

So `f(1317, 2000)` = `f(131, 2000)` + `f(13, 2000)` + `f(1, 2000)` + `f(-, 2000)`.
And
`f(131, 2000)` means the form of `[... , 7]`
`f(13, 2000)` means the form of `[... , 17]`
`f(1, 2000)` means the form of `[... , 317]`
`f(-, 2000)` means the form of `[1317]`
Pay attention to the last `f(-, 2000)`, `-` means empty string. So in that situation we would know that `f(-, 2000)=1`

Empty string would be an exit, and `f(-, k)` would be 1, which means we have already struggled to reach the end, we just doing nothing. if not, we can detect the error in advance, and it would not allow us to arrive the end here.

# Approach
Recursion

# Complexity
- Time complexity:
O((lgk) ^ N)

- Space complexity:
O(Recursion's depth) = O(lgk)

# Code
```
func numberOfArrays(s string, k int) int {
    if len(s) == 0 {return 1}  // the end, the exit
    if s[0] == '0' {return 0}
    if len(s) == 1 {
        if int(s[0]-'0') > k {return 0}
        return 1
    }
    MOD := int(1e9+7)
    ans := numberOfArrays(s[1:], k)
    for i:=2; i<=len(s); i++ {
        lead, _ := strconv.Atoi(s[:i])
        if lead > k {break}
        ans = (ans + numberOfArrays(s[i:], k)) % MOD
    }
    return ans
}
```

Use array to store sub problem's result to avoid repeated computing.
dp[i] means the answer of `f(s[i:], k)`,
and dp[0] would be the answer of `f(s[0:], k)` = `f(s, k)`, which is the answer of the origin problem.

# Code
```
func numberOfArrays(s string, k int) int {
    n, MOD := len(s), int(1e9+7)
    dp := make([]int, n+1)
    var helper func(int) int
    helper = func(start int) int {
        if start==n {return 1} // the end, the exit
        if s[start]=='0' {return 0}

        if dp[start] > 0 {return dp[start]}
        for add:=1; start+add<=n; add++ {
            lead, _ := strconv.Atoi(s[start:start+add])
            if lead > k {break}
            dp[start+add] = helper(start+add)
            dp[start] = (dp[start]+dp[start+add]) % MOD
        }
        return dp[start]
    }
    return helper(0)
}
```

At last, use the bottom-up way to avoid recursion
# Code
```
func numberOfArrays(s string, k int) int {
    n, MOD := len(s), int(1e9+7)
    dp := make([]int, n+1)
    dp[n] = 1  // the end, the exit
    for i:=n-1; i>=0; i-- {
        if s[i]=='0' {continue}
        for j:=i+1; j<=n; j++ {
            lead, _ := strconv.Atoi(s[i:j])
            if lead > k {break}
            dp[i] = (dp[i] + dp[j]) % MOD
        }
    }
    return dp[0]
}
```
