# Swift | DP | 100% Performance

**Author:** danilaferents
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3521163/](https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3521163/)

---

# Complexity
- Time complexity: O(high)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(high)

# Code
```
class Solution {
    func countGoodStrings(_ low: Int, _ high: Int, _ zero: Int, _ one: Int) -> Int {
        var dp = Array(repeating: 0, count: high + 1)
        var mod = 1_000_000_007

        dp[0] = 1
        for i in 1 ... high {
            if i >= zero {
                dp[i] += dp[i - zero]
            }

            if i >= one {
                dp[i] += dp[i - one]
            }

            dp[i] %= mod
        }

        return dp[low...].reduce(0, {
            return ($0 + $1) % mod
        })
    }
}
```