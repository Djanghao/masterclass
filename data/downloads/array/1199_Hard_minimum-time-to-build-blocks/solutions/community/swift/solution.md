# 💡Swift - Simple Solution - Dynamic Programming

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/3994766/](https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/3994766/)

---

# Solution
```
class Solution {
    func minBuildTime(_ blocks: [Int], _ split: Int) -> Int {
        let blocks = blocks.sorted()

        var dp: [[Int: Int]] = Array(repeating: [:], count: blocks.count + 1)
        func helper(_ workers: Int, _ remainingBlocks: Int) -> Int {
            if remainingBlocks < 1 {
                return 0
            }
            if workers <= 0 {
                return Int.max
            }
            if let result = dp[remainingBlocks][workers] {
                return result
            }
            if remainingBlocks <= workers {
                return blocks[remainingBlocks - 1]
            }

            let workTime = max(blocks[remainingBlocks - 1], helper(workers - 1, remainingBlocks - 1))
            let splitTime = split + helper(workers * 2, remainingBlocks)
            let result = min(workTime, splitTime)

            dp[remainingBlocks][workers] = result
            return result
        }

        return helper(1, blocks.count)
    }
}
```

# Complexity
- Time: $$O(n^2)$$
- Space: $$O(n^2)$$