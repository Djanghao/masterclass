# [Golang] Top-down DP

**Author:** vasakris
**Votes:** 1
**Link:** [https://leetcode.com/problems/jump-game-v/solutions/3509349/](https://leetcode.com/problems/jump-game-v/solutions/3509349/)

---

# Complexity
- Time complexity:
O(n*d)

- Space complexity:
O(n)

# Code
```
func maxJumps(arr []int, d int) int {
    n := len(arr)
    dp := make([]int, n)

    res := 0
    for i := 0; i < n; i++ {
        res = max(res, dfs(arr, dp, i, d))
    }
    return res
}

func dfs(arr, dp []int, idx, d int) int {
    if dp[idx] != 0 {
        return dp[idx]
    }

    res := 1
    for j := idx+1; j <= min(idx+d, len(arr)-1) && arr[idx] > arr[j]; j++ {
        res = max(res, dfs(arr, dp, j, d) + 1)
    }
    for j := idx-1; j >= max(idx-d, 0) && arr[idx] > arr[j]; j-- {
        res = max(res, dfs(arr, dp, j, d) + 1)
    }
    dp[idx] = res
    return res
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```