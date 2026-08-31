# Swift 0/1 knapsack

**Author:** Prasann_1433
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-stone-weight-ii/solutions/6050637/](https://leetcode.com/problems/last-stone-weight-ii/solutions/6050637/)

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
```swift []
class Solution {
    func lastStoneWeightII(_ stones: [Int]) -> Int {
        // get the total weight 
        let totalWeight = stones.reduce(0, +)

        let sum = totalWeight / 2 
        let totalStoneCount = stones.count

        var dp1 = Array(repeating: 0, count: sum + 1)
        var dp = Array(repeating: dp1, count: totalStoneCount + 1)

        // apply knapsack problem 
        for i in 1...totalStoneCount {
            for j in 1...sum {
                if stones[i - 1] > j {
                    dp[i][j] = dp[i - 1][j]
                } else {
                    // previous row and prev row and related column 
                    dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - stones[i - 1]] + stones[i - 1])
                }
            }
        }

        return totalWeight - (2 * dp[totalStoneCount][sum])

    }
}

/*
2 --- 7 -- 4
2 --- 7 -- 1 -- 8 
2 --- 7 -- 1 -- 
7 
4
1
8
1
*/
```