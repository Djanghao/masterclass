# Golang | Top-down 1D DP

**Author:** tw13
**Votes:** 0
**Link:** [https://leetcode.com/problems/handshakes-that-dont-cross/solutions/3231768/](https://leetcode.com/problems/handshakes-that-dont-cross/solutions/3231768/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 
- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func numberOfWays(numPeople int) int {
    memo := map[int]int{2:1}
    return dp(numPeople, memo)
}

func dp(numPeople int, memo map[int]int) int {
    MOD := 1_000_000_007
    if v, ok := memo[numPeople]; ok {
        return v
    }
    
    count := 0
    for i := 2; i <= numPeople; i += 2 {
        g1, g2 := dp(i-2, memo), dp(numPeople-i, memo)
        if g1 == 0 {
            count += g2
        } else if g2 == 0 {
            count += g1
        } else {
            count += dp(i-2, memo) * dp(numPeople-i, memo)
        }
        count %= MOD
    }
    memo[numPeople] = count 
    return count
}
```