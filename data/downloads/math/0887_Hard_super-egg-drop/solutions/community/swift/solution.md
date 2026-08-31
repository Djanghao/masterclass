# SWIFT | DP | O(n*k)

**Author:** gauravgupta1602
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-egg-drop/solutions/5714884/](https://leetcode.com/problems/super-egg-drop/solutions/5714884/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. --> DP

# Complexity
- Time complexity: O(n*k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func superEggDrop(_ n: Int, _ k: Int) -> Int {
        var dp = Array(repeating: 0, count: n+1)
        var m = 0
        while dp[n] < k {
            m += 1
            var x = n
            while x > 0 {
                dp[x] += 1 + dp[x - 1]
                x -= 1
            }
        }
        return m
    }
}
```