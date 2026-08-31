# Sliding Window || DP || Beats 100%

**Author:** DraftTin
**Votes:** 0
**Link:** [https://leetcode.com/problems/new-21-game/solutions/4193334/](https://leetcode.com/problems/new-21-game/solutions/4193334/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func new21Game(n int, k int, maxPts int) float64 {
    if maxPts + k - 1 <= n || k == 0 {
        return 1.0
    }
    dp := make([]float64, n + 1)
    dp[0] = 1
    windowSum := 1.0  // window size = maxPts
    res := 0.0
    maxP := float64(maxPts)
    for i := 1; i <= n; i++ {
        dp[i] = windowSum / maxP
        if i < k {
            windowSum += dp[i]
        } else {
            res += dp[i]
        }
        if i >= maxPts {
            windowSum -= dp[i - maxPts]
        }
    }
    return res
}
```

# How to think this problem
We can think this math problem as a dp problem. So let say we need to get 5, and maxPts is 3. Then the probability of getting 5: 
```
p(5) = p(2) * 1 / 3 + p(3) * 1 / 3  + p(4) * 1 / 3
```
because the probability of getting 1, 2, and 3 are equal. 

Therefore, the dp equation is clear: 
```
p(i) = (p(i - 1) + ... + p(i - maxPts)) / maxPts
```

Also because the maxPts is fixed, we can maintain the sum as a sliding window.

**Note: When i >= k, we shouldn't add this probability to calculate other probabilities because we can only gain points when our points < k.**






