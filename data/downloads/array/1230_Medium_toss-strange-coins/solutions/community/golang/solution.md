# Go, DP Solution, beat 100% 7ms

**Author:** sitleon
**Votes:** 0
**Link:** [https://leetcode.com/problems/toss-strange-coins/solutions/5554426/](https://leetcode.com/problems/toss-strange-coins/solutions/5554426/)

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
func probabilityOfHeads(prob []float64, target int) float64 {
    dp := make([]float64, target+1)
    dp[0] = 1
    for i, v := range prob {
        for h := min(target, i+1); h >= 1; h-- {
            dp[h] = (dp[h-1]*v)+(dp[h]*(1-v))
        }
        dp[0] = dp[0]*(1-v)
    }
    return dp[target]
}
```