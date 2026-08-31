# Ruby || DP

**Author:** alecn2002
**Votes:** 2
**Link:** [https://leetcode.com/problems/profitable-schemes/solutions/3439901/](https://leetcode.com/problems/profitable-schemes/solutions/3439901/)

---

# Intuition
Dynamic Programming

# Approach
Dynamic Programming

# Complexity
- Time complexity:
$$O(n*minProfit*group.size)$$

- Space complexity:
$$O(n*minProfit)$$

# Code
```ruby
MOD = 10**9 + 7

def profitable_schemes(n, min_profit, group, profit)
    (dp = Array.new(min_profit + 1) {|i| Array.new(n + 1, 0)})[0][0] = 1
    group.zip(profit).each {|(g, p)|
        min_profit.downto(0) {|i|
            (n - g).downto(0) {|j|
                np = [i + p, min_profit].min
                dp[np][j + g] = (dp[np][j + g] + dp[i][j]) % MOD
            }
        }
    }
    dp.last.inject(0) {|r, v| (r + v) % MOD }
end

```