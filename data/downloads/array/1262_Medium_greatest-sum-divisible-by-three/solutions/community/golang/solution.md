# [Golang] short DP solution

**Author:** bobintornado
**Votes:** 2
**Link:** [https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/601387/](https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/601387/)

---

```go
func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func maxSumDivThree(nums []int) int {
    dp := [3]int{}
    temp := [3]int{}
    
    for _, n := range nums {
        temp = dp
        for _, sum := range temp {
            key := (sum+n) % 3 // reminder as key, key is index based
            dp[key] = max(sum+n, dp[key])
        }
    }
    
    return dp[0]
}
```