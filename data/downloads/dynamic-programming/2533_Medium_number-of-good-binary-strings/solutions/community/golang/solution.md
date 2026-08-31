# Dynamic programming golang

**Author:** zy15662
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-good-binary-strings/solutions/3037920/](https://leetcode.com/problems/number-of-good-binary-strings/solutions/3037920/)

---

# Code
Naive solution 
```
const mod = 1000000007

func goodBinaryStrings(minLength int, maxLength int, oneGroup int, zeroGroup int) int {
    dp := make([][]int, maxLength+1)
    for i:=0; i<=maxLength;i++{dp[i]=make([]int, 2)}
    dp[0][0] = 1
    dp[0][1] = 1
    ans := 0
    for i:=1;i<=maxLength;i++{
        for j:=oneGroup; j <= i; j += oneGroup {
            dp[i][1] = (dp[i][1] + dp[i-j][0]) % mod
        }
        if i >= minLength {ans = (ans + dp[i][1]) % mod}
        for j:=zeroGroup; j <= i; j += zeroGroup {
            dp[i][0] = (dp[i][0] + dp[i-j][1]) % mod
        }
        if i >= minLength {ans = (ans + dp[i][0]) % mod}
    }
    return ans
}
```

Using prefix to optimize inner for loop in naive solution
```
const mod = 1000000007

func goodBinaryStrings(minLength int, maxLength int, oneGroup int, zeroGroup int) int {
    // dp[i][0]: number of good binary string for first i chars ending with 0
    // dp[i][1]: number of good binary string for first i chars ending with 1
    dp := make([][]int, maxLength+1)
    // prefix[i][0]: dp[i][0] + dp[i-oneGroup][0] + dp[i-2*oneGroup][0] + ...
    // prefix[i][1]: dp[i][1] + dp[i-zeroGroup][1] + dp[i-2*zeroGroup][1] + ...
    prefix := make([][]int, maxLength+1)

    for i:=0; i<=maxLength;i++{
        dp[i]=make([]int, 2)
        prefix[i]=make([]int, 2)
    }
    dp[0][0] = 1
    dp[0][1] = 1
    prefix[0][0] = 1
    prefix[0][1] = 1   
    ans := 0
    for i:=1;i<=maxLength;i++{
        if i >= oneGroup {
            dp[i][1] = (dp[i][1] + prefix[i-oneGroup][0]) % mod
        } 
        if i >= zeroGroup {
            dp[i][0] = (dp[i][0] + prefix[i-zeroGroup][1]) % mod
        }

        if i >= oneGroup {
            prefix[i][0] = (prefix[i-oneGroup][0] + dp[i][0]) % mod
        } else {
            prefix[i][0] = dp[i][0]
        }
        if i >= zeroGroup {
            prefix[i][1] = (prefix[i-zeroGroup][1] + dp[i][1]) % mod
        } else {
            prefix[i][1] = dp[i][1]
        }
        if i >= minLength {
            ans = (ans + dp[i][1]) % mod
            ans = (ans + dp[i][0]) % mod
        }
    }
    return ans
}
```