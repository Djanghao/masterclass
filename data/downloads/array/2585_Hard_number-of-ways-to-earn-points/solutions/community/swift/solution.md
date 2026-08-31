# DP solution

**Author:** zuji06
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/4406753/](https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/4406753/)

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
class Solution {
    func waysToReachTarget(_ target: Int, _ types: [[Int]]) -> Int {
        let n = types.count

        var DP:[[Int]] = Array(repeating: Array(repeating: 0, count:target+1), count: n)

        for i in 0...types[0][0] {
            let sum = i * types[0][1]
            if sum <= target {
                DP[0][sum] = 1
            } else {
                break
            }
        }

        for pos in 1..<types.count {
            for value in 0...target {
                var count = 0

                for i in 0...types[pos][0] {
                    var tempValue = value - i * types[pos][1]
                    if tempValue >= 0 {
                        count = (count + DP[pos-1][tempValue]) % 1000000007
                    } else {
                        break
                    }
                }

                DP[pos][value] = count
            }
        }

        return DP[types.count-1][target]
    }
}
```