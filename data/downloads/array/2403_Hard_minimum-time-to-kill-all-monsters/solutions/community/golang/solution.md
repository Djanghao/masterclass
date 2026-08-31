# Golang | DP + Bitmask

**Author:** tw13
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-kill-all-monsters/solutions/2666607/](https://leetcode.com/problems/minimum-time-to-kill-all-monsters/solutions/2666607/)

---

- Golang implementation of solution from  https://leetcode.com/problems/minimum-time-to-kill-all-monsters/discuss/2547159/PythonC%2B%2B-Bitmask-%2B-DP
```
func minimumTime(power []int) int64 {
    n := len(power)
    dp := make([][]int64, n)
    for i := 0; i < n; i++ {
        dp[i] = make([]int64, 1 << n)
        for j := 0; j < (1 << n); j++ {
            dp[i][j] = math.MaxInt64
        }
        dp[0][1 << i] = int64(power[i])
    }
    
    for i := 0; i < n-1; i ++ {
        for j := 0; j < (1 << n); j++ {
            if dp[i][j] != math.MaxInt32 {
                for k := 0 ; k < n; k++ {
                    cur := 1 << k
                    if j & cur == 0 {
                        dp[i+1][j|cur] = min(dp[i+1][j|cur], dp[i][j] + int64(math.Ceil(float64(power[k]) / float64(i+2))))
                    }
                }
            }
        }
    }
    
    return dp[n-1][(1 << n) - 1]
}

func min(x, y int64) int64 {
    if x < y {
        return x
    }
    return y
}
```