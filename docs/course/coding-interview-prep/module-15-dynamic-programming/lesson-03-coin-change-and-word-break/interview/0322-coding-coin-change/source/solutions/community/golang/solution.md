# Go TopDown DP + BottomUp DP clear solutions

**Author:** algopher
**Votes:** 9
**Link:** [https://leetcode.com/problems/coin-change/solutions/2049373/](https://leetcode.com/problems/coin-change/solutions/2049373/)

---

TopDown DP: Recursion without Memoization
```
func coinChange(coins []int, amount int) int {
    var dfs func(remain int) int
    dfs = func(remain int) int {
        if remain == 0 { return 0 }
        if remain < 0 { return math.MaxInt32 }
        numberOfCoins := math.MaxInt32
        for _, c := range coins {
            if c > remain { continue }
            numberOfCoins = Min(numberOfCoins, 1+dfs(remain-c))
        }
        return numberOfCoins
    }
    numberOfCoins := dfs(amount)
    if numberOfCoins == math.MaxInt32 { return -1 }
    return numberOfCoins
}

func Min(a, b int) int { if a < b { return a }; return b }
```

TopDown DP: Recursion + Memoization
```
func coinChange(coins []int, amount int) int {
    memo := make([]*int, amount+1)
    var dfs func(remain int) int
    dfs = func(remain int) int {
        if memo[remain] != nil { return *memo[remain] }
        if remain == 0 { return 0 }
        if remain < 0 { return math.MaxInt32 }
        numberOfCoins := math.MaxInt32
        for _, c := range coins {
            if c > remain { continue }
            numberOfCoins = Min(numberOfCoins, 1+dfs(remain-c))
        }
        memo[remain] = &numberOfCoins; return numberOfCoins
    }
    numberOfCoins := dfs(amount)
    if numberOfCoins == math.MaxInt32 { return -1 }
    return numberOfCoins
}

func Min(a, b int) int { if a < b { return a }; return b }
```

BottomUp DP 2-dimensions
```
func coinChange(coins []int, amount int) int {
    dp := make([][]int, len(coins)+1); for i := range dp { dp[i] = make([]int, amount+1) }
    for i := 1; i <= amount; i++ { dp[0][i] = math.MaxInt32 }

    for c := 1; c <= len(coins); c++ {
        for a := 1; a <= amount; a++ {
            if a >= coins[c-1] {
                dp[c][a] = Min(dp[c-1][a], 1+dp[c][a-coins[c-1]])
            } else {
                dp[c][a] = dp[c-1][a]
            }
        }
    }
    
    if dp[len(coins)][amount] == math.MaxInt32 { return -1 }
    return dp[len(coins)][amount]
}

func Min(a, b int) int { if a < b { return a }; return b }
```

BottomUp DP 1-dimension
```
func coinChange(coins []int, amount int) int {
    dp := make([]int, amount+1)
    for i := 1; i <= amount; i++ { dp[i] = math.MaxInt32 }
    
    for _, c := range coins {
        for a := 1; a <= amount; a++ {
            if a >= c {
                dp[a] = Min(dp[a], 1+dp[a-c])
            }
        }
    }
    
    if dp[amount] == math.MaxInt32 { return -1 }
    return dp[amount]
}

func Min(a, b int) int { if a < b { return a }; return b }
```